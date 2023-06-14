
//Importando o que será usado
  //React
  import React from "react"; 
    //Componentes (botão, texto, view, touchableopacity, image)
    import {Button} from "react-native";
      import {Text} from "react-native";
    import {View} from "react-native";  
      import {TouchableOpacity} from "react-native";
    import {Image} from "react-native";
      //Component
      import {Component} from "react";
        //Stylesheet
        import {StyleSheet} from "react-native";
            //TextInpunt
            import {TextInput} from "react-native"
          
  //Classes
  import db from "./config";
import LoginScreen from "./screens/Login";
  import Botao from "./Navegador";

//Classe padrão do App

  export default class App extends Component {
    constructor() {
      super();
      this.state = {
        fontLoaded: false
      };
    }
  
    async loadFonts() {
      await Font.loadAsync({
        Rajdhani_600SemiBold: Rajdhani_600SemiBold
      });
      this.setState({ fontLoaded: true });
    }
  
    componentDidMount() {
      this.loadFonts();
    }
  
    render() {
      
    }
  }
  
  const AppSwitchNavigator = createSwitchNavigator(
    {
      Login: {
        screen: LoginScreen
      },
      BottomTab: {
        screen: BottomTabNavigator
      }
    },
    {
      initialRouteName: "Login"
    }
  );
  
  const AppContainer = createAppContainer(AppSwitchNavigator);
  