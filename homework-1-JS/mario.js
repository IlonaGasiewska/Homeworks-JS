let height = 10;

for (let i = 1; i <=height; i++) {
  let hashesCount = i;
  let spacesCount = height - i;

  let hashes = "";
  for (let j = 0; j < hashesCount; j++) {
    hashes = hashes + "#";
  }

  let spaces = "";
  for (let k = 0; k < spacesCount; k++) {
    spaces = spaces + " ";
  }

  console.log(spaces + hashes + " " + hashes);
}