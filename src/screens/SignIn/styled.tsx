import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 90%;
  align-self: center;
  margin-top: 50px;
`;

export const ContainerInputs = styled.ScrollView`
  margin-top: 10px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: ${Colors.red};
`;

export const RecoverPasswordButton = styled.TouchableOpacity``;

export const RecoverPasswordText = styled.Text`
  color: ${Colors.primary};
  font-size: 16px;
  font-family: ${Fonts.regular};
  text-decoration: underline;
  text-decoration-color: ${Colors.primary};
`;

export const WrapperError = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Strong = styled.Text`
  color: ${Colors.primary};
  font-size: 12px;
  font-family: ${Fonts.bold};
`;
