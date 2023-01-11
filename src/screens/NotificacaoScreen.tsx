import React from "react";
import { View, ScrollView } from "react-native";
import CardNotificao from "../components/cards/CardNotificao";
import Container from "../components/layout/Container";
import H1 from "../components/fonts/H1";
import MainLayout from "../components/layout/MainLayout";

export default function NotificacaoScreen({ navigation }: { navigation: any }) {
  return (
    <MainLayout path="" navigation={navigation} headerTitle={"Notificações"}>
      <Container>
        <View style={{ flex: 1, width: '100%', marginTop: 32 }}>
          <H1 title='Últimas notificações' />
          <ScrollView>
            <CardNotificao
              title="Cabeça de prata"
              conteudo="Amanhã, o cantor Jorginho Silva comanda a Tarde Musical do Cabeça de Prata. Vem curtir uma tarde muito especial com muita música! 💙❤️"
              link="https://www.assembleiaparaense.com.br/eventos/agenda/iii-etapa-do-ranking-de-squash-2/"
            />
            <CardNotificao
              title="Halloween AP"
              conteudo="Uma noite assustadoramente divertida está chegando para a alegria da criançada com o Halloween da AP! 👻🎃"
              link="https://www.assembleiaparaense.com.br/"
            />
          </ScrollView>
        </View>
      </Container>
    </MainLayout>
  );
}

