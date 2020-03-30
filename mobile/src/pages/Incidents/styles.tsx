import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: ${Constants.statusBarHeight + 20}px 24px 0px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageHeader = styled.Image``;

export const TextHeader = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const TextHeaderBold = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const TextTitle = styled.Text``;

export const TextDecription = styled.Text``;
