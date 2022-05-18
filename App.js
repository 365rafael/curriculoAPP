import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import foto from "./assets/foto.jpg";

export default function App() {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case "linkedin":
        Alert.alert(
          "Meu Linkedin",
          "https://www.linkedin.com/in/rafael-arantes-06a6325b/"
        );
        break;
      case "instagram":
        Alert.alert("Meu Instagram", "https://www.instagram.com/rafael_365");
        break;
      case "github":
        Alert.alert("Meu Github", "https://github.com/365rafael");
        break;
    }
  }

  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={foto} style={styles.foto} />
          <Text style={styles.nome}>Rafael Arantes</Text>
          <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
        </View>
        <View style={styles.redes_sociais}>
          <TouchableOpacity onPress={() => handleRedeSocial("github")}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial("instagram")}>
            <Icon name="instagram" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial("linkedin")}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.card_container}>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_content_text}>TQI</Text>
              <Text style={styles.card_content_text}>AVANADE</Text>
              <Text style={styles.card_content_text}>IMPULSO</Text>
            </View>
          </View>
        </View>
        <View style={styles.card_container}>
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text>Formação Acadêmica</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_content_text}>React Native</Text>
              <Text style={styles.card_content_text}>JavaScript</Text>
              <Text style={styles.card_content_text}>MySql</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E7E7E7",
    alignItems: "center",
  },
  container_cabecalho: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  funcao: {
    color: "#939393",
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 20,
  },
  card_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: "100%",
    borderRadius: 5,
    borderSize: 2,
    borderColor: "#939393",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
  },
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: "#939393",
    marginBottom: 10,
  },
});
