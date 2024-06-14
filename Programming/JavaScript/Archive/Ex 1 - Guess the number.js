
let gen_num = Math.floor(Math.random() * 100);
// console.log(gen_num);
score =100
guess=0
for (let i = 0; i <= 10; i++) {
    user_inp = Number.parseInt(prompt());
    if (user_inp !== gen_num) {
        console.log("Try Again!");
        if (user_inp>gen_num){
            console.log("Guess Smaller");
        }
        else if (user_inp<gen_num){
            console.log("I am greater than you just guessed.");
        }
        guess += 1
        score-=1
    }
    else{
        console.log(`Success! You guessed the correct number ${gen_num} in ${guess} guesses and your total score is ${score}`);
        break;
    }
}
