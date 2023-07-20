import React from 'react';

import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import AppPro from './AppPro';
import ElevatedCards from './components/ElevatedCards';
import FlatCards from './components/FlatCards';
import Scroolable from './components/Scroolable';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text> Hello world</Text>
          <Text> Hello world</Text>
          <Text> Hello world</Text>
          <Text> Hello world</Text>
        </View>

        <AppPro />

        <FlatCards />
        <ElevatedCards />
        <Scroolable />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
