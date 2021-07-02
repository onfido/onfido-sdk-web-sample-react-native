import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <React.Fragment>
      <WebView
        source={{ uri: "https://latest-onfido-sdk-ui-onfido.surge.sh/" }}
        style={styles.webView}
      />
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  webView: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
