import React, {memo} from 'react';
import {Container, Card, Img, Title, Content} from './styles';
import {SharedElement} from 'react-native-shared-element';
import {useNavigation} from '@react-navigation/native';

type Props = {
  news: news;
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
  multimedia: Array<multimedia>;
  short_url: string;
};

type multimedia = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
};

const RenderItem: React.FC<Props> = ({news}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Card onPress={() => navigation.navigate('NewsDetails', {news})}>
        <SharedElement id={`news.${news.title}`}>
          <Img resizeMode="stretch" source={{uri: news.multimedia[0].url}} />
        </SharedElement>
        <Title>{news.title}</Title>
        <Content numberOfLines={1}>{news.abstract}</Content>
      </Card>
    </Container>
  );
};

export default memo(RenderItem);
