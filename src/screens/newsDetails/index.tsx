import React, {useEffect} from 'react';
import {View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// import { Container } from './styles';
type RootStackParamList = {
  NewsDetails: {news: {id: number; title: string}};
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
  const {
    news: {title},
  } = route.params;

  useEffect(() => {
    navigation.setOptions({title: title});
  }, [navigation, title, route]);

  return <View />;
};

export default NewsDetails;
