import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://stiaa.miwcity.net' }}
        style={{ marginTop: 20 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        sharedCookiesEnabled={true}
      />
    );
  }
}

export default MyWeb;