import React from 'react';
import {Text, View,Image, requireNativeComponent } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/Readstory';
import WriteScreen from './screens/Writestory';
import LoginScreen from './screens/login';
export default class App extends React.Component {
render(){
return (
<AppContainer/>
);
}
}

const TabNavigator=createBottomTabNavigator({
Write:{screen:WriteScreen},
Read:{screen:ReadStoryScreen}
},
{
defaultNavigationOptions:({navigation})=>({
tabBarIcon: ()=>{
const routeName=navigation.state.routeName;
console.log (routeName);
if(routeName==='Read'){
return(
<Image style={{width:40,height:40}} source={require('./assets/read.png')}/>
)
}else if(routeName==='Write'){
return(
<Image style={{width:40,height:40}} source={require('./assets/write.png')}/>
)
}
}
})
}
);
const switchNavigator=createSwitchNavigator({
LoginScreen:{screen:LoginScreen},
TabNavigator:{screen:TabNavigator}  
})
const AppContainer= createAppContainer(switchNavigator)