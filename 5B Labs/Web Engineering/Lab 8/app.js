


let arr1=[2,4,8,10,12]
let arr2=[12,10,8,6,4]

let SumA=(arr)=>{
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum
}
let productA=(arr)=>{
    let mul=1
    for(let i=0;i<arr.length;i++){
        mul*=arr[i]
    }
    return mul
}

console.log("Array 1:")
console.log(arr1)
console.log("Sum Of Array 1: " + SumA(arr1)+"\n")

console.log("Array 2:")
console.log(arr2)
console.log("Product Of Array 2: "+productA(arr2)+"\n")

let res=SumA(arr1)/productA(arr2)

const proms= new Promise((resolve, reject) => {
        if (!(Math.floor(res)==Math.ceil(res))) {
            resolve ('Promise is resolved successfully. The result is ' +res)
        } else {
            reject ('Promise Is Rejected')
        }
});

proms.then((result) => {
    console.log(result)
})
.catch(function(error){
    console.log(error)
});


