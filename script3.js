  // loop
  //   initialization,condition,increment/decrement
  const wildanimals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Gorilla', 'Monkey'];
let text = "";

for (let i = 0; i < wildanimals.length; i++) {
  text += wildanimals[i]+ "<br>";
}

console.log(text);

//  even and odd
 document.write("<h1>Even/Odd</h1>");
 for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i+ "\even");
    }
    else{
       console.log(i+ "\odd");
    }
 }
//  table
const number =5;
for (let i=1;i<= 10 ;i++){
    console.log(`${number} * ${i} = ${number * i}`);
}