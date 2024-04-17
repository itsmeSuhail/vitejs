//maxisum subsequence
const arr=[2,-3,5,6,-7];
function max(arr){
let max=0;
for(let i=0;i<arr.length-1;i++){
    let sum=arr[i];
    for(let j=i+1;j<arr.length;j++){
        sum+=arr[j];
      max=  Math.max(max,sum);
    }
}
return max;
}
console.log(max(arr));