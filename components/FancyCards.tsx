import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text>FancyCards</Text>
      <View style={[styles.card, styles.CardElevated]}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/109209204?v=4',
          }}
          style={styles.image}
        />

        <View style={styles.cardBody}>
          <Text style={styles.heading}>Title</Text>
          <Text>Subtitle</Text>
          <Text> data</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: 'gray',
    width: 300,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 18,
  },
  CardElevated: {
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  image: {
    width: 100,
    height: 180,
    marginHorizontal: 10,
  },
  cardBody: {
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: 'gray',
    textShadowColor: 'black',
    padding: 10,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
