import React, { useEffect } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import TextField from "../components/forms/TextField";
import { useForm } from 'react-hook-form'
import Container from "../components/layout/Container";
import ButtonSolid from "../components/buttons/ButtonSolid";
import H1 from "../components/fonts/H1";
import bgNeutroPng from '../../assets/img/bg/bg-neutro.png'
import logoPng from '../../assets/img/logo.png'
import SwiperNews from "../components/swipers/SwiperNews";

export default function LoginScreen({ navigation }: { navigation: any }) {


  const { register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = (data: '') => {
    console.log(data);
    navigation.navigate('Home')
  }

  useEffect(() => {
    register('login', { required: true })
    register('senha', { required: true })
  }, [register])

  return (
    <ImageBackground style={{ flex: 1 }} source={bgNeutroPng} resizeMode="cover" >
      <Container>
        <Image source={logoPng} style={styles.logo} resizeMode="contain" />
        <SwiperNews />
        <View style={styles.wrapperTitle}>
          <H1 title="Login" color="#fff" />
        </View>
        <View>
          <Wrapper>
            <TextField label={'CPF ou MATRÍCULA'} onChangeText={text => setValue('login', text)} error={errors?.login} keyboardType="numeric" />
          </Wrapper>
          <Wrapper>
            <TextField label={'Senha'} onChangeText={text => setValue('senha', text)} error={errors?.senha} keyboardType="numeric" secureTextEntry={true} />
          </Wrapper>
          <WrapperButton>
            <ButtonSolid onPress={handleSubmit(onSubmit)} title="ENTRAR" icon="user" />
          </WrapperButton>
        </View>
      </Container>
    </ImageBackground>
  );
}


function Wrapper({ children }: { children: any }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}
function WrapperButton({ children }: { children: any }) {
  return (
    <View style={styles.wrapperButton}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  wrapperButton: {
    marginTop: 16,
    maxWidth: 200,
    width: '100%',
    alignSelf: 'center'
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 90,
    alignSelf: "center"
  },
  wrapperTitle: {
    marginTop: 16,
    alignItems: 'center'
  }
});
