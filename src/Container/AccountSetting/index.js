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
import { _Yellow, White } from '../../Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class AccountSetting extends Component{
    Edit=()=>{
      
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.accountText}>Account Setting</Text>
                <View style={styles.bottomBorder}></View>
                <View style={styles.profileView}>
                   <View style={styles.ImageView}>
                      <Text style={styles.profilePhoto}>Profile phote</Text>
                      <Image large square 
                      style={{width:RFValue(140),height:RFValue(140),marginTop:RFValue(5)}}
                      source={require('../../Assets/download.jpeg')}
                      />
                      <View style={styles.EditView}>
                    <TouchableOpacity
                    onPress={()=>this.Edit()}
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
            </View>
        )
    }
}