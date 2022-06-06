import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  PixelRatio,
  TouchableHighlight,
  Dimensions,
  SafeAreaView,
  Button,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import BlueButton from "../../components/BlueButton";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RadioForm from "react-native-simple-radio-button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function FirstScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const checaExistencia = async (e) => {
    var axios = require("axios").default;

    var options = {
      method: "POST",
      url: "http://10.0.2.2:3001/checkExistence",
      headers: { "Content-Type": "application/json" },
      data: { email: email },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (response.data.length != 0) {
          alert("Este email já está sendo usado");
          setEmail("");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const enviaDados = async (e) => {
    if (email == "" || password == "") {
      alert("Dados incompletos");
    } else {
      if (email.indexOf("@") !== -1) {
        var axios = require("axios").default;

        var options = {
          method: "POST",
          url: "http://10.0.2.2:3001/loginApp",
          headers: { "Content-Type": "application/json" },
          data: {
            email: email,
            senha: password,
          },
        };

        axios
          .request(options)
          .then(function (response) {
            AsyncStorage.setItem("librasptbtoken", response.data.token);
            AsyncStorage.setItem("user", response.data.email);
            navigation.navigate("Categorias");
          })
          .catch(function (error) {
            console.log(error);
            if (error.response.status == 405) {
              alert("Este email não esta cadastrado.");
              navigation.navigate("SignUp1");
            }
            if (error.response.status == 400) {
              alert("Senha errada.");
            }
          });
      } else {
        alert("Email sem @");
        setEmail("");
      }
    }
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let [eye, setEye] = React.useState("openned");
  let [secure, setSecure] = React.useState(true);

  const navigation = useNavigation();

  if (eye == "openned") {
    eye = (
      <TouchableHighlight
        onPress={() => {
          setEye("closed");
          setSecure(false);
        }}
        style={styles.TouchableHighlightEye}
      >
        <Image
          style={styles.eye}
          source={require(`../../../assets/${"openned-eye.png"}`)}
          onPress={() => {
            setEye("closed");
          }}
        ></Image>
      </TouchableHighlight>
    );
  } else {
    eye = (
      <TouchableHighlight
        onPress={() => {
          setEye("openned");
          setSecure(true);
        }}
        style={styles.TouchableHighlightEye}
      >
        <Image
          style={styles.eye}
          source={require(`../../../assets/${"closed-eye.png"}`)}
        ></Image>
      </TouchableHighlight>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCriarConta}>
        <Text style={styles.textCriarConta}>Login</Text>
      </View>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.TextInput}
      />
      <View style={styles.line} />
      <TextInput
        secureTextEntry={secure}
        value={password}
        placeholder="Senha"
        keyboardType="default"
        onChangeText={setPassword}
        style={styles.TextInput}
      />
      <View style={styles.line} />
      {eye}

      <TouchableHighlight onPress={() => enviaDados()} style={styles.Button}>
        <Text style={styles.TextButton}>Começar a aprender</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height: PixelRatio.getPixelSizeForLayoutSize(80),
    flexDirection: "column",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  text: {
    fontSize: 21 * PixelRatio.getFontScale(),
    color: "#023047",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    flexWrap: "wrap",
    fontWeight: "600",
    width: 300,
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  text_colored: {
    fontSize: 21 * PixelRatio.getFontScale(),
    color: "#FFB703",
    fontWeight: "600",
  },
  viewCriarConta: {
    backgroundColor: "#8ECAE6",
    width: "100%",
    height: "10%",
  },
  textCriarConta: {
    color: "#00537A",
    fontSize: 21 * PixelRatio.getFontScale(),
    marginTop: 23 * PixelRatio.getFontScale(),
  },
  line: {
    borderBottomColor: "#FFB703",
    borderBottomWidth: 2,
    width: "80%",
    alignSelf: "center",
  },
  datapickerbutton: {
    width: "50%",
    marginTop: "20%",
  },
  eye: {
    width: "5%",
    height: "15%",
    position: "relative",
    marginLeft: "80%",
  },
  Button: {
    backgroundColor: "#8ECAE6",
    borderRadius: 35,
    width: "50%",
    height: "10%",
    marginTop: "10%",
    flex: 0,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
  },
  TextButton: {
    color: "#023047",
    fontSize: 20,
    fontWeight: "800",
  },
  TextInput: {
    marginLeft: "10%",
    marginTop: "5%",
    marginBottom: "5%",
    color: "black",
  },
  radioForm: {
    marginLeft: "15%",
    marginBottom: "10%",
  },
  radioFormText: {
    marginLeft: "10%",
    marginTop: "10%",
    marginBottom: "5%",
  },
});
