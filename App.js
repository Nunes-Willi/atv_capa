import { StyleSheet, Text, View, Image } from "react-native";
// import Card from "./src/components/Card";


function Card(props) {
  return(
    <View style={styles.card}>
      <Image style={styles.livro} source={{uri: props.livro.capa}} />
      <Text style={{color: 'darkred' }} > {props.livro.titulo} </Text>
      <Text style={{fontSize: 12 }}> R$ {props.livro.preco}</Text>

    </View>
  );
}

export default function App() {
  const livros = [
    {
      capa: 'https://reactnative.dev/img/tiny_logo.png',
      titulo: 'React native',
      preco: "100,00"
    }
  ]

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}> Img do CAPETA!!</Text>
      <View style={styles.conteudo}>
        { livros.map(livro => <Card livro={livro} />) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "darkred",
},

conteudo: {
  flex: 1,
  backgroundColor: 'green',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width:'100%',
},

card: {
  backgroundColor: 'pink',
  width: '40%',
  height: 215,
  borderRadius: 10,
  margin: 15
},

livro:{
  resizeMode: 'stretch',
  width: '100%',
  height: 180,
},

});
