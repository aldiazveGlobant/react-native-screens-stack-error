import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';
import { Home } from './src/Home';
import { Home1 } from './src/Home1';
import { Home2 } from './src/Home2';
import { Home3 } from './src/Home3';

const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 100px;
`

const Stack = createNativeStackNavigator();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>{isSignedIn ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Home1" component={Home1} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home2" component={Home2} />
          <Stack.Screen name="Home3" component={Home3} />
        </>
      )}
      </Stack.Navigator>
      <StyledButton onPress={() => setIsSignedIn(old => !old)} >
        <Text>Change state</Text>
      </StyledButton>
    </NavigationContainer>
  );
};

export default App;
