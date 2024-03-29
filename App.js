import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import { Colors } from "./src/utilities/Colors";
import Focus from "./src/features/Focus";
// platform makes me target ios or android styiling differently
import React, { useState } from "react";
import Timer from "./src/features/Timer";
import FocuseHistory from "./src/features/FocuseHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [History, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocuseHistory history={History} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimeEnd={(Subject) => {
            setHistory([...History, Subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //condisional rendereing for Platform mainly for android as android is not effected by safe area view
    // statusBar.currenHeight is the height of the status bar on the top of the screen
  },
  text: {
    color: Colors.white,
    fontSize: 20,
  },
});
