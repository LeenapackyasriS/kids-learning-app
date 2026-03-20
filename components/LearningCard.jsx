import { View, Text, StyleSheet, Image, Pressable, Animated } from "react-native";
import { useRef } from "react";
import { speakTwice } from "../hooks/useSpeech";

export default function LearningCard({
  title,
  subtitle,
  image,
  type = "alphabet",
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const isSpeaking = useRef(false);

  const handlePress = () => {
    if (isSpeaking.current) return; // prevent rapid taps
    isSpeaking.current = true;

    // 🔥 Animate up
    Animated.spring(scaleAnim, {
      toValue: 1.05,
      useNativeDriver: true,
      friction: 4,
    }).start();

    // 🎤 Speech logic
    speakTwice(title, subtitle, () => {
      // 🔥 Animate back after speech
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4,
      }).start();

      isSpeaking.current = false; // unlock after speech
    });
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable style={styles.card} onPress={handlePress}>
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 30,
    padding: 25,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 120,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 22,
    textAlign: "center",
    color: "gray",
  },
});