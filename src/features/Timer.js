import { StyleSheet, Text, View, Vibration } from "react-native";
import React, { useState } from "react";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { Spacing } from "../utilities/Sizes";
import { Colors } from "../utilities/Colors";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import Timing from "./Timing";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
const Timer = ({ focusSubject, clearSubject,onTimeEnd }) => {
  useKeepAwake();
  const [IsStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [Minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimeEnd(focusSubject)
  };
  return (
    <View style={styles.container}>
      <View style={styles.CountDown}>
        <Countdown
          minutes={Minutes}
          isPaused={!IsStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ padding: Spacing.xxl }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.Task}> {focusSubject}</Text>
        </View>
      </View>
      <View style={{ padding: Spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={Colors.Blue}
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.TimingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!IsStarted && (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        )}
        {IsStarted && (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.ClearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  CountDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    paddingTop: Spacing.xxl,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  Task: {
    color: Colors.white,
    textAlign: "center",
  },
  TimingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    padding: Spacing.md,
  },
  ClearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
