import React, { useState } from "react";
import "./styles.css";

var headingText = "Emoji Interpreter!";

var emojiDictionary = {
  "😊": "Smiling",
  "😉": "Winking",
  "🤣": "Rolling on the Floor Laughing",
  "🤗": "Hugging",
  "😏": "Smirking",
  "🤥": "Lying",
  "❤️": "Red Heart",
  "💌": "Love Letter",
  "😂": "LOL",
  "😭": "Crying"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning =
        " Currently we don't have this emoji in our databse. We're updating our database regularly. You can try another emoji. ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input
        placeholder="Enter your emoji to find it's meaning."
        onChange={inputEmojiHandler}
      />
      <div className="output">Meaning = {meaning}</div>
      <h3>emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
      ;
    </div>
  );
}
