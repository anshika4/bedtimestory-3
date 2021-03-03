import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput, 
Alert,FlatList,KeyboardAvoidingView, KeyboardAvoidingViewBase,Image} from 'react-native';
import firebase from 'firebase';
import db from '../config'
export default class LoginScreen extends React.Component {
constructor(){
super();
this.state={
emailId:'',
password:'',
}
}    

login=async(emailId,password)=>{
if(emailId && password){
try{
console.log("logged")
const response=await firebase.auth().signInWithEmailAndPassword(emailId,password)
console.log(response);
if(response){

this.props.navigation.navigate('Write')    
}     
}    
catch(error){
switch (error.code) { 
case 'auth/user-not-found': alert("user dosen't exists") 
console.log("doesn't exist") 
break 
case 'auth/invalid-email': alert('incorrect email or password') 
console.log('invaild')
break 
} //closingSwitch
} 
} 
else{ alert('enter email and password'); 
}
}


render(){
return(
<KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
<View style={styles.container}>
<View>
<Text style={styles.textTiitle}>Bedtime Stories</Text>
<Image style={styles.Image} source={require('../assets/cc.jpg')}/>
</View>    
<View>
<TextInput style={styles.loginBox}
placeholder='emailId(pragunparu@gmail.com)'
keyboardType='email-address'
onChangeText={(text)=>{
this.setState({
emailId:text
})    
}}/> 
<TextInput style={styles.loginBox}
placeholder='password(123456)'
secureTextEntry={true}
onChangeText={(text)=>{
this.setState({
password:text
})    
}}/>   
</View>
<View>
<TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20,marginLeft:110}]} 
onPress={()=>{
this.login(this.state.emailId,this.state.password);
}}><Text style={styles.text}>Login</Text>
</TouchableOpacity>    
</View>
</View>
</KeyboardAvoidingView>
)
}
}

const styles = StyleSheet.create({ 
loginBox: { 
width: 300, 
height: 40, 
borderWidth: 1.5, 
borderColor : '#ff8a65', 
fontSize: 20, 
margin:10, 
paddingLeft:10,
borderRadius:30,
},
textTiitle: { 
textAlign:'center',
fontSize:30,
color : '#ff3d00'
},
Image: { 
width:200,
height:200,
marginLeft:60,
},
text:{
color:'#ffff', 
fontWeight:'200', 
fontSize:20 
},
container:{ 
flex:1, 
backgroundColor:'#F8BE85' 
}, 
button:{ 
width:100, 
height:40, 
justifyContent:'center', 
alignItems:'center', 
borderRadius:25, 
backgroundColor:"#ff9800", 
shadowColor: "#000", 
shadowOffset: { 
width: 0, 
height: 8, 
}, 
shadowOpacity: 0.30, 
shadowRadius: 10.32, 
elevation: 16,
}, 
 })