// p1
// let arr = []
// for (let index = 0; index < 4; index++) {
//     inp = Number.parseInt(prompt())
//     arr.push(inp)

// }
// console.log(arr);

// p2

// let arr2 = []
// for (let index = 0; index < 4; index++) {
//     inp = Number.parseInt(prompt())
//     if (inp !== 0) {
//         arr2.push(inp);

//     }
//     else {
//         break;
//     }
// }
// console.log(arr2);

// arr2=[]
// do{
//     i = Number.parseInt(prompt())
//     arr2.push(i);
// }while (i !== 0);
// console.log(arr2);


// p3
given=[34,5,35,6,464,65,8,870,10,60,20]
let g = given.filter((arg)=>{
    if ((arg%10)==0){
        return arg
    }
})
console.log(g);

g_sq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sq= g_sq.map((arg)=>{
    return arg*arg
})
console.log(sq);


given_num=5
mk_arr = []
for(let i=1;i<=given_num;i++){
    mk_arr.push(i)
}
res=mk_arr.reduce((arg, arg2)=>{
    return arg * arg2
})
console.log(res);