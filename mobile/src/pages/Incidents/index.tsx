import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { FlatList } from 'react-native';

import {
  Container,
  Header,
  ImageHeader,
  TextHeader,
  TextHeaderBold,
  TextTitle,
  TextDecription,
  IncidentCard,
  IncidentPropertie,
  IncidentValue,
  IncidentButton,
  TextButton,
} from './styles';

import LogoImg from '../../assets/logo.png';

import { api } from '../../services/api';

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
interface IResponse {
  status: number;
  data: {
    message: string;
    page: number;
    total: number;
    data: [IIncident];
  };
}

export default function Incidents() {
  const [incidents, setIncidents] = useState<IIncident[]>([]);
  const [page, setPage] = useState(1);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadIncidents = async (): Promise<IResponse> => {
    if (loading) {
      return;
    }

    if (totalIncidents > 0 && incidents.length === totalIncidents) {
      return;
    }

    setLoading(true);

    const { data, status }: IResponse = await api.get('/incidents', {
      params: { page, limit: 5 },
    });

    if (status === 200) {
      setTotalIncidents(data.total);
      setIncidents([...incidents, ...data.data]);
      setPage(Number(data.page) + 1);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  const navigation = useNavigation();

  const navigateScreen = (incident: IIncident): void => {
    navigation.navigate('Details', { incident });
  };

  return (
    <Container>
      <Header>
        <ImageHeader source={LogoImg} />
        <TextHeader>
          Total de <TextHeaderBold>{totalIncidents} casos</TextHeaderBold>
        </TextHeader>
      </Header>

      <TextTitle>Bem-vindo!</TextTitle>
      <TextDecription>
        Escolha um dos casos abaixo e salve o dia.
      </TextDecription>

      <FlatList
        data={incidents}
        style={{ marginTop: 32 }}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <IncidentCard>
            <IncidentPropertie>ONG: {incident.id}</IncidentPropertie>
            <IncidentValue>{incident.ong.name}</IncidentValue>

            <IncidentPropertie>CASO:</IncidentPropertie>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentPropertie>VALOR:</IncidentPropertie>
            <IncidentValue>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </IncidentValue>

            <IncidentButton
              onPress={() => {
                navigateScreen(incident);
              }}
            >
              <TextButton>Ver mais detalhes</TextButton>
              <Feather name="arrow-right" size={18} color="#e02041" />
            </IncidentButton>
          </IncidentCard>
        )}
      />
    </Container>
  );
}
