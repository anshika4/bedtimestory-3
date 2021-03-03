import React from 'react';
import { StyleSheet, Text,TouchableOpacity,View,TextInput,KeyboardAvoidingView ,ToastAndroid} from 'react-native';
import db from '../config'

export default class WriteScreen extends React.Component{
constructor(){
super();
this.state={
TitleStory:'' ,
AuthorStory:'' ,
Writestory: '',
}
}

submitStory = () => {
db.collection('story').add({
TitleStory: this.state.TitleStory,
AuthorStory: this.state.AuthorStory,
Writestory: this.state.Writestory,
});
this.setState({
title: '',
author: '',
storyText: '',
}); 
ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
};


render(){
return (
<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
<Text style={styles.header}>bedtimestory</Text>

<TextInput
style={styles.TitleStory}
placeholder='write Story Tittle'
onChangeText={(text)=>{
this.setState({
TitleStory: text
})
}}
value={this.state.TitleStory}/>

<TextInput
style={styles.AuthorStory}
placeholder='write Author of the story'
onChangeText={(text)=>{
this.setState({
AuthorStory: text
})
}}
value={this.state.AuthorStory}/>   


<TextInput 
style={styles.Writestory}
placeholder='write story here'
onChangeText={(text)=>{ 
this.setState({
Writestory:text

})
}}
multiline={true}
value={this.state.Writestory}
/>

<TouchableOpacity style={styles.submit} onPress = {this.submitStory}>
<Text>Sumbit</Text>   
</TouchableOpacity>

</KeyboardAvoidingView>
)
}
}

const styles = StyleSheet.create({
container: { 
flex: 1,
justifyContent: 'center', 
alignItems: 'center' 
}, 
submit: {
marginTop:15, 
marginRight:'1%',    
height: 60,
width: 200,
alignItems: 'center',
justifyContent: 'center',
color: 'white',
borderWidth: 4,
borderColor: 'indigo',
backgroundColor: '#ff69b4',
},

Writestory: {
marginTop: 50, 
width: '80%',
alignSelf: 'center',  
textAlign: 'center', 
borderWidth: 4, 
height:200,
borderColor: 'pink',
},

TitleStory: {
marginTop: 50, 
width: '80%',
alignSelf: 'center', 
height: 40, 
textAlign: 'center', 
borderWidth: 4, 
borderColor: 'pink',
},

AuthorStory: {
marginTop: 50, 
width: '80%',
alignSelf: 'center', 
height: 40, 
textAlign: 'center', 
borderWidth: 4, 
borderColor: 'pink',
},

header: {
marginTop:15, 
backgroundColor : '#ff1493',  
color : 'white', 
fontSize : 50,
textAlign : 'center'
},
});
