import { StatusBar } from 'expo-status-bar';
import { Linking, Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-web';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

const SurveyPage = () => {
    return(
        <View style={styles.container}>
          <View style={styles.horizontalContainer}>
            <BackArrow/>
            <TitleBar/>
          </View>
        </View>
    );
}

export default SurveyPage;

const TitleBar = (props) => {
    return (
      <View style={styles.titleBar}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'avenir',
            adjustsFontSizeToFitHeight: true,
            fontSize: '30px',
          }}
        >Psychology of Interfaces</Text>
        <Text 
          style={{
            color: 'white',
            fontFamily: 'avenir',
            adjustsFontSizeToFitHeight: true,
            fontSize: '15px',
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
            backgroundColor= '#d2bfff'
            size={30}
            onPress={() => {navigation.navigate("Home");}}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d2bfff',
        alignItems: 'center',
        padding: 8,
    },
    horizontalContainer: {
        width: '100%',
        minHeight: 120,
        flexDirection: "row",
        backgroundColor: '#d2bfff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    titleBar: {
        flex: 1,
        padding: 8,
        backgroundColor: '#c0a7fa',
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
})