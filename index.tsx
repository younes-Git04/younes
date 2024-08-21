import React from "react";
import { StyleSheet,View,Text,Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Avatar, Drawer, IconButton, List } from "react-native-paper";
const Index=()=>{
  return(
    <View style={{backgroundColor:'lightblue',flexDirection:'row'
    }}>
      <View style={{flex:1,padding:40,backgroundColor:'#821131',alignSelf:'center'}}>
        <Avatar.Icon icon="login" style={{backgroundColor:'#fff',alignSelf:'center'}} color="red" size={90}/>
        <br /><br /><br /><br />
          <TextInput style={{backgroundColor:'#ccc',height:35}} placeholderTextColor="grey" placeholder="Enter Username"/>
          <br /><br />
          <TextInput style={{backgroundColor:'#ccc',height:35}} placeholder="Enter Password" secureTextEntry placeholderTextColor="grey"/>
          <br /><br />
          <Drawer.Item icon="send"  label="SEND" style={{backgroundColor:'#64ffda',}}/>
      </View>
    </View>
  );
}
export default Index;