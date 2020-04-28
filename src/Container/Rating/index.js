import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, lightGrey } from '../../Colors'
import _BottomStaticButton from '../../Component/bottomStaticButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import _TextInput from '../../Component/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import _Subjects from '../../Component/subjects';
import { Thumbnail } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class RatingView extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.empityView}></View>

                <View style={styles.content}>
                    <Thumbnail circular
                        source={require('../../Assets/download.jpeg')}
                    />
                    <View style={{ marginTop: RFValue(15) }}>
                        <Text style={styles.question}>How was your lesson ?</Text>
                        <View style={{ width: '60%' }}>
                            <Text style={styles.instrution}>Rating is anonymous and helps you track your progress</Text>
                        </View>
                    </View>
              <View style={{marginTop:20,justifyContent:"flex-start",alignItems:"flex-start"}}>
                    <AirbnbRating 
                    showRating={true}
                    reviewColor={White}
                    reviewSize={15}
                     count={5}
                     reviews={["Bad","OK", "Good","Very Good", "Amazing"]}	
                     defaultRating={2}
                     size={20}
                     selectedColor={White}
                     onFinishRating={this.ratingCompleted}
                     
                    />
                    </View>
                </View>
            </View>
        )
    }
}