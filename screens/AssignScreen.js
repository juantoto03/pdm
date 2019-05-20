import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
 } from 'react-native';

export default class RegisterDeviceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      TextInputTipo: '',
      TextInputMarca: '',
      TextInputModelo: '',
      TextInputSerial: '',
      TextInputUAP: '',
    }
  }

  InserDataToServer = () => {

    const {TextInputTipo} =this.state;
    const {TextInputMarca} =this.state;
    const {TextInputModelo} =this.state;
    const {TextInputSerial} =this.state;
    const {TextInputUAP} =this.state;

    fetch('http://192.168.56.1/pdm/deviceinsert.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tipo: TextInputTipo,
        marca: TextInputMarca,
        modelo: TextInputModelo,
        caract: TextInputSerial,
        caract: TextInputUAP,
      }).then((response) => response.json())
        .then((responseJson) => {
          alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/assing-device.png')
                  : require('../assets/images/assing-device.png')
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.getStartedText}>Asignar Dispositivo</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Area o facultad:</Text>
            <TextInput
              placeholder = "Ingreser Area o facultad"
              onChangeText = {TextInputTipo => this.setState({TextInputTipo})}
              underlineColorAndroid = 'transparent'
              style = {styles.TextInputStyle}
            />
            <Text style={styles.getStartedText}>Usuario:</Text>
            <TextInput
              placeholder = "Ingrese Usuario"
              onChangeText = {TextInputMarca => this.setState({TextInputMarca})}
              underlineColorAndroid = 'transparent'
              style = {styles.TextInputStyle}
            />
            <Text style={styles.getStartedText}>Tipo:</Text>
            <TextInput
              placeholder = "Ingrese Tipo"
              onChangeText = {TextInputModelo => this.setState({TextInputModelo})}
              underlineColorAndroid = 'transparent'
              style = {styles.TextInputStyle}
            />
            <Text style={styles.getStartedText}>Marca:</Text>
            <TextInput
              placeholder = "Ingrese Marcar"
              onChangeText = {TextInputSerial => this.setState({TextInputSerial})}
              underlineColorAndroid = 'transparent'
              style = {styles.TextInputStyle}
            />
            <Text style={styles.getStartedText}>Equipo:</Text>
            <TextInput
              placeholder = "Ingrese Equipo"
              onChangeText = {TextInputUAP => this.setState({TextInputUAP})}
              underlineColorAndroid = 'transparent'
              style = {styles.TextInputStyle}
            />
            <View style={[styles.SubmitButton]}>
              <Button title="ASIGNAR" onPress={this.InserDataToServer} color='#ff9633'/>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    marginTop: 20,
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  RegisterDeviceScreenFilename: {
    marginVertical: 7,
  },
  SubmitButton: {
    marginTop: 10,
    color: '#ff9633',
    width: 300,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  TextInputStyle: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    height: 30,
    width: 300,
    borderWidth: 1,
    borderColor: '#ff9633'
  },
});