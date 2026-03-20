import { View, Text, StyleSheet, FlatList } from "react-native";
import LearningCard from "../components/LearningCard";
import { numberData } from "../data/numberData";
import { speak } from "expo-speech";

export default function NumbersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learn Numbers 🔢</Text>

      <FlatList
        data={numberData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LearningCard
            title={item.number}
            subtitle={item.word}
            image={item.image}
            onPress={() => speak(item.word)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    alignItems: "center",
  },
});