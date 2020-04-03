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
  margin-bottom: 48px;
`;

export const ImageHeader = styled.Image``;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailCard = styled.View`
  padding: 24px 24px 0px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const DetailPropertie = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #41414d;
`;

export const DetailValue = styled.Text`
  margin: 6px 0px 24px 12px;
  font-size: 15px;
  color: #737380;
`;

export const DetailText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #13131a;
  line-height: 30px;
`;

export const DetailDescription = styled.Text`
  margin-top: 16px;
  font-size: 15px;
  color: #737380;
`;

export const DetailAction = styled.View`
  margin: 16px 0px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailButtonAction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #e02041;
  border-radius: 8px;
  width: 48%;
  height: 50px;
`;

export const DetailActionText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
