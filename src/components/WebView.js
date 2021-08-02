import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        sharedCookiesEnabled={true}
        source={{ uri: 'https://stiaa.miwcity.net' }}
        style={{height:"100%", width:"100%" }}
      />
    );
  }
}

export default MyWeb;

