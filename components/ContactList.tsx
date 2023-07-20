import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {faker} from '@faker-js/faker';

export default function ContactList() {
  type PersonData = {
    firstName: string;
    lastName: string;
    gender: string;
    jobArea: string;
    jobDescriptor: string;
    jobTitle: string;
    jobType: string;
    middleName: string;
    prefix: string;
    sex: string;
    sexType: string;
    suffix: string;
    zodiacSign: string;
    avatar: string;
    Jobcolor: string;
  };

  const generatePerson: PersonData[] = [
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
    {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: faker.person.gender(),
      jobArea: faker.person.jobArea(),
      jobDescriptor: faker.person.jobDescriptor(),
      jobTitle: faker.person.jobTitle(),
      jobType: faker.person.jobType(),
      middleName: faker.person.middleName(),
      prefix: faker.person.prefix(),
      sex: faker.person.sex(),
      sexType: faker.person.sexType(),
      suffix: faker.person.suffix(),
      zodiacSign: faker.person.zodiacSign(),
      avatar: faker.image.avatar(),
      Jobcolor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.containerScroll}>
        {generatePerson.map((person, index) => (
          <View key={index} style={styles.personCard}>
            <Image source={{uri: person.avatar}} style={styles.avatar} />
            <Text style={styles.name}>
              {person.firstName} {person.lastName}
            </Text>
            <ScrollView style={styles.personInfo}>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Gender: {person.gender}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Job Area: {person.jobArea}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Job Descriptor: {person.jobDescriptor}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Job Title: {person.jobTitle}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Job Type: {person.jobType}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Middle Name: {person.middleName}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Prefix: {person.prefix}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Sex: {person.sex}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Sex Type: {person.sexType}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Suffix: {person.suffix}
              </Text>
              <Text style={[styles.infoText, {color: person.Jobcolor}]}>
                Zodiac Sign: {person.zodiacSign}
              </Text>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  containerScroll: {
    flex: 1,
  },
  personCard: {
    backgroundColor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: faker.color.rgb({prefix: '#', casing: 'lower'}),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: faker.color.rgb({prefix: '#', casing: 'lower'}),
  },
  personInfo: {
    maxHeight: 120, // Set a maximum height for scrollable view
  },
  infoText: {
    fontSize: 14,
    color: faker.color.rgb({prefix: '#', casing: 'lower'}),
    marginBottom: 4,
  },
});
