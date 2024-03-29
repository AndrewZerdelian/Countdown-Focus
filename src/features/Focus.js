import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { Colors } from "../utilities/Colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { FontSize, Spacing } from "../utilities/Sizes";

export default function Focus({ addSubject }) {
  const [Subject, setSubject] = useState(null);
  console.log(Subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          //value={text}
          onChangeText={setSubject}
          label={"What would you like to your best friend?"}
        />
        <View style={styles.Button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(Subject)}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
  },
  inputContainer: {
    padding: Spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
  Button: {
    justifyContent: "center",
    flex: 0.2,
  },
  text: {
    color: Colors.white,
  },
  textinput: {
    flex: 1,
    marginRight: Spacing.sm,
  },
});
