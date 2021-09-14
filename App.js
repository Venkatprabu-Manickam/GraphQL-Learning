/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  from 'react';
import { SafeAreaView} from 'react-native';
import { ApolloProvider} from "@apollo/client";
import { client } from './client';
import {StackNavigator} from './navigation';


const App = (): React.ReactElement => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style = {{flex:1}}>
        <StackNavigator />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
