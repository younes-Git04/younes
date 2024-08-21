  import React, { useEffect, useState } from "react";
  import { StyleSheet,View,Button,Modal } from "react-native";
  import { TextInput } from "react-native-gesture-handler";
  import AntDesign from '@expo/vector-icons/AntDesign';
  const Index=()=>{ 
    const [show, setShow] = useState(false);

    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#7C93C3'}}>
        <Button title="اضغط هنا" onPress={()=>setShow(true)}/>
        <Modal visible={show} style={{position:'relative'}}>
        <View style={{backgroundColor:'#1E2A5E',padding:50}}>
          <h1 style={{color:'#fff',fontWeight:'bold',fontSize:40,textAlign:"center"}}>Log In</h1>
          <TextInput style={{marginBottom:11,width:'90%',alignSelf:'center',textAlignVertical:'top',height:40}}
          placeholder="Enter Your Email" placeholderTextColor="grey"/>
          <TextInput style={{marginBottom:11,width:'90%',alignSelf:'center',textAlignVertical:'top',height:40}}
          placeholder="Enter Your Password" placeholderTextColor="grey"/>
          <Button title="send"/>
          <AntDesign name="closecircleo" size={24} color="white" onPress={()=>setShow(false)} style={{position:'absolute',zIndex:999999,right:20}} />
        </View>
        </Modal>
      </View>
    );
  }
  export default Index;