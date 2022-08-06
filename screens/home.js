import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Title from '../components/title';


const Home = ({navigation}) => (
    <View style={styles.container}>
        {/* <Title /> */}
       
        <ImageBackground source={{ uri: "https://i.imgur.com/PBQ75or.png" }} style={styles.image}
        resizeMode="cover">
            <TouchableOpacity onPress={() => navigation.navigate("Choice")} style={styles.start}>
            <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
            </ImageBackground>
        {/* <Image
  style={styles.image}
  source={{uri:'https://i.imgur.com/FrjzV8o.jpg'}}
  resizeMode="stretch"
/> */}
       
        {/* <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.start}>
            <Text style={styles.startText}>Start</Text>
        </TouchableOpacity> */}
    </View>
);

export default Home;

const styles = StyleSheet.create({
    container:{
        height: "100%",
        paddingTop: 50,
        // paddingHorizontal: 40,
        backgroundColor: "#355070"
    },
    banner:{
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        justifyContent: 'center',
        alignItems: "center",
        width: 400,
		height: 800,
      },
      start:{
        width: "100%",
        backgroundColor: "#E56B6F",
        padding: 16,
        marginTop: 425,
        borderRadius: 16,
        alignItems: 'center',
        width: "75%",
      },
      startText:{
        fontSize: 24,
        fontWeight: "600",
        color: "white"
      },
      
      
})