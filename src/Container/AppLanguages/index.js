import React,{Component}from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    I18nManager
}from 'react-native';
import { Container, Icon, Image } from 'native-base';
import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { Black, lightGrey, _Yellow } from '../../Colors';
import { TextInput,} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import LanguageList from '../../Component/LanguagesList';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';
import DialogBox from 'react-native-dialogbox'; 
import I18n from '../../Component/i18n';
import {translate}from '../../Component/i18n';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');
const Chinies= '../../Assets/chinies.png';
const english='../../Assets/english.png';
const language= [
    {id:'1',name:'English language',value:'eng',  selected:false,url:require(english)},
    {id:'2',name:'Chinese language',value:'ch',  selected:false,url:require(Chinies)},
    // {id:'2',name:'Spanish language',selected:false},
    // {id:'3',name:'French  language',selected:false},
    // {id:'4',name:'Japanese language',selected:false},
    // {id:'5',name:'German language',selected:false},
    // {id:'6',name:'Russian language',selected:false},
    // {id:'8',name:'Italian language',selected:false},
]
export default class AppLanguage extends Component{
    constructor(props){
        super(props);
        this.state={
            languageChange:false,
            loading:true,
            inputValue:'',
            _languageList:language
        }
    }
    goBack=()=>{
  this.props.navigation.pop()
    }
    _Search=()=>{
        
    }
    onSelectLanguage=(item)=>{
        this.dialogbox.confirm({
            title:'Confirm!',
            content:'Do you want to change App language',
            ok: {
                text:'Ok',
                callback: () => {
                    this.setLanguage(item.value)
                },
            },
            cancel: {
                text: 'No',
                style: {
                    color: 'red'
                },
            },
        });
    }
    setLanguage=(lang)=>{
        try {
            AsyncStorage.setItem('lang', JSON.stringify(lang)).then(() => {
               
                // if (lang === "ar") {
                //     I18nManager.forceRTL(true);
                //     if (!I18nManager.isRTL) {
                //         RNRestart.Restart();
                //     }
                // } else {
                    
                //     I18nManager.forceRTL(false);
                //     if (!I18nManager.isRTL) {
                        
                //         RNRestart.Restart();
                //     }
                // }
                I18n.locale = lang
                RNRestart.Restart();
                
                // I18n.locale = JSON.stringify(lang)
                // console.log('after json stringify',lang)
                //RNRestart.Restart()
            })
            this.setState({ languageChange: !this.state.languageChange })
        } catch (error) {
            console.log('error occure while selecting default language')
        }
    }
//     onSelect=(item,index)=>{
//     console.log('zaheer',item,'index',index)
//     let selectedIndex=0;
//    let selectedLanguage = this.state._languageList.slice();

//    selectedLanguage.map((lang)=>{
//        if(lang.name===item.name && index===selectedIndex){
//            console.log('language selected',item.name)
//            selectedLanguage[index].selected =true
//            selectedIndex +=1;
//        }else{
//         selectedLanguage[selectedIndex].selected =false
//         selectedIndex+=1;
//        }
//    })
   
//    this.setState({_languageList:selectedLanguage});
//     }
    _SelectLanguage =({item,index})=>{
       return( 
       <LanguageList
        item={item}
        onSelectLanguage={()=>this.onSelectLanguage(item)}
        //onSelect={()=>this.onSelect(item,index)}
        />
       )}
    render(){
        return(
            <Container style={styles.container}>
             <_AppHeader
             styles={{height: screenHeight*0.08}}
             leftIcon={'keyboard-arrow-left'}
             leftIconStyle={{color:'#FFFFFF'}}
             headerText={'SELECT LANGUAGE'}
             leftText={'Back'}
             leftPress={()=>this.goBack()}
             leftIconPress={()=>this.goBack()}
             />
           {/* <View style={styles.innerView}>
            <Text style={styles._textStyle}>what do you want to learn ?</Text>
            <View style={styles.searchView}>
             <TextInput
             style={{flex:1,fontSize:RFValue(14),fontWeight:'500',}}
             placeholder={'Search Subject'}
             placeholderTextColor={_Yellow}
             onChangeText={(value)=>this.setState({inputValue:value})}
             value={this.state.inputValue}
             />
             <Icon
             name={'search'}
             type={'MaterialIcons'}
             style={{color:_Yellow}}
             onPress={()=>this._Search()}
             />
            </View>
            <View style={styles.bottomBorder}></View>
           </View> */}
          
          <FlatList
          extraData={this.state}
          data={this.state._languageList}
          keyExtractor={(item)=>{item.id}}
          renderItem={this._SelectLanguage}
          />
          <DialogBox ref={dialogbox => { this.dialogbox = dialogbox }} />
            </Container>
        )
    }
}