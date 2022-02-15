const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {

  setTimeout(() => {
    if (i === sentence.length - 1) {
      console.log(sentence[i]);
    } else {
      process.stdout.write(sentence[i]);
    }
  }, i * 100);
}