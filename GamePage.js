import { StatusBar } from 'expo-status-bar';
import { Linking, Image, Pressable, StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity} from 'react-native-web';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const GamePage = () => {
    return(
        <View style={styles.container}>
          <View style={styles.horizontalContainer}>
            <BackArrow/>
            <TitleBar/>
          </View>
            <GameView/>
        </View>
    );
}

export default GamePage;

const TitleBar = (props) => {
    return (
      <View style={styles.titleBar}>
        <Text
          style={{
            color: 'black',
            fontSize: '150%',
          }}
        >Psychology of Interfaces</Text>
        <Text 
          style={{
            color: 'black',
            fontSize: '80%',
          }}
        >An Independent Study by Davis Haden</Text>
        <TouchableOpacity
          onPress={() => {Linking.openURL('https://github.com/RolandHaden');}}
        >
          <Image 
            style={{width: 110/2, height: 25/2, marginTop: 5}} 
            source={require('./assets/github_h.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }

const BackArrow = (props) => {
    const navigation = useNavigation();
    return (
        <Icon.Button
            name="leftcircleo"
            color="white"
            backgroundColor= '#734b5e'
            size={30}
            onPress={() => {navigation.navigate("Home");}}
        />
    );
}

const GameView = (props) => {
  const [isStart, setIsStart] = useState(false);
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(100);
  const [card1Color, set1Color] = useState('#FFFFED');
  const [card2Color, set2Color] = useState('#FFFFED');

  const changeCard = () => {
    setTimeout(function(){
      setCard1(card1+1);
      setCard2(card2-1);
      set1Color('#FFFFED');
      set2Color('#FFFFED');
    }, 5000);
  }
  changeCard();

  const cardstyle = StyleSheet.create({
    card1: {
      flex: 1,
      padding: 20,
      margin: 10,
      backgroundColor: card1Color,
      alignItems: 'center',
      justifyContent: 'center',
      height: '60%',
      width: '100%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      borderRadius: 10,
      elevation: 7,
      marginBottom: 10,
    },
    card2: {
      flex: 1,
      padding: 20,
      margin: 10,
      backgroundColor: card2Color,
      alignItems: 'center',
      justifyContent: 'center',
      height: '60%',
      width: '100%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      borderRadius: 10,
      elevation: 7,
      marginBottom: 10,
    },
  })  

  const CardView = (props) => {
    if (props.cardID == 1){
      return(
        <TouchableOpacity style={cardstyle.card1} onPress={() => 
        {set1Color('#90EE90');}}>
            <Text style={{
              color: 'black',
              fontSize: '150%',
            }}>Selected card is: {props.cardNum}</Text>
            <Image 
              style={{width: '100%', height: '50%'}} 
              source={require('./assets/product1.jpeg')}
            />
        </TouchableOpacity>
      );
    }else if(props.cardID == 2){
      return(
        <TouchableOpacity style={cardstyle.card2} onPress={() => 
        {set2Color('#90EE90');}}>
            <Text style={{
              color: 'black',
              fontSize: '150%',
            }}>Selected card is: {props.cardNum}</Text>
            <Image 
              style={{width: '100%', height: '50%'}} 
              source={require('./assets/product1.jpeg')}
            />
        </TouchableOpacity>
      );
    }
  }

  const DirectionsBar = (props) => {
    return (
      <View style={styles.descBar}>
        <Text style={{
        width: '100%',
        flexWrap: 'wrap',
        color: 'black',
        fontSize: '100%',
      }}>
        In this game, you will be chosing one of the two products displayed on the screen. This game is testing your reactions speed. Note that some will glitch, so be sure that the block stays green. The game will conclude on it's own so please wait for it to finish.
      </Text>
      </View>
    );
  }

  if (isStart == false){
    return (
      <View style={styles.startContainer}>
        <DirectionsBar/>
        <TouchableOpacity style={styles.startButton} onPress={()=>{setIsStart(true)}}>
          <Text style={{
          color: 'white',
          fontSize: '200%',
          }}
          >Start</Text>
        </TouchableOpacity>
      </View>
    );
  }else if (isStart == true) {
    return (
      <View style={styles.gameContainer}>
        <CardView cardNum = {card1} cardID = {1}/>
        <CardView cardNum = {card2} cardID = {2}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#734b5e',
        alignItems: 'center',
        padding: 8,
    },
    horizontalContainer: {
        width: '100%',
        minHeight: 120,
        flexDirection: "row",
        backgroundColor: '#734b5e',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    titleBar: {
        flex: 1,
        padding: 8,
        backgroundColor: '#FFFFED',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 100,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        borderRadius: 10,
        elevation: 7,
        marginBottom: 10,
      },
      backArrow: {
        flex: 1,
        maxWidth: 100,
        maxHeight: 100,
        alignItems: 'center',
        padding: 8,
      },
      descBar: {
        padding: 10,
        backgroundColor: '#FFFFED',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '50%',
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        borderRadius: 10,
        elevation: 7,
        marginBottom: 10,
      },
      gameContainer:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#734b5e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      },
      startContainer:{
        flex: 1,
        backgroundColor: '#734b5e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      },
      startButton: {
        flex: 1,
        padding: 8,
        backgroundColor: '#90EE90',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 50,
        width: 200,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        borderRadius: 10,
        elevation: 7,
        marginBottom: 10,
      },
})