import React from 'react';
import {SafeAreaView} from 'react-native';
import {extendTheme, NativeBaseProvider} from 'native-base';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

import Home from './src/pages/Home';

const App = () => {
  const customTheme = extendTheme({config});

  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
export default App;
