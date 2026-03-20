import { View, Text, StyleSheet, FlatList } from "react-native";
import { speak } from "../hooks/useSpeech";
import LearningCard from "../components/LearningCard";
import { alphabetData } from "../data/alphabetData";

export default function AlphabetScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learn Alphabets 🅰️</Text>

      <FlatList
        data={alphabetData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LearningCard
            title={item.letter}
            subtitle={item.word}
            image={item.image}
            type="alphabet"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0",
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