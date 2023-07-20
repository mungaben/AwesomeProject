import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function OpenWebsite(WebsiteLink: string) {
    try {
      Linking.openURL(WebsiteLink);
    } catch (error) {
      console.error('Error opening website:', error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>A</Text>
      <View style={[styles.card, styles.elevationCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            perferendis.
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/109209204?v=4',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={8} style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            quibusdam laborum alias sit odit accusamus illum corporis. Amet
            aliquid, natus eos sapiente officiis maiores labore, itaque est
            corporis sint ut!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => OpenWebsite('https://github.com/mungaben')}>
            <Text style={styles.footerText}>
              Click here to visit the website
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerSocial}>
          <TouchableOpacity
            onPress={() => OpenWebsite('https://github.com/mungaben')}>
            <Text style={styles.socialText}>Follow on GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  elevationCard: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  headingContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 16,
    color: 'black',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
  bodyContainer: {},
  bodyText: {
    fontSize: 14,
    color: '#333',
  },
  footerContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    marginVertical: 10,
  },
  footerText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  footerSocial: {},
  socialText: {
    fontSize: 16,
    color: 'green',
  },
});
