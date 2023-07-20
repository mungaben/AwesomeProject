import {ScrollView} from 'react-native';
import React from 'react';
import FancyCards from './FancyCards';

const Scroolable = () => {
  return (
    <ScrollView>
      <FancyCards />
      <FancyCards />
    </ScrollView>
  );
};

export default Scroolable;
