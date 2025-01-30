//変数：Question 1 : 変数 name を宣言し、自分の名前を代入してください。コンソールに出力してください。
let name1 = 'arisha';
console.log(name1);

//変数：Question 2 : 3つの変数 firstName, lastName, age を宣言し、"John Doe is 25 years old." のような文字列に結合して出力してください。
let firstName = 'Johnny';
let lastName = 'Bravo';
let age = '37';
console.log(firstName + " " + lastName + " " + 'is' + " " + age + " " + 'years' + " " + 'old');
//to add space between words add (" ")
console.log(`${firstName}${lastName} 'is' ${age} 'years' 'old`);







//Data types (データ型)
//Question 1 変数 isRaining を作成し、true を代入してください。
// typeof を使ってそのデータ型を出力してください。
let isRaining = true; //this is to declare variable as true
console.log(typeof isRaining); //to display the type of data

//Quetion 2 変数 mixedData を作成し、異なるデータ型の配列 ["Alice", 25, true, null] を代入してください。
// 配列をループして、各要素のデータ型を出力してください。
//mixed data is a data that consist of multiple data types (ex: string, numbers, boolean, etc)
let biodata = ["Alice", 34, true, null];
console.log(typeof biodata); //how to type array "typeof"

//演算子
//Question 1 加算演算子を使って2つの数字を足し、結果を出力してください。
console.log(4 + 4);

//Question 2 論理演算子を使って、ある数字が3と5の両方で割り切れるかどうかをチェックするプログラムを書いてください。
// let number = parseInt(prompt("2"));
//promt input is always string. if you want to change it into interger (parseInt) converst string to integer
//
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log(number + "is divisible by both 3 and 5");
// } else {
//     console.log(number + "is not divisible by both 3 and 5");
// }

// let pi = 3.14159265358979323846;



//コメント
//円の面積を計算するプログラムを書いてください。各ステップを説明するコメントを追加してください。

// Function to calculate the area of circle
function myFunction() {
    console.log('hello 12345');
}
myFunction();

//you can use function anytime anywhere however much
function myAdd(x, y) {
    console.log(x + y);
}

myAdd(30, 4)


//Question 2 ある数字の階乗を計算するプログラムを書いてください。ロジックを説明するコメントを追加してください。
//factorial is a math operation that involves multiplying a number by every whole number less than it, down to 1.
//This creates a loop function
//the factorial of this number is denoted as (n)
function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) { //(let i = 1) this code lets us know that the loop starts from 1 and the loop will keep running as long as (i) is less than (n)
        res *= i;
    }
    return res;
}
console.log(fact(5));
//

//5.条件文
//Question 1 
//ある数字が正か負かをチェックするプログラムを書いてください。
function checkNumber(num) {
    if (num > 0) {
        console.log('The number is positive');
    } else if (num < 0) {
        console.log('The number is negative');
    } else {
        console.log('The number is zero');
    }
}

checkNumber(8);
checkNumber(-10);
checkNumber(0);

//Question 2
//ある数字が3で割り切れる場合は "Fizz"、5で割り切れる場合は
// "Buzz"、両方で割り切れる場合は "FizzBuzz" を出力するプログラムを書いてください

function checkDivision(num) {
    if (num % 3 === 0 && num % 5 === 0); {
        console.log("FizzBuzz");
    } if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

checkDivision(5);
checkDivision(398);
checkDivision(49587);


//ループ
//Question 1 for ループを使って、1から10までの数字を出力してください。

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Question 2 Use a while loop to find the sum of all even numbers between 1 and 50.

let num = 1;
let sum = 0;

while (num <= 50) {
    if (num % 2 === 0) {
        sum += num;
    }
    num++;
}

console.log("The sum of all even numbers between 1 and 50 is:", sum);

//配列
//Question 1 (好きなフルーツの配列を作成し、2番目の要素を出力してください。

let fruits = ["Snake fruit", "Orange", "Guava", "Dragon fruit"];
console.log(fruits[1]);

//Question 2 配列から重複する値を削除するプログラムを書いてください。
// 例えば、[1, 2, 2, 3] は [1, 2, 3] になります。

let duplicates = ["flowers", "bees", "flowers", "earth", "wind", "earth", "bees"]

function removeDuplicates(duplicates) {
    return [...new Set(duplicates)];
}

console.log(removeDuplicates(duplicates));

