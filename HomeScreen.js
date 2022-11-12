import { StatusBar } from 'expo-status-bar';
import { Linking, Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TitleBar/>
        <DescBar/>
        <BlockMenu/>
      </View>
  );
}

const TitleBar = (props) => {
  return (
    <View style={styles.titleBar}>
      <Text
        style={{
          color: 'black',
          fontSize: '180%',
        }}
      >Psychology of Interfaces</Text>
      <Text 
        style={{
          color: 'black',
          fontSize: '100%',
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

const DescBar = (props) => {
  return (
    <View style={styles.descBar}>
      <Text
        style={{
          color: 'black',
          fontSize: '150%',
        }}
      >What is this project?</Text>
      <View style={{
        width: '100%',
      }}>
      <Text style={{
        width: '100%',
        flexWrap: 'wrap',
        color: 'black',
        fontSize: '100%',
      }}>
        The way that we perceive our interactions with other people should be applied to the way that we interact with technology and interfaces around us. Interaction is a mutual exchange and the coder behind the technology has a responsibility to persuade the user into engaging. Therefore, this purpose of this Independent Study is to analyze the ways people currently engage with technology through analysing how triggers such as emotional, habitual, visual, audible triggers affect our interactions with technology daily. All of the activities below will contribute to my research.
      </Text>
      </View>
    </View>
  );
}

const BlockMenu = (props) => {
  return (
    <View style={styles.BlockMenu}>
      <ExperimentBlock title="Website Compatibility Check" type='titleDesc' page="Loading" desc="This page will analyze your browser and track compatibility for the website. Please do this before continuing to other activities"/>
      <ExperimentBlock title="TikTok Survey" type='tiktokImg' page="Survey"/>
      <ExperimentBlock title="Shopping Game" type='gameImg' page="Game"/>
    </View>
  );
}

const ExperimentBlock = (props) => {
  const navigation = useNavigation();
  if (props.type == 'titleDesc'){
    return (
      <TouchableOpacity onPress={() => {navigation.navigate(props.page);}}>
        <View style={styles.ExperimentBlock}>
          <Text
          style={{
            color: 'black',
            fontSize: '120%',
            textAlign: 'center',
          }}
          >{props.title}</Text>
          <Text
          style={{
            color: 'black',
            fontSize: '75%',
            marginTop: 5,
          }}
          >{props.desc}</Text>
        </View>
      </TouchableOpacity>
    );
  }else if(props.type == 'tiktokImg'){
    return (
      <TouchableOpacity onPress={() => {navigation.navigate(props.page);}}>
        <View style={styles.ExperimentBlock}>
          <Text
          style={{
            color: 'black',
            fontSize: '120%',
            textAlign: 'center',
          }}
          >{props.title}</Text>
          <Text
          style={{
            color: 'black',
            fontSize: '75%',
            marginTop: 5,
          }}
          >{props.desc}</Text>
          <Image 
              style={{width: '80%', height: '80%'}} 
              source={require("./assets/tiktok.png")}
            />
        </View>
      </TouchableOpacity>
    );
  }else if(props.type == 'gameImg'){
    return (
      <TouchableOpacity onPress={() => {navigation.navigate(props.page);}}>
        <View style={styles.ExperimentBlock}>
          <Text
          style={{
            color: 'black',
            fontSize: '120%',
            textAlign: 'center',
          }}
          >{props.title}</Text>
          <Text
          style={{
            color: 'black',
            fontSize: '75%',
            marginTop: 5,
            marginBottom: 10,
          }}
          >{props.desc}</Text>
          <Image 
              style={{width: '53%', height: '60%'}} 
              source={require("./assets/shopping.png")}
            />
        </View>
      </TouchableOpacity>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#734b5e',
    alignItems: 'center',
    padding: 8,
  },
  titleBar: {
    flex: 1,
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

  BlockMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#734b5e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  ExperimentBlock: {
    backgroundColor: 'rgb(255, 255, 237)',
    alignItems: 'center',
    padding: 10,
    width: 200,
    height: 150,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
