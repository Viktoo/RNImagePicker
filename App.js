/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button, Alert, Image, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

type Props = {};
export default class App extends Component<Props> {

constructor() {
  super();
  this.state = {
    image: null,
  };
}

pickSingleWithCamera= () => {
  ImagePicker.openCamera({
    cropping: true,
    width: 500,
    height: 500,
    includeExif: true,
  }).then(image => {
    console.log('received image', image);
    this.setState({
      image: {uri: image.path, width: image.width, height: image.height},
    });
  }).catch(e => alert(e));
}

  renderImage(image) {
    return <Image style={{width: 350, height: 350, marginTop: 500, resizeMode: 'contain'}} source={image} />
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to the Menu Scene!</Text>
        
        {this.state.image ? this.renderImage(this.state.image) : null}

        <TouchableOpacity onPress={this.pickSingleWithCamera}>
        <Image source={require('./assets/plus.png')} style={styles.add} 
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  add:{
    marginTop: 600,
    width: 80,
    height: 80,
  }
});
