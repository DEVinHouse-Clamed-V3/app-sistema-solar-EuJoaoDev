import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export function Planet({ nome, img, descricaoBreve, descricao, velocidadeOrbitalMediaKmS, quantidadeSatelites, areaSuperficieKm2, periodoRotacaoDias }) {
  return (
    <View style={styles.containerCentro}>
      <Text style={styles.tituloTextoCard}>{nome}</Text>
      
      <Image source={{ uri: img }} style={styles.imagemCard} />
      
      <View style={styles.containerTexto}>
        <Text style={styles.descricaoTextoCard}>{descricao}</Text>
      </View>
      
      <View style={styles.espacoCard}>
        <Text style={styles.textoEtiquetaCard}>Velocidade Orbital Média:</Text>
        <Text style={styles.textoValorCard}>{velocidadeOrbitalMediaKmS} km/s</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textoEtiquetaCard}>Satélites:</Text>
        <Text style={styles.textoValorCard}>{quantidadeSatelites}</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textoEtiquetaCard}>Área de Superfície:</Text>
        <Text style={styles.textoValorCard}>{areaSuperficieKm2} km²</Text>
      </View>

      <View style={styles.espacoCard}>
        <Text style={styles.textoEtiquetaCard}>Período de Rotação:</Text>
        <Text style={styles.textoValorCard}>{periodoRotacaoDias}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCentro: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 15,
    backgroundColor: "#363232", 
    padding: 20,
    shadowColor: "#040000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  tituloTextoCard: {
    color: "#ffffff", 
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  containerTexto: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  descricaoTextoCard: {
    color: "#ffffff", 
    fontSize: 16,
    textAlign: "center",
  },
  espacoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 8,
  },
  imagemCard: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 20,
  },
  textoEtiquetaCard: {
    color: "#ffffff", 
    fontSize: 17,
  },
  textoValorCard: {
    color: "#DD0360", 
    fontSize: 17,
    fontWeight: "bold",
  },
});