//program to print only the even numbers of the array.
function even(arr){
    out =[]
    for (let i=0 ; i<arr.length;i++){
        if(arr[i] % 2 == 0){
            out.push(arr[i])
        }
    } 
    return out
}
even([1,2,3,4,5,6,78,8])

//maximum consecutive 1's in an array of 0's and 1's
function findMaxConsecutiveOnes (nums){
    let largest = 0;
    let currentCount = 0;
    for(let i=0;i<nums.length;i++){
      nums[i]===0?currentCount=0:currentCount++;
        if (currentCount > largest) largest = currentCount;
    }
    return largest;
}
findMaxConsecutiveOnes([1,0,0,0,0,1,0,0,0,1]);
findMaxConsecutiveOnes([0,0,1,1,0,0,0,1,0,0,1,1,1,0]);

//find the repeated number.
function printRepeated(num){
    var out = [];
    for(i=0;i<num.length;i++){
        for (j=i+1;j<num.length;j++){
            if(num[i] == num[j]){
                out.push(num[j])
            }
        }
    }
    return out;
}
printRepeated([0,1,2,3,4,5,6,7,7,8,9,10,2,3,11,12,13,14,11,13,15,16,16,16,17,18,20])

//objected sort by id’s
var obj = [
    { id : 4, name : 'abc'},
       { id : 10,name : 'ab2'},
       { id : 5, name: 'abc3'},
       { id : 6, name: 'abc5'}
       
]  
obj.sort((a, b) => a.id - b.id);
console.log(obj);