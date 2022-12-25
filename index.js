function vowel_counter() {
  const outputEl = document.getElementById("output");
  const user_inputEl = document.getElementById("user_input");
  const s = user_inputEl.value;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let output = 0;
  for (i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      output += 1;
    }
  }
  console.log(s, output);
  outputEl.innerText = " " + output;
}
