import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform,
    SafeAreaView,
    Image,
    Picker
} from 'react-native';
import { headerColor, White, _Yellow, Black } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon, Header, Container } from 'native-base';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import _BottomNavigation from '../../Component/bottomNavigation';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import styles from './styles'
import _TutorsList from '../../Component/TutorsList';
const andrew='../../Assets/Andrew.jpg'
const jelena='../../Assets/jelena.jpg'
const language = [
    { label: 'English language', value: 'English language' },
    { label: 'Chinies language', value: 'Chinies language' },
]
const tutorsList = [
    { name: 'Andrew.', rating: '4.9', type: 'New', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $12/H',url:require(andrew),about:
    'Hi! My name is Andrew and I am a certified English teacher. Tired of boring and ineffective language classes? Let’s make a difference in learning together! Languages is my everything. I speak 8 myself.Sometimes people ask me, how can I have so many friends from all around the world?A veces me preguntan, como puedo tener tantos amigos de todos los lugares del mundo?Well, I enjoy traveling and exploring new cultures, and that would be not possible without spoken English skills. The countries where I used to live and teach include China, Poland, Vietnam, Spain and Malaysia. I am ready toreveal all the secrets of effective language learning, as well as help you start speaking shortly. 我准备给您公开所有的秘密，怎么最快开始说外语。In our class we will use Direct Method Approach which helps you boost your speaking skills and broaden your vocabulary after a couple of lessons. I know, a lot of students feel insecure to actually speak in a foreign language, because they are afraid of making mistakes. But don’t worry, that’s the way to learn. All the beginnings are difficult, but man learns from failures. Aller Anfang ist schwer, und aus Schaden wird man klug.How are the classes going to look like? I believe that live conversations alongside with interactive resources such as Miro, Youtube, and Google Classroom make the most fruitful results in language learning. That’s why all the class time we are going to speak 100% in English (or the other language you want to learn). In fact, it’s very simple - more practice, less boring and old-fashioned exercices.На самом деле все очень просто! Больше практики - меньше устарелых и скучных упражнений.Want to apply for your first job abroad, or maybe book a flight or hotel on an English language platform?  Or maybe you are looking for advice on an foreign forum and don’t really know what’s going on? Czy może chcesz poszukać porady na blogu obcojęzycznym i nie do końca rozumiesz o co chodzi? Let’s do it in class with my helpful guidance. Join the progressive world community and learn online from anywhere, now.'},
    { name: 'Jelena', rating: '4.9', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $12/H',url:require(jelena), about:
    'Hello everyone! My name is Emely. I have been an English teacher for 5 years. Also I have an experience om working with kids as a camp counsellor. Based on this experience I realized that my heart set on teaching. I have had an experience of teaching students of different ages, but I really enjoy working with kids starting from 3 to 12 years old. I think they are open, honest and they have really good energy. I have been living in the USA and in China, and working in one of the training centers in Shanghai, China is the best part of my life! During my classes I am trying to make my students talk. Learning language is not just learning some words or phrases. Of course you can learn a lot of new words, phrases, grammar, rules. It s important. But these knowledge is useless without practice. It will not help you to develop your speaking skills. Also teaching is not just about what to teach, more important thing is how to teach. I have graduated with my bachelors degree and I know different methods how to learn language more effectively. My young students learn a language without even realizing it! And I think it s really cool! They do usual things like playing games or singing songs and they learn a new language! So I am here to help you to get your English to the next level, and I want to teach you to communicate with english speakers anywhere around the world! Now we have a great opportunity to learn something new and no matter where we are now! So you can join us now from any part of the world and enjoy learning English with me! See you soon! Have a great day! '
      },
    // { name: 'Methew T.', rating: '4.9', type: 'New', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', type: 'New', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', type: 'New', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },
    // { name: 'Methew T.', rating: '4.9', type: 'New', review: '(9)', totalLesson: '33', tutorCategory: 'Certified English Tutor', ratePerHour: ' $ 12/H' },


]
export default class AllTutorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: '',
            changeSearchIconColor: true,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false

        }
        this.inputRefs = {
            language: null
        }
    }
    _Search = () => {

        this.setState({
            changeSearchIconColor: true,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
        this.props.navigation.navigate('LessonIntroView')
    }
    _MessageClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: true,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
        this.props.navigation.navigate('MessageIntroView')
    }
    _UserClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: true,
            changeSettingIconColor: false
        })
        this.props.navigation.navigate('MyTutorList')
    }
    _SettingClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: true
        })
        this.props.navigation.navigate('MySettings')
    }
    renderTutorList = ({ item }) => {
        return (
            <_TutorsList
                item={item}
                onPress={() => this.props.navigation.navigate('SingleTutor',{
                    param:item
                })}
            />


        )
    }
 setSelectedValue=(value)=>{
  this.setState({
    selectedValue:value
  })
    }
    render() {
        const placeholder = {
            label: 'select language',
            value: null,
            color: Black,
            placeholderTextColor: Black,
            fontSize: RFValue(14)
        }
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <StatusBar backgroundColor={_Yellow} barStyle={'light-content'} />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', bottom: RFValue(5) }}>
                     {/* <View style={[styles.inputView, { paddingVertical: Platform.OS === 'ios' ? 10 : 5 }]}> 
                        <Picker
                            mode={'dropdown'}
                            selectedValue={this.state.selectedValue}
                            style={{flex:0.7,marginLeft:RFValue(10), }}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                           >
                            <Picker.Item label="Select language" value="" />
                            <Picker.Item label="English language" value="English language" />
                            <Picker.Item label="Chinies language" value="Chinies language" />
                        </Picker>
                        </View> */}
                        <View style={[styles.inputView, { paddingVertical: Platform.OS === 'ios' ? 10 : 5 }]}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                placeholder={placeholder}
                                style={{
                                    inputAndroid: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        color:Black,
                                       // backgroundColor:'red'
                                    },
                                    inputIOS: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal:10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        placeholderTextColor: Black,
                                        color: Black,
                                       // backgroundColor:'red'
                                    },
                                }}
                                onValueChange={(value) => this.setState({
                                    selectedLanguage: value,

                                })}
                                items={language}
                                value={this.state.selectedLanguage}
                                Icon={() => {
                                    return <Icon
                                        style={{
                                            position: 'absolute', top: Platform.OS === 'ios' ? 5 : 10, right: 10
                                        }}
                                        name="md-arrow-dropdown" type={'Ionicons'} />;
                                }}
                                InputAccessoryView={this.InputAccessoryView}
                                ref={ref => {
                                    this.inputRefs.language = ref;
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <FlatList
                        extraData={tutorsList}
                        data={tutorsList}
                        keyExtractor={(item) => { item.id }}
                        renderItem={this.renderTutorList}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={styles.filters}>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                        onPress={()=>this.props.navigation.navigate('FilterView')}
                        >
                        <Icon
                            name={'filter-list'}
                            type={'MaterialIcons'}
                            style={{ fontSize: RFValue(20), color: Black }}
                        />
                        <Text style={styles.filteText}>Filters</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <_BottomNavigation
                        SearchClick={() => this._Search()}
                        changeSearchIconColor={this.state.changeSearchIconColor}
                        MessageClick={() => this._MessageClick()}
                        changeMessageIconColor={this.state.changeMessageIconColor}
                        UserClick={() => this._UserClick()}
                        changeUserIconColor={this.state.changeUserIconColor}
                        SettingClick={() => this._SettingClick()}
                        changeSettingIconColor={this.state.changeSettingIconColor}
                    />
                </View>
            </SafeAreaView>
        )
    }
}