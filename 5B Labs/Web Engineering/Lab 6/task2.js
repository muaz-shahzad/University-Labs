// 2.	Write a javascript function that takes an array of 
// numbers and a target number. The function should find two
//  different numbers in the array that, when added together,
//  give the target number. For example: answer([1,2,3], 4) 
//  should return [1,3].
// function addedarray(target)
// {
//     var array=[1,2,3,4,5];
//     var result=[];
//     var store;
// for(var i=0;i<=array.length;i++)
// {
//     console.log(array[i]); 
//     if(array[i]<=target)
//     {   store=store+array[i];
//         result.push(array[i]);
//         console.log(result);
//         console.log(store);
//     }
// }
// }
var num1=document.getElementById('input');
var num2=document.getElementById('input2');
var result=document.getElementById('input3');
function addedarray(){
const numbers = [2,4,6,8,10,12]; 
result.value=" ";
if(num1.value.length>0 && num2.value.length>0)
{
    const sum = parseInt (num1.value) + parseInt ( num2.value) ;    
    for (var i= 0; i < numbers.length; i++) {

        if (numbers[i]===sum) {
            result.value= "Sum Of 2 Input Match Target => " + numbers[i] + " Index At " + i;
        break;
        }
        else{
            result.value="Sum Of 2 Input Not Match Target In An Array"
        }
        }
} 
num1.value=" ";
num2.value=" ";
        }
       