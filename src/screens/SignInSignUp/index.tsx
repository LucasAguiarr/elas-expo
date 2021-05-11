import React from 'react';
import {
  Container,
  ContainerIcon,
  Icon,
  ContainerCenter,
  SignInButton,
  SignInText,
  SignUpButton,
  SignUpText,
  ContainerFooter,
} from './styled';

import Button from '../../components/Button';

const SignInSignUp = ({ navigation }: any) => {
  return (
    <>
      <Container>
        <ContainerIcon>
          <Icon source={require('../../assets/images/Logo.png')} />
        </ContainerIcon>

        <ContainerCenter>
          <SignInButton onPress={() => navigation.navigate('SignIn')}>
            <SignInText>Conecte-se</SignInText>
          </SignInButton>
          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
            <SignUpText>Cadastre-se</SignUpText>
          </SignUpButton>
        </ContainerCenter>

        <ContainerFooter>
          <Button
            text={'EMAIL'}
            source={require('../../assets/images/Email.png')}
            imageStyle={{ width: 18, height: 15 }}
            containerStyle={{ margin: 20 }}
          />
          <Button
            color={'#303030'}
            text={'APPLE'}
            source={require('../../assets/images/Apple.png')}
          />
          <Button
            textColor={'#000'}
            color={'#fff'}
            text={'GOOGLE'}
            source={require('../../assets/images/Google.png')}
            containerStyle={{ marginTop: 20, marginBottom: 55 }}
          />
        </ContainerFooter>
      </Container>
    </>
  );
};

export default SignInSignUp;