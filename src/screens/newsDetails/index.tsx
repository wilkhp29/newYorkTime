import React, {useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SharedElement} from 'react-native-shared-element';
import {Linking} from 'react-native';

import {Bnt, BntText, Container, Card, Content, Img, Title} from './styles';
import {news} from '../../utils';
type RootStackParamList = {
  NewsDetails: {news: news};
};

type ScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetails'>;

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewsDetails'
>;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
const NewsDetails: React.FC<Props> = ({route, navigation}) => {
  const {news} = route.params;

  useEffect(() => {
    navigation.setOptions({title: news.title});
  }, [navigation, news, route]);

  return (
    <Container>
      <Card>
        <SharedElement id={`news.${news.title}.photo`}>
          <Img resizeMode="stretch" source={{uri: news.multimedia[0].url}} />
        </SharedElement>
        <Title>{news.title}</Title>
        <Content>{news.abstract}</Content>
        <Bnt onPress={() => Linking.openURL(news.short_url)}>
          <BntText>Go to Site</BntText>
        </Bnt>
      </Card>
    </Container>
  );
};

export default NewsDetails;
