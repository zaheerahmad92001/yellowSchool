import React, { Component } from 'react';
import {
  View,
  Text,
  Image, Dimensions,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import _AppHeader from '../../Component/AppHeader';
import { White, _Yellow, Black, lightGrey, Red } from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Thumbnail, Icon } from 'native-base';
import _Button from '../../Component/_Button';
import _Reviews from '../../Component/reviews';
import _BottomStaticButton from '../../Component/bottomStaticButton';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Tutors from '../../Utils/modal/Tutors';
import { connect } from 'react-redux';
import { Flag } from 'react-native-svg-flagkit'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
let subTought = '';
const reviews = [
  { name: 'Priet', reviewDate: '2020 Mar-7', message: 'Mehr is really professional and experienced trainer i really appreciate her work method' },
  { name: 'Priet', reviewDate: '2020 Mar-7', message: 'Mehr is really professional and experienced trainer i really appreciate her work method' },
  { name: 'Priet', reviewDate: '2020 Mar-7', message: 'Mehr is really professional and experienced trainer i really appreciate her work method' }
]
class SingleTutor extends Component {
  videoPlayer;
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'cover',
      palyVideo: false,
      tutorDetail: [],
      preferedStudentLevel: [],
      preferedStudentAge: [],
      certification: [],
      education: [],

