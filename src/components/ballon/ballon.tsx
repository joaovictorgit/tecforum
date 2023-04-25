import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  bubbleWrapper: {
    flexDirection: "column",
  },
  bubbleWrapperSent: {
    alignSelf: "flex-end",
    marginLeft: 40,
  },
  bubbleWrapperReceived: {
    alignSelf: "flex-start",
    marginRight: 40,
  },
  balloon: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 16,
  },
  balloonSent: {
    backgroundColor: "#fff",
  },
  balloonReceived: {
    backgroundColor: "#0000ff",
  },
  balloonText: {
    fontSize: 18,
  },
  balloonTextSent: {
    color: "#000",
  },
  balloonTextReceived: {
    color: "#fff",
  },
});

const Balloon = (message: any, currentUser: any) => {
  const sent = currentUser === message.sentBy;
  const balloonColor = sent ? styles.balloonSent : styles.balloonReceived;
  const balloonTextColor = sent
    ? styles.balloonTextSent
    : styles.balloonTextReceived;
  const bubbleWrapper = sent
    ? styles.bubbleWrapperSent
    : styles.bubbleWrapperReceived;
  return (
    <View>
      <View style={{ ...styles.bubbleWrapper, ...bubbleWrapper }}>
        <View style={{ ...styles.balloon, ...balloonColor }}>
          <Text style={{ ...styles.balloonText, ...balloonTextColor }}>
            {message.content}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Balloon;
