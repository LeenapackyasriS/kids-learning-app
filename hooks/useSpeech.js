import * as Speech from "expo-speech";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const speakTwice = async (letter, word, onComplete) => {
  try {
    Speech.stop(); // stop any previous speech

    const options = {
      language: "en-US",
      pitch: 1.5,
      rate: 0.65,
    };

    // 1️⃣ Speak letter
    Speech.speak(letter, options);
    await delay(700); // wait properly for letter

    await delay(250); // micro buffer delay

    // 2️⃣ Speak full phrase
    Speech.speak(`${letter} for ${word}`, options);
    await delay(1400);

    await delay(250); // micro buffer delay

    // 3️⃣ Repeat full phrase
    Speech.speak(`${letter} for ${word}`, options);
    await delay(1400);

    if (onComplete) onComplete();
  } catch (error) {
    console.log("Speech error:", error);
    if (onComplete) onComplete();
  }
};