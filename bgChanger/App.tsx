/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const [bgColor,setBgColor]=useState("#ffffff")

  const generateColor=()=>{
    const code="1234567890ABCDEF"
    let hexCode="#"
    for (i=0; i < 6; i++){
      const index=Math.floor(Math.random()*16)
      hexCode+=code[index]

    }
    setBgColor(hexCode)
  }
 

  return (
   <>
   <StatusBar backgroundColor={bgColor}/>
   <View style={styles.sectionContainer}>
    <TouchableOpacity onPress={generateColor}>
      <View style={styles.highlight}>
        <Text>Change Color</Text>
      </View>
    </TouchableOpacity>
   </View>
   </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
   flex:1,
   justifyContent:"center",
   alignItems:"center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    backgroundColor:"green",
    padding:15,
    borderRadius:10
  },
});

export default App;
