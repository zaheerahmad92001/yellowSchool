import React, { Component } from 'react';
import {
    View,
    Text,
    Image, Dimensions,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Keyboard,
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, _Yellow, Black, lightGrey } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import FromMessage from '../../Component/MessageComponent';
import { TextInput } from 'react-native-gesture-handler';
import { Container, Content, Icon } from 'native-base';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const messages = [
    { to: 'Yes i am ok with it begin', time: '10:47' },
    { from: 'hi! How are you', time: '10:47' },
    { to: 'Yes i am ok with it begin', time: '10:47' },
    { from: 'hi! How are you', time: '10:47' },
    { to: 'Yes i am ok with it begin', time: '10:47' },
    { from: 'hi! How are you', time: '10:47' },
    { to: 'Yes i am ok with it begin', time: '10:47' },
    { from: 'hi! How are you', time: '10:47' },
    { to: 'Yes i am ok with it begin', time: '12:47' },
    { from: 'hi! How are you', time: '12:47' },
]
export default class MessageView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            showMessage: true,

        }
    }
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    }


    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
    }

    _keyboardDidShow(e) {
        this.scrollView.scrollToEnd({ animated: false })
    }

    goBack = () => {
        this.props.navigation.pop()
    }
    _bookLesson = () => {
        this.props.navigation.navigate('SlotsAvailable')
    }
    _sendMessage = () => {

    }
    renderMessages = ({ item }) => {
        return (<FromMessage
            item={item}
        />
        )
    }
    render() {
        return (
            Platform.OS === 'android' ?
                <Container style={[styles.container]}>
                    <_AppHeader
                        leftIcon={'keyboard-arrow-left'}
                        leftIconStyle={{ color: White }}
                        leftText={'Back'}
                        headerText={'Meht T.'}
                        leftIconPress={() => this.goBack()}
                        leftPress={() => this.goBack()}
                        rightText={'Book lesson'}
                        rightPress={() => this._bookLesson()}

                    />

                    <ScrollView

                        ref={ref => { this.scrollView = ref }}
                        onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
                    >

                        <FlatList
                            data={messages}
                            keyExtractor={(item) => item.key}
                            renderItem={this.renderMessages}
                        />

                    </ScrollView>
                    <View style={{ justifyContent: 'flex-end', height: screenHeight * 0.1 }}>
                        <View style={styles.messageBox}>
                            <TextInput
                                style={[{
                                    color: '#222326',
                                    fontSize: RFValue(14),
                                    //marginHorizontal: 10,
                                    height: screenHeight * 0.07,
                                    flex: 1
                                }]}
                                autoFocus={true}
                                placeholder={'say some thing '}
                                placeholderTextColor={'#979797'}
                                value={this.state.message}
                                onChangeText={(value) => { this.setState({ message: value }) }}
                            />
                            <View style={styles.circle}>
                                <Icon
                                    onPress={() => this._sendMessage()}
                                    name={'arrowup'}
                                    type={'AntDesign'}
                                    style={{
                                        fontSize: RFValue(23), size: RFValue(16), color: _Yellow,
                                    }} />
                            </View>


                        </View>

                    </View>


                </Container> :
                <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' style={styles.container}>
                    <_AppHeader
                        leftIcon={'keyboard-arrow-left'}
                        leftIconStyle={{ color: White }}
                        leftText={'Back'}
                        headerText={'Meht T.'}
                        leftIconPress={() => this.goBack()}
                        leftPress={() => this.goBack()}
                        rightText={'Book lesson'}
                        rightPress={() => this._bookLesson()}

                    />

                    <ScrollView style={styles.container}
                        keyboardShouldPersistTaps='always'
                        ref={ref => { this.scrollView = ref }}
                        onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
                    >

                        <FlatList
                            data={messages}
                            keyExtractor={(item) => item.key}
                            renderItem={this.renderMessages}
                        />

                    </ScrollView>
                    <View style={{ justifyContent: 'flex-end', height: screenHeight * 0.1 }}>
                        <View style={styles.messageBox}>
                            <TextInput
                                style={[{
                                    color: '#222326',
                                    fontSize: RFValue(14),
                                    //marginHorizontal: 10,
                                    height: screenHeight * 0.07,
                                    flex: 1
                                }]}
                                autoFocus={true}
                                placeholder={'say some thing '}
                                placeholderTextColor={'#979797'}
                                value={this.state.message}
                                onChangeText={(value) => { this.setState({ message: value }) }}
                            />
                            <View style={styles.circle}>
                                <Icon
                                    onPress={() => this._sendMessage()}
                                    name={'arrowup'}
                                    type={'AntDesign'}
                                    style={{
                                        fontSize: RFValue(23), size: RFValue(16), color: _Yellow,
                                    }} />
                            </View>


                        </View>

                    </View>

                </KeyboardAvoidingView>
        )
    }
}