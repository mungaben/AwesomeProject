import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.HeadingText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevate]}>
          <Text style={styles.SubHeadingText}>ElevatedCards</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
          <Text style={styles.SubHeadingText}>ElevatedCards</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
          <Text style={styles.SubHeadingText}>ElevatedCards</Text>
        </View>
        <View style={[styles.card, styles.cardElevate]}>
          <Text style={styles.SubHeadingText}>ElevatedCards</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',

    marginTop: 20,
    marginBottom: 20,
  },
  SubHeadingText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'green',
    margin: 10,
    color: 'white',
  },
  cardElevate: {
    elevation: 10,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'green',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
