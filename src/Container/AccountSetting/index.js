import React,{Component}from 'react';
import{
    View,
    Text,
    Dimensions,
    Image
}from 'react-native';
import styles from './styles';
import { Thumbnail, Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import _Button from '../../Component/_Button';
import { _Yellow, White, Black, lightGrey, Red } from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import _TextInput from '../../Component/Input';
import ContactInput from '../../Component/ContactInput';
import RNPickerSelect from 'react-native-picker-select';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const skype = [
    { label: 'Asia/Karachi/ GMT +5:00', value: 'Asia/Karachi/ GMT +5:00' },
    { label: 'Asia/Karachi/ GMT +5:00', value: 'Asia/Karachi/ GMT +5:00' },
    { label: 'Asia/Karachi/ GMT +5:00', value: 'Asia/Karachi/ GMT +5:00' },
]
const placeholder = {
    label: 'select language',
    value: null,
    color: Black,
    placeholderTextColor: Black,
    fontSize: RFValue(14)
}
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
export default class AccountSetting extends Component{
    constructor(props){
        super(props)
        this.state={
            avatarSource:'', 
            firstName:"",
            lastName:"",
            email:'',
            skypeId:'',
            hideIcon:false,
            selectedSkypeId:'',
            contact:'',
            cca2:"PK",
            callingCode:'92',

        }
        this.inputRefs = {
            skypeRef: null
        }
    }
    Edit=()=>{
      
    }
    _connect=()=>{

    }
    _Disconnect =()=>{

    }
    _deleteAccount=()=>{
        
    }
    _saveSetting=()=>{
        
    }
    upLoadImg=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    render(){
        const {cca2,email,firstName,lastName,skypeId,callingCode,contact} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.accountText}>Account Setting</Text>
                <View style={styles.bottomBorder}></View>
                <View style={styles.profileView}>
                   <View style={styles.ImageView}>
                      <Text style={styles.profilePhoto}>Profile phote</Text>
                      {this.state.avatarSource ?
                      <Image 
                      style={{width:RFValue(140),height:RFValue(140),marginTop:RFValue(5)}}
                      source={this.state.avatarSource}
                      />:
                      <Image 
                      style={{width:RFValue(140),height:RFValue(140),marginTop:RFValue(5)}}
                      source={require('../../Assets/download.jpeg')}
                      />}
                      <View style={styles.EditView}>
                    <TouchableOpacity
                    onPress={()=>this.upLoadImg()}
                    >
                      <View style={{flexDirection:'row'}}>
                       <Icon
                       name={'edit'}
                       type={'AntDesign'}
                       style={{fontSize:RFValue(16),color:White}}
                       />
                       <Text style={styles.editText}>Edit</Text>
                       </View>
                       </TouchableOpacity>
                      </View>
                      
                   </View>
                   <View style={styles.ButtonView}>
                     <View style={{justifyContent:"center",alignItems:'center',marginTop:RFValue(7)}}>
                    <_Button
                    onPress={()=>this.upLoadImg()}
                    styles={styles.uploadButtonView}
                    textStyle={{color:_Yellow}}
                    textButton={'Upload image'}
                    />
                    </View>
                   
                    <View>
                    <Text style={styles.fileSize} 
                    >Maximum size-2MB</Text>
                    <Text style={styles.fileType}>JPG or PNG</Text>
                    </View>
                    
                   </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.Heading}>First name</Text>
                    <_TextInput
                    inputBox={styles.inputStyle}
                    placeholder={'Mudassir'}
                    placeholderTextColor={_Yellow}
                    squarInput={true}
                    onChangeText={(value)=>this.setState({firstName:value})}
                    />
                     <Text style={styles.Heading}>Last name</Text>
                    <_TextInput
                    inputBox={styles.inputStyle}
                    placeholder={'Ashiq'}
                    placeholderTextColor={_Yellow}
                    squarInput={true}
                    onChangeText={(value)=>this.setState({lastName:value})}
                    />
                     <Text style={styles.Heading}>Email</Text>
                    <_TextInput
                    inputBox={styles.inputStyle}
                    placeholder={'MudassarAshiq@gmail.com'}
                    placeholderTextColor={_Yellow}
                    squarInput={true}
                    onChangeText={(value)=>this.setState({email:value})}
                    />
                    <Text style={styles.Heading}>Phone number</Text>
                    <View style={{padding:5}}>
                    <ContactInput
                    cca2={cca2}
                    callingCode={callingCode}
                    hideIcon={this.state.hideIcon}
                    onChangeText={(value)=>this.setState({contact:value,hideIcon:true})}
                    contact={contact}
                    select={(country)=>{
                        this.setState({ cca2:country.cca2, callingCode:country.callingCode})
                    }}
                    />
                    </View>
                    <View style={{marginTop:RFValue(20)}}>
                    <Text style={styles.Heading}>Skype id</Text>
                    <_TextInput
                    inputBox={styles.inputStyle}
                    placeholder={'MudassarAshiq@gmail.com'}
                    placeholderTextColor={_Yellow}
                    squarInput={true}
                    onChangeText={(value)=>this.setState({skypeId:value})}
                    />
                    <Text style={styles.Heading}>Skype id</Text>
                     <View style={[styles.RNPickerView, { paddingVertical: Platform.OS === 'ios' ? 12 : 1,}]}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                placeholder={placeholder}
                                style={{
                                    inputAndroid: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        color: _Yellow
                                    },
                                    inputIOS: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        placeholderTextColor:_Yellow,
                                        color: _Yellow,
                                    },
                                }}
                                onValueChange={(value) => this.setState({
                                     selectedSkypeId: value,

                                })}
                                items={skype}
                                value={this.state.selectedSkypeId}
                                Icon={() => {
                                    return <Icon
                                        style={{
                                            position: 'absolute', top: Platform.OS === 'ios' ? 5 : 10, right: 10
                                        }}
                                        name="md-arrow-dropdown" type={'Ionicons'} />;
                                }}
                                InputAccessoryView={this.InputAccessoryView}
                                ref={ref => {
                                    this.inputRefs.industry = ref;
                                }}
                            />
                        </View>
                        <View style={styles.SocialBox}>
                        <Text style={styles.socialText}>Social networks</Text>
                        <TouchableOpacity style={styles.notConnected}>
                          <Icon
                          name={'facebook-box'}
                          type={'MaterialCommunityIcons'}
                          style={{fontSize:RFValue(20),color:lightGrey,marginTop:RFValue(10)}}
                          />  
                          <Text style={styles.notConnectedText}>Not conneted to facebook account</Text>
                        </TouchableOpacity>
                        <View style={styles.connectText}>
                        <TouchableOpacity
                         onPress={()=>this._connect()}
                        >
                            <Text style={styles.connect}>Connect</Text>
                        </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.notConnected,{marginTop:0}]}>
                          <Icon
                          name={'logo-google'}
                          type={'Ionicons'}
                          style={{fontSize:RFValue(20),color:lightGrey,marginTop:RFValue(10)}}
                          />  
                          <Text style={styles.notConnectedText}>connect as</Text> 
                          <Text style={styles.notConnectedText}>MudassarAshiq</Text>
                        </TouchableOpacity>
                        <View style={styles.connectText}>
                        <TouchableOpacity
                        onPress={()=>this._Disconnect()}
                        >
                            <Text style={styles.connect}>Disconnect</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                    <View style={styles.ButtonBox}>
                    <_Button
                    styles={styles.saveSetting}
                    textStyle={styles.testStyle}
                    textButton={'Save settings'}
                    onPress={()=>this._saveSetting()}
                    />
                    </View>
                    <View style={[styles.ButtonBox,{marginBottom:RFValue(30)}]}>
                    <_Button
                    styles={[styles.saveSetting,{borderColor:Red}]}
                    textStyle={[styles.testStyle,{color:Red}]}
                    textButton={'Delete account'}
                    onPress={()=>this._deleteAccount()}
                    />
                    </View>


                    </View>
                </View>
            </View>
        )
    }
}