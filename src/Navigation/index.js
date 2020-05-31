import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from '../../src/Container/Splash';
import _AppInfo from '../Container/AppintroSlider'
import Account from '../../src/Container/Account';
import Login from '../../src/Container/AuthFlow/Login';
import SignUp from '../../src/Container/AuthFlow/SignUp';
import ForgetPassword from '../../src/Container/AuthFlow/Forgetpassword';
import AppLanguage from '../../src/Container/AppLanguages';
import AllTutorList from '../Container/TutorList';
import MessageIntroView from '../Container/MessageIntroView';
import LessonIntroView from '../Container/LessonIntroView';
import SingleTutor from '../Container/SingleTutor';
import MessageView from '../Container/MessageView';
import SlotsAvailable from '../Container/SlotsAvailability';
import CheckOut from '../Container/CheckOut';
import MySettings from '../Container/MySettings';
import UnsubscribeView from '../Container/UnsubscribeView';
import FilterView from '../Container/Filters';
import AllMessages from '../Container/allMessagesView';
import MyTutorList from '../Container/MytutorList';
import UserAccount from '../Container/UserAccount';
import StudentAge from '../Container/StudentsAge';
import LevelOfStudents from '../Container/LevelOfStudents';
import Resume from '../Container/Resume';
import SubjectsView from '../Container/Subjects';
import RatingView from '../Container/Rating';
import AllLessonsView from '../Container/AllLessons';
import Payment from '../Container/Payment';

const SplashNavigator = createStackNavigator({
  splash: Splash
}, {
  initialRouteName: 'splash',
  headerMode: 'none'
});

const AppIntroNavgator = createStackNavigator({
  _AppInfo:_AppInfo
},{
  initialRouteName:'_AppInfo',
  headerMode:'none',
}); 
const AppNavigator = createStackNavigator({
  Account:Account,
  Login:Login,
  SignUp:SignUp,
  ForgetPassword:ForgetPassword,
  LessonIntroView:LessonIntroView,
  MessageIntroView:MessageIntroView,
  MyTutorList:MyTutorList,
  MySettings:MySettings,
  AllTutorList:AllTutorList,
  SingleTutor:SingleTutor,
  AllMessages:AllMessages,
  MessageView:MessageView,
  StudentAge:StudentAge,
  LevelOfStudents:LevelOfStudents,
  Resume:Resume,
  RatingView:RatingView,
  AppLanguage:AppLanguage,
  Payment:Payment,
  AllLessonsView:AllLessonsView,
  SubjectsView:SubjectsView,
  AccountAfterLogin:UserAccount,
  FilterView:FilterView,
  UnsubscribeView:UnsubscribeView,
  CheckOut:CheckOut,
  SlotsAvailable:SlotsAvailable,
},{
  initialRouteName:'Account',
  headerMode:'none',
})
const RootNavigator = createSwitchNavigator({
  SplashNavigator,
  AppIntroNavgator,
  AppNavigator
}, {
  initialRouteName: 'SplashNavigator',
  headerMode: 'none',
  navigationOptions: {
    headerTransparent: true
  }
})
export default createAppContainer(RootNavigator)


// const Stack = createStackNavigator();
// const LoadingStack = createStackNavigator();
// const SliderStack = createStackNavigator();

// function Splashscreen(){
//   return(
//     <LoadingStack.Navigator initialRouteName="splash" headerMode="none">
//      <LoadingStack.Screen name='splash' component={Splash} />
//     </LoadingStack.Navigator>
//   )
// }
// function AppSlider (){
//   return(
//     <SliderStack.Navigator initialRouteName="splash" headerMode="none">
//       <SliderStack.Screen name='_AppInfo' component={_AppInfo} />
//       <SliderStack.Screen name='splash' component={Splashscreen} />
//     </SliderStack.Navigator>
//   )
// }
// function MyStack() {
//   return (
//     <Stack.Navigator initialRouteName="splash" headerMode="none">
//        <Stack.Screen name ="splash" component={Splash}/>
//        <Stack.Screen name ="_AppInfo" component={_AppInfo}/>
//       <Stack.Screen name="Account" component={Account} />
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="SignUp" component={SignUp} />
//       <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
//       <Stack.Screen name='LessonIntroView' component={LessonIntroView} />
//       <Stack.Screen name='MessageIntroView' component={MessageIntroView} />
//       <Stack.Screen name='MyTutorList' component={MyTutorList} />
//       <Stack.Screen name='MySettings' component={MySettings} />
//       <Stack.Screen name='SearchView' component={SearchView} />
//       <Stack.Screen name='SingleTutor' component={SingleTutor} />
//       <Stack.Screen name='AllMessages' component={AllMessages} />
//       <Stack.Screen name='MessageView' component={MessageView} />
//       <Stack.Screen name='StudentAge' component={StudentAge} />
//       <Stack.Screen name='LevelOfStudents' component={LevelOfStudents} />
//       <Stack.Screen name='Resume' component={Resume} />
//       <Stack.Screen name='RatingView' component={RatingView}/>
//       <Stack.Screen name='AppLanguage' component={AppLanguage}/>
//       <Stack.Screen name='Payment' component={Payment} />
//       <Stack.Screen name='AllLessonsView' component={AllLessonsView} />
//       <Stack.Screen name='SubjectsView' component={SubjectsView} />
//       <Stack.Screen name='AccountAfterLogin' component={UserAccount} />
//       <Stack.Screen name='FilterView' component={FilterView} />
//       <Stack.Screen name='UnsubscribeView' component={UnsubscribeView} />
//       <Stack.Screen name='CheckOut' component={CheckOut} />
//       <Stack.Screen name='SlotsAvailable' component={SlotsAvailable} />
//     </Stack.Navigator>
//   );
// }
// export default class _Navigation extends React.Component {
//   render() {
//     return (

//       <NavigationContainer>
//         <MyStack />
//       </NavigationContainer>
//     );
//   }

// }