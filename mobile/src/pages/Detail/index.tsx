import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { composeAsync } from 'expo-mail-composer';
import { Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  ImageHeader,
  DetailButton,
  DetailCard,
  DetailPropertie,
  DetailValue,
  DetailText,
  DetailDescription,
  DetailAction,
  DetailButtonAction,
  DetailActionText,
} from './styles';
import LogoImg from '../../assets/logo.png';

interface IIncident {
  createdAt: string;
  updatedAt: string;
  description: string;
  id: number;
  ong_id: string;
  title: string;
  value: number;
  ong: {
    city: string;
    createdAt: string;
    email: string;
    id: string;
    name: string;
    uf: string;
    updatedAt: string;
    whatsapp: string;
  };
}

export default function Details() {
  const route = useRoute();

  const { ong, title, description, value }: IIncident = route.params[
    'incident'
  ];

  const textMensage = `Olá ${
    ong.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${title}" com o valor de ${Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    }
  ).format(value)}`;

  const navigation = useNavigation();

  const navigateScreen = (): void => {
    navigation.goBack();
  };

  const sendEmail = () => {
    composeAsync({
      subject: `Herói do caso: ${title}`,
      recipients: [ong.email],
      body: textMensage,
    });
  };

  const sendWhatsapp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${ong.whatsapp}&text=${textMensage}`
    );
  };

  return (
    <Container>
      <Header>
        <ImageHeader source={LogoImg} />

        <DetailButton onPress={navigateScreen}>
          <Feather name="arrow-left" size={24} color="#e82041" />
        </DetailButton>
      </Header>

      <DetailCard>
        <DetailPropertie>ONG:</DetailPropertie>
        <DetailValue>
          {ong.name} de {ong.city} / {ong.uf}
        </DetailValue>

        <DetailPropertie>CASO:</DetailPropertie>
        <DetailValue>{title}</DetailValue>

        <DetailPropertie>VALOR:</DetailPropertie>
        <DetailValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value)}
        </DetailValue>
      </DetailCard>

      <DetailCard>
        <DetailText>Salve o dia!</DetailText>

        <DetailText>Seja o herói desse caso.</DetailText>

        <DetailDescription>Entre em contato:</DetailDescription>

        <DetailAction>
          <DetailButtonAction onPress={sendWhatsapp}>
            <DetailActionText>Whatsapp</DetailActionText>
          </DetailButtonAction>

          <DetailButtonAction onPress={sendEmail}>
            <DetailActionText>E-mail</DetailActionText>
          </DetailButtonAction>
        </DetailAction>
      </DetailCard>
    </Container>
  );
}
