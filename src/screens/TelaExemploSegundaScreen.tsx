import React from "react";
import { ScrollView, View } from "react-native";
import Container from "../components/layout/Container";
import H1 from "../components/fonts/H1";
import MainLayout from "../components/layout/MainLayout";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TelaExemploSegundaScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Boleto" navigation={navigation} headerTitle={"Tela Exemplo 2"}>
      <ScrollView style={{marginTop:32}}>
        <Container>
          <H1 title="Body Tela Exemplo 2" />
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
