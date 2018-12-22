/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

  // constructor() {
  //   super();
  //   this.state = {
  //     image: null,
  //     images: null
  //   };
  // }


  // .then(image => {
  //     console.log('received image', image);
  //     this.setState({
  //       image: {uri: image.path, width: image.width, height: image.height},
  //       images: null
  //     });
  //   }).catch(e => alert(e));
  // }

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

pickSingleWithCamera() {
  ImagePicker.openCamera({
    cropping: true,
    width: 500,
    height: 500,
    includeExif: true,
  });
  //Alert.alert('You tapped the button!')
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
       <Button 
        // title="choose photo"
          onPress={this.pickSingleWithCamera}
          // onPress={() => {
          //   this.pickSingleWithCamera;
          // }}
          title="Press Me"
        />
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
});
