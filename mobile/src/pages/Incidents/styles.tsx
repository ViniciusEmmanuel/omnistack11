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

export const TextTitle = styled.Text`
  margin: 46px 0px 16px;
  font-size: 30px;
  font-weight: bold;
  color: #13131a;
`;

export const TextDecription = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentCard = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const IncidentPropertie = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #41414d;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const IncidentButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
