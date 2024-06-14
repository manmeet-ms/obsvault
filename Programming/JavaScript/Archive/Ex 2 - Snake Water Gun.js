/*
     R    P    S    
R    .    W    L    
P    W    .    L
S    L    W    .
*/

let record;
// record = { 0: "Snake", 1: "Gun", 2: "Water" }
record = { 0: "Scissors", 1: "Paper", 2: "Rock" }
score = 0

for (let i = 1; i <= 10; i++) {
    console.log(`\nRound: ${i}`);
    
    // console.table(record);
    // console.log("Choose from the options above: ");
    // prompt
    user = (Math.floor(Math.random() * 3));
    comp = (Math.floor(Math.random() * 3));
    console.log(`You: ${user} ${record[user]}\nComputer: ${comp} ${record[comp]}`);
    if (user == comp) {
        console.log("This is a draw.");
        score += 0.5
    }
/*
      0    1    2    
      S    G    Wa    
0S    .    L    W    
1G    W    .    L
2Wa   L    W    .

      0    1    2    
      S    P    R    
S0    .    W    L    
P1    L    .    W
R2    W    L    .
*/

    else if ((user == 0 && comp == 1) || (user == 1 && comp == 2) || (user == 2 && comp == 0)) {
        console.log("You WIN this round!");
        score += 1
    }
    else {
        console.log("You LOSE");
        score -= 1

    }

}
console.log(`Score: ${score}`);