import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.SubHeadingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.HeadingText}>Heading red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.HeadingText}>Heading blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.HeadingText}>Heading green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.HeadingText}>Heading green</Text>
        </View>
      </View>
    </View>
  );
}

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
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',

    justifyContent: 'center',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
