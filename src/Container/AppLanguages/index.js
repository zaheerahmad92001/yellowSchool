import React,{Component}from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
}from 'react-native';
import { Container, Icon } from 'native-base';
import styles from './styles'
import _AppHeader from '../../Component/AppHeader';
import { Black, lightGrey, _Yellow } from '../../Colors';
import { TextInput,} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import LanguageList from '../../Component/LanguagesList';
const {height:screenHeight,width:screenWidth} = Dimensions.get('window');

const language= [
    {id:'1',name:'English language',selected:false},
    {id:'2',name:'Spanish language',selected:false},
    {id:'3',name:'French  language',selected:false},
    {id:'4',name:'Japanese language',selected:false},
    {id:'5',name:'German language',selected:false},
    {id:'6',name:'Russian language',selected:false},
    {id:'7',name:'Chinies language',selected:false},
    {id:'8',name:'Italian language',selected:false},
]
export default class AppLanguage extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            _languageList:language
        }
    }
    goBack=()=>{
  //this.props.navigation.navigate('SignUp')
    }
    _Search=()=>{
        
    }
    onSelect=(item,index)=>{
    console.log('zaheer',item,'index',index)
    let selectedIndex=0;
   let selectedLanguage = this.state._languageList.slice();

   selectedLanguage.map((lang)=>{
       if(lang.name===item.name && index===selectedIndex){
           console.log('language selected',item.name)
           selectedLanguage[index].selected =true
           selectedIndex +=1;
       }else{
        selectedLanguage[selectedIndex].selected =false
        selectedIndex+=1;
       }
   })
   //selectedLanguage[5].selected =true

   this.setState({_languageList:selectedLanguage});
    }
    _SelectLanguage =({item,index})=>{
       return( 
       <LanguageList
        item={item}
        onSelect={()=>this.onSelect(item,index)}
       // checked={false}
        />
       )}
    render(){
        return(
            <Container style={styles.container}>
             <_AppHeader
             styles={{backgroundColor:'white',height: screenHeight*0.08}}
             leftIcon={'keyboard-arrow-left'}
             leftIconStyle={{color:_Yellow}}
             leftText={'Back'}
             leftTextStyle={{color:_Yellow}}
             leftPress={()=>this.goBack()}
             />
           <View style={styles.innerView}>
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
           </View>
           <View style={{marginHorizontal:RFValue(20)}}>
          <FlatList
          extraData={this.state}
          data={this.state._languageList}
          keyExtractor={(item)=>{item.id}}
          renderItem={this._SelectLanguage}
          />
          </View>
            </Container>
        )
    }
}