import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '../../utils';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;
export const Card = styled.View`
  flex: 1;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
export const Img = styled.Image`
  width: ${width - 40}px;
  height: ${width - 40}px;
`;
export const Title = styled.Text`
  text-align: center;
  color: #212121;
  margin-top: 20px;
  font-weight: bold;
`;
export const Content = styled.Text`
  flex: 1;
  margin-top: 20px;
  color: #34495e;
  text-align: justify;
`;
export const Bnt = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  border-radius: 5px;
`;
export const BntText = styled.Text`
  color: #fff;
`;
