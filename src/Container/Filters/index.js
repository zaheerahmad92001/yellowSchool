import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, _Yellow, offWhite, lightYellow } from '../../Colors';
import _BottomNavigation from '../../Component/bottomNavigation';
import { RFValue } from 'react-native-responsive-fontsize';
import { Switch } from 'react-native-gesture-handler';
import { Slider } from 'react-native-elements';
export default class FilterView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nativeSpeaker: false,
            price:1,
            minPrice:1,
            maxPrice:40,
        }
    }
    goBack = () => {
        this.props.navigation.pop()
    }
    handlePress=()=>{
        
    }
    render() {
        return (
            <View style={styles.container}>
                <_AppHeader
                    leftIcon={'keyboard-arrow-left'}
                    leftIconStyle={{ color: White }}
                    leftText={'Back'}
                    leftPress={() => this.goBack()}
                    leftIconPress={() => this.goBack()}
                />
                <View style={styles.content}>
                    <Text style={styles.FilterText}>Filters</Text>
                    <View style={styles.bottomBorder}></View>
                    <View style={styles.PriceView}>
                        <Text style={styles.priceText}>Price per hour</Text>
        <Text style={styles.price}>$<Text>{this.state.minPrice}</Text>-${this.state.price}</Text>
                    </View>

                    <View style={{ alignItems: 'stretch', justifyContent: 'center',marginTop:15, }}>
                        <Slider
                            maximumValue={40}
                            step={1}
                            thumbTintColor={_Yellow}
                            trackStyle={{height:2}}
                            minimumTrackTintColor={_Yellow}
                            maximumTrackTintColor='#979797'
                            value={this.state.price}
                            onValueChange={price => this.setState({ price })}
                        />
                        
                    </View>

                    {/* <View style={styles.seekbarViwe}>
                        <View style={styles.circle}></View>
                        <View style={styles.seekFilter}></View>
                        <View style={styles.circle}></View>
                        <View style={styles.seekFilterLight}></View>
                    </View> */}
                    <View style={[styles.bottomBorder, { marginTop: RFValue(40) }]}></View>
                    <View style={styles.SpeakerView}>
                        <Text style={styles.nativeText}>Native speaker</Text>
                        <View style={styles.SwithView}>
                            <View style={{ width: '80%', }}>
                                <Text style={styles.switchText}> View only native speaker tutors of the language you`re learning</Text>
                            </View>

                            <Switch value={this.state.nativeSpeaker} trackColor={{ true: offWhite }}
                                onValueChange={(value) => this.setState({ nativeSpeaker: value })}
                                thumbTintColor={_Yellow}
                                style={{ marginLeft: 5, transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                            />

                        </View>
                    </View>
                </View>
                <_BottomNavigation
                    filter={true}
                    totalViewer={'472'}
                    handlePress={this.handlePress}
                />
            </View>
        )
    }
}