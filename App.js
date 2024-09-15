import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { planetas } from "./planetas";
import { Planet } from './Planet';

export default function App() {
  const [planetaSelecionado, setPlanetaSelecionado] = useState(null);

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar style="light" />

      <View style={styles.cabecalho}>
        
        <Image
        source={require('./assets/Sistema Solar.jpg')}
        style={styles.imageSolar}
      />

      </View>
      <View style={styles.containerScrollHorizontal}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {planetas.map((planeta) => (
            <TouchableOpacity key={planeta.nome} onPress={() => setPlanetaSelecionado(planeta)} style={styles.containerPlaneta}>
              <Image source={{ uri: planeta.img }} style={styles.imagemPlaneta} />
              <Text style={styles.nomePlaneta}>{planeta.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.conteudoScroll}>
          {planetaSelecionado ? (
            <Planet
              nome={planetaSelecionado.nome}
              img={planetaSelecionado.img}
              descricaoBreve={planetaSelecionado.descricaoBreve}
              descricao={planetaSelecionado.descricao}
              velocidadeOrbitalMediaKmS={planetaSelecionado.velocidadeOrbitalMediaKmS}
              quantidadeSatelites={planetaSelecionado.quantidadeSatelites}
              areaSuperficieKm2={planetaSelecionado.areaSuperficieKm2}
              periodoRotacaoDias={planetaSelecionado.periodoRotacaoDias}
            />
          ) : (
            <Text style={styles.textoInstrucao}>Selecione um planeta acima para mais detalhes!</Text>
          )}
        </ScrollView>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: "#040000",

  },
  container: {
    flex: 1,
    backgroundColor: "#040000",
    marginBottom: 40,
  },
  cabecalho: {
    backgroundColor: "#040000",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textoCabecalho: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  conteudoScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoInstrucao: {
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center"
  
  },
  containerScrollHorizontal: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#000000',
  },
  containerPlaneta: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imagemPlaneta: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#DD0360",
  },
  nomePlaneta: {
    color: "#ffffff",
    fontSize: 14,
    
  },
  imageSolar:{
    width: 280,
    height: 45,
  }

});