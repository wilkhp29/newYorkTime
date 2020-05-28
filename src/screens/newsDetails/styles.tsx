import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  padding: 10px;
  align-items: center;
  height: ${height / 3}px;
  width: 100%;
`;
export const Card = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 10;
  align-items: center;
`;
export const Img = styled.Image`
  width: ${width - 40}px;
  height: 70%;
`;
export const Title = styled.Text`
  flex: 1;
  text-align: center;
  color: #212121;
  margin-top: -20px;
  font-weight: bold;
`;
export const Content = styled.Text`
  flex: 1;
  margin-top: -10px;
  color: #34495e;
`;
