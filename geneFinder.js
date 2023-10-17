let dna = require("./dna.json")

let startCodon = "atg";
let endCodon = "taa";

let startIndex = dna.indexOf(startCodon);
let endIndex = startIndex

let foundeGene;

let allGenes = [];



// a.	Displaying number of all genes


for (let i = 0; i < dna.length - 1; i++) {
  endIndex = dna.indexOf(endCodon, endIndex + 3);
  let geneCandidate = dna.slice(startIndex, endIndex + 3);

  if (geneCandidate.length % 3 === 0) {
    foundeGene = geneCandidate;
    allGenes.push(geneCandidate)
  }
}

console.log(allGenes.length); // 2265


// b.	Displaying length of longest and shortest gene

let longestGeneLength = 0;
let shortestGeneLength = Infinity;

allGenes.forEach(gene => {
    if(gene.length > longestGeneLength){
        longestGeneLength = gene.length;
    };

    if(gene.length < shortestGeneLength){
        shortestGeneLength = gene.length;
    }
});

console.log(shortestGeneLength) // 165
console.log(longestGeneLength) // 4914
