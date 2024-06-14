arr = [0, 1, 2, 3, 4]

for (let i=0;i<arr.length;i++){
    console.log("normal", i);
}
// 
arr.forEach((element)=>{
    console.log("forEach", element);
})

arr.forEach((element)=>{console.log("One Liner", element);})

// to make an array from an iterable??
str = "Voldemort"
let str_arr = Array.from(str)
console.log(str_arr);

for (let i of arr){
    console.log(i); // this gives a numerical output
}

for (let i in arr){
    console.log(i); // this prints string
}

// to get a numerical value with for in loop; we have to do like this 
for (let i in arr){
    console.log(arr[i]); // this prints string
}
/*analogy why forin at the first place prints string 
think of it like as an object 
as obj={
    0:"0",
    1:"1",
    2:"2",
    4:"4",
}
for of will give keys 
for in will give values corresponding to the keys as demonstrated below  
*/