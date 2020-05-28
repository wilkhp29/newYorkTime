import React, {useEffect, useState, useCallback} from 'react';
import Axios from 'axios';

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Container} from './styles';
import {FlatList, Text} from 'react-native';
import RenderItem from './renderItem';

type RootStackParamList = {
  Science: undefined;
};

type news = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: Array<string>;
  org_facet: Array<any>;
  per_facet: Array<any>;
  geo_facet: Array<any>;
  multimedia: Array<any>;
  short_url: string;
};

type ScreenRouteProp = RouteProp<RootStackParamList, 'Science'>;

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Science'>;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const DefaultScreen: React.FC<Props> = ({route, navigation}) => {
  const [news, setNews] = useState<news>([]);

  const getData = useCallback(async () => {
    const {
      data: {results},
    } = await Axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${route.name}.json?api-key=fIZvTxCgAOfGsK9MHg5nh5PC8EOeKk0M`,
    );
    console.log('aqui', results);
    setNews(results);
  }, [route]);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Container>
      <FlatList
        data={news}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => <RenderItem news={item} />}
      />
    </Container>
  );
};

export default DefaultScreen;
