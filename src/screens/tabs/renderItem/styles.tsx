import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  padding: 10px;
  align-items: center;
  width: 100%;
  height: ${height / 2.4 - 30}px;
`;
export const Card = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  align-items: center;
`;
export const Img = styled.Image`
  width: ${width - 40}px;
  height: ${width / 2.5}px;
`;
export const Title = styled.Text`
  text-align: center;
  color: #212121;
  margin-top: 10px;
  font-weight: bold;
`;
export const Content = styled.Text`
  margin-top: 10px;
  color: #34495e;
`;
