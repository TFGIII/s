import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


import Login from './screens/Login';
import AccountInfo from './screens/AccountInfo';
import Menu from './screens/Menu';



export default function App() {
  return (
    <View style={styles.container}>
      {/*<Login />*/}
      {/*<AccountInfo />*/}
      {<Menu />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   

  });
