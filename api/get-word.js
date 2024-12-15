const words = [
  {
    word: "Happy",
    meaning: "خوشحاله",
    example: "I am happy every day.",
    pashto_example: "زه هره ورځ ډير خوشحاله يم",
  },
  {
    word: "Kind",
    meaning: "مهربانه",
    example: "She is very kind to everyone.",
    pashto_example: "هغې له هرچا سره ډیره مهربانه ده",
  },
  {
    word: "Strong",
    meaning: "قوي",
    example: "He is strong enough to lift the box.",
    pashto_example: "هغه دومره قوي دی چې صندوق پورته کړي",
  },
];

module.exports = (req, res) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  res.status(200).json(words[randomIndex]);
};
