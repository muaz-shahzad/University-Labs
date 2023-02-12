let Check=(val)=>{
    if(!isNaN(val)){
        if(!isFinite(val)){
            console.log("Infinite Number");
        }
        else{
            console.log("Finite Number");
        }
    }
    else{
        console.log("Not A Number");
    }
}
console.log("Entering \"Infinity\"");
Check(Infinity)
console.log("Entering \"10\"");
Check(10)