      loading: false,

    }
    // this.TutorInfo = this.props
  }
  componentDidMount() {
    this.setState({
      loading: true
    })
    const tutorData = this.props.navigation.getParam('param')
    let req = {
      method: 'GET',
      headers: {
        'Accept': 'application/json,text/plain',
        'Content-Type': 'application/json',
        'authorization': this.props.user.token
      },
    }
    fetch(`https://yellow-school.herokuapp.com/api/tutors/${tutorData._id}`, req).then((response) => response.json())
      .then((res) => {
        if (res.success) {
          this.setState({
            tutorDetail: res.data,
            preferedStudentAge: res.data.preferredStudentAge,
            preferedStudentLevel: res.data.preferredStudentLevel,
            education: res.data.education,
            certification: res.data.certifications,
            loading: false
          })
        } else {
          console.log('error ')
        }

      }).catch((error) => {
        console.log('error occure', error)
      })

  }



  goBack = () => {
    this.props.navigation.pop()
  }
  _SendMessage = () => {
    this.props.navigation.navigate('MessageView')
  }

  renderReviews = ({ item, index }) => {
    return (
      <_Reviews
        item={item}
        index={index}
      />
    )
  }

  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };

  onLoad = data => this.setState({ duration: data.duration, isLoading: false, shouldBeAwake: false });

  onLoadStart = data => this.setState({ isLoading: true, shouldBeAwake: true });

  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

  onError = () => alert('Oh! ', error);

  exitFullScreen = () => {
    alert('Exit full screen');
  };

  enterFullScreen = () => { };

  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'cover' });
  };
  renderToolbar = () => (
    <View>
      {/* <Text> toolbar </Text> */}
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  _PlayVideo = () => {
    this.setState({
      palyVideo: true
    })
  }

  render() {

    const { tutorDetail, preferedStudentAge, preferedStudentLevel, certification, education, loading } = this.state
    let nationalFlag = tutorDetail.country
    console.log('tutor information', tutorDetail)
    subTought = tutorDetail.subjectTaught
    if (subTought) {
      subTought = subTought.slice(0, 2)
      subTought = subTought.toUpperCase()
    }
    const item = this.props.navigation.getParam('param')
    return (
      <SafeAreaView style={styles.container}>

        <_AppHeader
          /// styles={{position:'absolute'}}
          leftIcon={'keyboard-arrow-left'}
          leftIconStyle={{ color: White }}
          headerText={item.firstName}
          leftIconPress={() => this.goBack()}
        />

        {loading ?
          <View style={{ flex: 1 }}>
            <ActivityIndicator
              size={'large'}
              color={_Yellow}
            /></View> :

          <ScrollView

            showsVerticalScrollIndicator={false}
          >
            {this.state.palyVideo ?
              <View style={{ height: screenHeight * 0.41, width: screenWidth, }}>
                <Video
                  onEnd={this.onEnd}
                  onLoad={this.onLoad}
                  onLoadStart={this.onLoadStart}
                  onProgress={this.onProgress}
                  paused={this.state.paused}
                  ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                  resizeMode={this.state.screenType}
                  onFullScreen={this.state.isFullScreen}
                  source={{ uri: 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4' }}
                  style={styles.mediaPlayer}
                  volume={10}
                />
                <MediaControls
                  duration={this.state.duration}
                  isLoading={this.state.isLoading}
                  mainColor="#333"
                  onFullScreen={this.onFullScreen}
                  onPaused={this.onPaused}
                  onReplay={this.onReplay}
                  onSeek={this.onSeek}
                  onSeeking={this.onSeeking}
                  playerState={this.state.playerState}
                  progress={this.state.currentTime}
                  toolbar={this.renderToolbar()}
                />
              </View> :
              <View style={{ height: screenHeight * 0.41, }}>
                <ImageBackground
                  style={{ width: '100%', height: '100%' }}
                  source={item.url}
                //source={require('../../Assets/Andrew.png')}
                >
                  <View style={{ height: screenHeight * 0.41, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                      onPress={() => this._PlayVideo()}
                      name={'youtube-play'}
                      type={'FontAwesome'}
                      style={{ color: Red, fontSize: RFValue(50) }}
                    />
                  </View>
                </ImageBackground>
              </View>

            }


            <View style={styles.tutorInfo}>
              <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Thumbnail circular
                  source={item.url}
                // source={require('../../Assets/office.jpg')}
                />
              </View>
              <View style={{ flex: 8, }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.Nametext}>{tutorDetail.firstName + ' ' + tutorDetail.lastName}</Text>
                  {/* <Thumbnail small square
                    style={styles.nationalFlag}
                    source={require('../../Assets/nationalflag.png')}
                  /> */}

                  <View style={{ marginTop: 2, marginLeft: 10 }}>
                    {nationalFlag ?
                      <Flag
                        id={nationalFlag}
                        size={0.1}
                      /> : null}
                  </View>
                </View>
                <Text style={styles.tutorExperience}>{tutorDetail.headline}</Text>
                <View style={{ flexDirection: 'row', marginTop: RFValue(3) }}>
                  <Icon
                    name={'verified-user'}
                    type={'MaterialIcons'}
                    style={{ fontSize: RFValue(20), color: _Yellow }}
                  />
                  <Text style={styles.Verified}>Verified</Text>
                </View>

              </View>
            </View>
            <View style={styles.bottomBorder}></View>

            <View style={styles.userStatics}>
              <View style={styles.ratingView}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.ratingStyle}>{tutorDetail.rating_average}</Text>
                  <Icon
                    name={'star-border'}
                    type={'MaterialIcons'}
                    style={{ fontSize: RFValue(14), color: _Yellow, marginTop: RFValue(0) }}
                  />
                </View>
                <Text style={styles.ratingText}>rating</Text>
              </View>
              <View style={styles.ratingView}>
                <Text style={styles.reviesStyle}>{tutorDetail.totalReviews}</Text>
                <Text style={styles.ratingText} >reviews</Text>
              </View>
              <View style={styles.ratingView}>
                <Text style={styles.reviesStyle}>{tutorDetail.totalLessons}</Text>
                <Text style={styles.ratingText}>lessons</Text>
              </View>
              <View style={styles.ratingView}>
                    <Text style={styles.reviesStyle}>{tutorDetail.experience} yr</Text>
                <Text style={styles.ratingText} >experience</Text>
              </View>
            </View>
            <View style={styles.buttonView}>
              <_Button
                styles={{ width: screenWidth, height: screenHeight * 0.07, borderRadius: 0, }}
                IconNmae={'message-circle'}
                type={'Feather'}
                iconStyles={{ color: White, fontSize: RFValue(20) }}
                textButton={'Send message'}
                onPress={() => { this._SendMessage() }}
              />
            </View>
            <View style={{ marginHorizontal: RFValue(14) }}>
              <Text style={styles.aboutTutor}>About {tutorDetail.firstName + ' ' + tutorDetail.lastName}</Text>

              <Text>
                {tutorDetail.description}
              </Text>


              <View style={[styles.bottomBorder, { marginTop: RFValue(20) }]}></View>

              <Text style={[styles.description, { fontSize: RFValue(14), fontWeight: '600' }]}>Teaches</Text>
              <View style={styles.TeachesCard}>
                <View style={styles.circle}>

                  <Text style={styles.ENtext}>{subTought}</Text>
                </View>
                <Text style={[styles.aboutTutor, { color: White, fontSize: RFValue(18) }]}>{tutorDetail.subjectTaught}</Text>
              </View>
              <View style={[styles.bottomBorder, { marginTop: RFValue(20) }]}></View>

              <Text style={[styles.description, { fontSize: RFValue(14), fontWeight: '600' }]}>Speaks</Text>
              <Text style={[styles.speaksText]}>{tutorDetail.languageSpoken}</Text>
              <View style={[styles.bottomBorder, { marginTop: RFValue(20), borderBottomWidth: RFValue(5) }]}></View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.ratingStyle, { marginTop: RFValue(10), fontSize: RFValue(14) }]}>{tutorDetail.rating_average}</Text>
                <Icon
                  name={'star-border'}
                  type={'MaterialIcons'}
                  style={{ fontSize: RFValue(16), color: _Yellow, marginTop: RFValue(10) }}
                />
                <Text style={[styles.reviesStyle, { marginTop: RFValue(10), fontSize: RFValue(14), marginLeft: RFValue(10) }]}>{tutorDetail.totalReviews}</Text>
                <Text style={[styles.ratingText, { marginTop: RFValue(8), fontSize: RFValue(14), marginLeft: RFValue(5), fontWeight: '600' }]} >reviews</Text>
              </View>
            </View>
            <FlatList
              extraData={reviews}
              data={reviews}
              keyExtractor={(item) => { item.id }}
              renderItem={this.renderReviews}
              showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity style={{ marginTop: RFValue(8) }}>
              <View style={{ flexDirection: 'row', marginHorizontal: RFValue(15), justifyContent: 'space-between', alignItems: "center" }}>
                <Text style={{ fontSize: RFValue(16), fontWeight: '500', color: _Yellow }}>Read more 51 reviews</Text>
                <Icon
                  name={'ios-arrow-forward'}
                  type={'Ionicons'}
                  style={{ color: _Yellow, fontSize: RFValue(20) }}
                />
              </View>
            </TouchableOpacity>

            <View style={[styles.bottomBorder, { marginTop: RFValue(20), borderBottomWidth: RFValue(5), width: '95%', alignSelf: 'center' }]}></View>
            <View style={{ marginHorizontal: RFValue(15) }}>
              <Text style={styles.aboutTutor}>More about Mehr T.</Text>
              <TouchableOpacity style={{ marginTop: RFValue(12) }}
                onPress={() => this.props.navigation.navigate('StudentAge', {
                  preferedStudentAge,
                  hourlyRate: tutorDetail.hourlyRate
                })}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: RFValue(14), fontWeight: '300', color: Black }}>Preferred studen age</Text>
                  <Icon
                    name={'ios-arrow-forward'}
                    type={'Ionicons'}
                    style={{ color: _Yellow, fontSize: RFValue(20) }}
                  />
                </View>
              </TouchableOpacity>

              <View style={[styles.bottomBorder, { marginTop: RFValue(14), marginBottom: RFValue(14), borderBottomColor: lightGrey, alignSelf: 'center' }]}></View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('LevelOfStudents', {
                  preferedStudentLevel,
                  hourlyRate: tutorDetail.hourlyRate
                })}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: RFValue(14), fontWeight: '300', color: Black }}>Preferred level of studen</Text>
                  <Icon
                    name={'ios-arrow-forward'}
                    type={'Ionicons'}
                    style={{ color: _Yellow, fontSize: RFValue(20) }}
                  />
                </View>
              </TouchableOpacity>
              <View style={[styles.bottomBorder, { marginTop: RFValue(14), marginBottom: RFValue(14), borderBottomColor: lightGrey, alignSelf: 'center' }]}></View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Resume', {
                  certification, education,
                  hourlyRate: tutorDetail.hourlyRate

                })}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: RFValue(14), fontWeight: '300', color: Black }}>Resume</Text>
                  <Icon
                    name={'ios-arrow-forward'}
                    type={'Ionicons'}
                    style={{ color: _Yellow, fontSize: RFValue(20) }}
                  />
                </View>
              </TouchableOpacity>
              <View style={[styles.bottomBorder, { marginTop: RFValue(14), marginBottom: RFValue(14), borderBottomColor: lightGrey, alignSelf: 'center' }]}></View>
            </View>
          </ScrollView>

        }

        <_BottomStaticButton
          perHour={tutorDetail.hourlyRate}
          BookLesson={loading ? null : () => this.props.navigation.navigate('SlotsAvailable',{
          tutorId:tutorDetail._id
          })}
        />


      </SafeAreaView>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.UserInfo
  }
}

export default connect(mapStateToProps)(SingleTutor)