import React from 'react';
import { Text, View } from "react-native";
import {WebView} from 'react-native-webview';

const WebScreen = props => {
  return (
      <WebView source={{ uri: 'https://g3.gooc.us/app/' }} />
  );
};

export default WebScreen;
