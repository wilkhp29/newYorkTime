import React, {memo} from 'react';
import {SharedElement} from 'react-native-shared-element';
import {useNavigation} from '@react-navigation/native';

import {Container, Card, Img, Title, Content} from './styles';
import {news} from '../../utils';

type Props = {
  news: news;
};
const RenderItem: React.FC<Props> = ({news}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Card onPress={() => navigation.navigate('NewsDetails', {news})}>
        <SharedElement id={`news.${news.title}.photo`}>
          <Img resizeMode="stretch" source={{uri: news.multimedia[0].url}} />
        </SharedElement>
        <Title>{news.title}</Title>
        <Content numberOfLines={1}>{news.abstract}</Content>
      </Card>
    </Container>
  );
};

export default memo(RenderItem);
