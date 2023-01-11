import React from "react";
import Container from "../components/layout/Container";
import HomeCards from "../components/home/HomeCards";
import MainLayout from "../components/layout/MainLayout";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Home" navigation={navigation} headerTitle={"Bem-vindo, Bredi"} type="home">
      <Container>
        <HomeCards navigation={navigation} />
      </Container>
    </MainLayout>
  );
}
