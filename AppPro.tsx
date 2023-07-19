import React from 'react';
import {View, Text, useColorScheme, StyleSheet} from 'react-native';
const AppPro = (): JSX.Element => {
  const Darkened = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={Darkened ? styles.DarkText : styles.WhiteText}>
        {Darkened ? 'Darkened' : 'Lightened'}
      </Text>
      <Text style={Darkened ? styles.DarkText : styles.WhiteText}>
        {Darkened ? 'Darkened' : 'Lightened'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  WhiteText: {
    color: 'white',
  },
  DarkText: {
    color: 'black',
  },
});

export default AppPro;
