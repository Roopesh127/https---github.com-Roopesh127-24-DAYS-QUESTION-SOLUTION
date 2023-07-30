// question :- To check the string or number is palindrome or not?

// make a function
// create new variable to store it
//reverse string and store it in new variable
// if old veriable is equal to new then its palindrome if not matching then its not a palindrome

// const arr ="naman";
// function palindrome(arr){
//     let new1 ="";
//     for(let i =arr.length-1;i>=0;i--){
//        new1 += arr[i]
      
//     }
//     // console.log(new1);
//     if(arr === new1){
//         console.log("palindrome");
//     }
//     else{
//         console.log("Not a palindrome");
//     }

// }
// palindrome(arr);



const arr = "naman";
function palindrome(arr){
   let new1 = arr.split(' ').reverse().join(' ');
   console.log(new1)
   if(arr == new1){
    // console.log("palindrome")
   }
    else{
        console.log("not a palindrome")
    }
   }


palindrome(arr);

fjlw