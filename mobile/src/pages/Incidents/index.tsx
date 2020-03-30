import React from 'react';

import { FlatList, View } from 'react-native';

import {
  Container,
  Header,
  ImageHeader,
  TextHeader,
  TextHeaderBold,
  TextTitle,
  TextDecription,
} from './styles';

import LogoImg from '../../assets/logo.png';

export default function Incidents() {
  return (
    <Container>
      <Header>
        <ImageHeader source={LogoImg} />
        <TextHeader>
          Total de <TextHeaderBold>0 casos</TextHeaderBold>
        </TextHeader>
      </Header>

      <TextTitle>Olá</TextTitle>
      <TextDecription>Olá</TextDecription>

      {/* <FlatList
        data={[1, 2, 3, 4]}
        // keyExtractor={}
        showsVerticalScrollIndicator={false}
        // onEndReached={} function fecth api
        // onEndReachedThreshold={0.2}
        // renderItem={({item: incident}) =>(
        //   <View>

        //   </View>

        // )}
      /> */}
    </Container>
  );
}
