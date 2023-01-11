import React from "react";
import { ScrollView } from "react-native";
import Container from "../components/layout/Container";
import H1 from "../components/fonts/H1";
import MainLayout from "../components/layout/MainLayout";

export default function TelaExemploPrimeiraScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="Convites" navigation={navigation} headerTitle={"Tela Exemplo 1"}>
      <ScrollView style={{marginTop:32}}>
        <Container>
          <H1 title="Body Tela Exemplo 1" />
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
