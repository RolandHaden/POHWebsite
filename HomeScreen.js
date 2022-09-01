import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TitleBar/>
        <BlockMenu/>
      </View>
      </ScrollView>
  );
}

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
    </View>
  );
}

const BlockMenu = (props) => {
  return (
    <View style={styles.BlockMenu}>
      <ExperimentBlock/>
      <ExperimentBlock/>
      <ExperimentBlock/>
      <ExperimentBlock/>
      <ExperimentBlock/>
    </View>
  );
}

const ExperimentBlock = (props) => {
  return (
    <Pressable>
      <View style={styles.ExperimentBlock}>
        <Text
        style={{
          color: 'black',
          fontFamily: 'avenir',
          adjustsFontSizeToFitHeight: true,
          fontSize: '20px',
        }}
        >Experiment</Text>
      </View>
    </Pressable>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2bfff',
    alignItems: 'center',
    padding: 8,
  },
  titleBar: {
    flex: 1,
    backgroundColor: '#c0a7fa',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 80,
    width: '100%',
  },
  BlockMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#d2bfff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  ExperimentBlock: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    padding: 10,
    width: 200,
    height: 150,
    borderRadius: 10,
    margin: 10,
  },
});
