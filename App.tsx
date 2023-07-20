import React from 'react';

import {SafeAreaView, View, Text} from 'react-native';
import AppPro from './AppPro';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text> Hello world</Text>
        <Text> Hello world</Text>
        <Text> Hello world</Text>
        <Text> Hello world</Text>
      </View>

      <AppPro />
      <SafeAreaView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default App;
