var nums = [];
for(let i=0;i<100;i++){
    nums[i] = Math.floor(Math.random()*101);
}

function  findMin(nums){
    let min = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<min){
            min=nums[i];
        }
    }
    return min;
}
function findMax(nums){
    let max = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
        }
    }
    return max;
}

for(let i of nums){
    document.write(i);
}

document.write('<br>');
document.write(`Giá trị nhỏ nhất ${findMin(nums)}`)
document.write('<br>')
document.write(`Gia tri lon nha ${findMax(nums)}`)