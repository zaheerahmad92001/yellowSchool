import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform
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
const language = [
    { label: 'English language', value: 'English language' },
    { label: 'Spanish language', value: 'Spanish language' },
    { label: 'French  language', value: 'French  language' },
    { label: 'Japanese language', value: 'Japanese language' },
    { label: 'German language', value: 'German language' },
    { label: 'Russian language', value: 'Russian language' },
    { label: 'Chinies language', value: 'Chinies language' },
    { label: 'Italian language', value: 'Italian language' },
]
const tutorsList =[
    {name:'Methew T.',rating:'4.9',type:'New',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $12/H'},
    {name:'Methew T.',rating:'4.9',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $12/H'},
    {name:'Methew T.',rating:'4.9',type:'New',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',type:'New',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',type:'New',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},
    {name:'Methew T.',rating:'4.9',type:'New',review:'(9)',totalLesson:'33',tutorCategory:'Certified English Tutor',ratePerHour:' $ 12/H'},


]
export default class SearchView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: '',
            changeSearchIconColor: false,
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
    }
    _MessageClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: true,
            changeUserIconColor: false,
            changeSettingIconColor: false
        })
    }
    _UserClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: true,
            changeSettingIconColor: false
        })
    }
    _SettingClick = () => {
        this.setState({
            changeSearchIconColor: false,
            changeMessageIconColor: false,
            changeUserIconColor: false,
            changeSettingIconColor: true
        })
    }
    renderTutorList=({item})=>{
     return(
    <_TutorsList
    item={item}
    />

    
     )
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
            <Container style={styles.container}>
                <View style={styles.header}>
                    <StatusBar backgroundColor={_Yellow} barStyle={'light-content'} />
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', bottom: RFValue(5) }}>
                        <View style={[styles.inputView, { paddingVertical: Platform.OS === 'ios' ? 10 : 5 }]}>
                            <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                placeholder={placeholder}
                                style={{
                                    inputAndroid: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        color: Black,
                                    },
                                    inputIOS: {
                                        fontSize: RFValue(16),
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        borderRadius: 10,
                                        placeholderTextColor: Black,
                                        color: Black,
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
                keyExtractor={(item)=>{item.id}}
                renderItem={this.renderTutorList}
                showsVerticalScrollIndicator={false}
                />
<View style={styles.filters}>
    <Icon
    name={'filter-list'}
    type={'MaterialIcons'}
    style={{fontSize:RFValue(20),color:Black}}
    />
    <Text style={styles.filteText}>Filters</Text>
</View>
                </View>
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
            </Container>
        )
    }
}