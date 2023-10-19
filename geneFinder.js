let dna = require("./dna.json")

let startCodon = "atg";
let endCodon = "taa";

let startIndex = dna.indexOf(startCodon);
let endIndex = startIndex

let foundeGene;

let allGenes = [];

while (startIndex != -1) {
  endIndex = dna.indexOf(endCodon, endIndex + 3);

  if (endIndex === -1) {
    startIndex = dna.indexOf(startCodon, startIndex + 3);
    endIndex = startIndex;
    continue;
  }

  let geneCandidate = dna.slice(startIndex, endIndex + 3);
  
  if (geneCandidate.length % 3 === 0) {
        foundeGene = geneCandidate;
        allGenes.push(geneCandidate)
        
        dna = dna.slice(endIndex + 3);
        startIndex = dna.indexOf(startCodon);
        endIndex = startIndex;
      } 
}

console.log(allGenes.length); // 63


// b.	Displaying length of longest and shortest gene

let longestGeneLength = 0;
let shortestGeneLength = Infinity;

allGenes.forEach(gene => {
    if (gene.length > longestGeneLength){
        longestGeneLength = gene.length;
    };

    if (gene.length < shortestGeneLength){
        shortestGeneLength = gene.length;
    }
});

console.log(shortestGeneLength) // 6
console.log(longestGeneLength) // 435

