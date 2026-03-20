import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kids Learning App 🎈</Text>

      <Pressable
        style={[styles.card, { backgroundColor: "#FF9F1C" }]}
        onPress={() => router.push("/alphabet")}
      >
        <Text style={styles.cardText}>🅰️ Learn Alphabets</Text>
      </Pressable>

      <Pressable
        style={[styles.card, { backgroundColor: "#2EC4B6" }]}
        onPress={() => router.push("/numbers")}
      >
        <Text style={styles.cardText}>🔢 Learn Numbers</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEFF9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  card: {
    width: "90%",
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
    elevation: 5,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});