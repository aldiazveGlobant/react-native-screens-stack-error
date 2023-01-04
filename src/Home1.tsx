import { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  align-items: center;
  background-color: #B8C4BB;
  flex: 1;
  justify-content: center;
  padding: 12px;
`

export const Home1: FC = () => (
  <StyledView>
    <Text>This is View 1</Text>
  </StyledView>
);
