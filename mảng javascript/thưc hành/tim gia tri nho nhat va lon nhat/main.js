// Xây dựng hàm nhận giá trị nhỏ nhất vào mảng . hàm làm nhiệm vụ tìm giá trị nhỏ nhất cyar mảng nhận vào và trả về
// giá trị nhỏ nhất

function findMin(arr){
    let min = arr[0];
    for(let i = 1 ; i<arr.length ; ++i){
        if(arr[i]< min){
            min = arr[i];
        }
    }
    return min;
}

// sử dụng hàm findmin vừa cài đặt 
let nums =[];
for(let i=0;i<100;++i){
    nums[i] = Math.floor(Math.random() * 101);

}
let minValue = findMin(nums);
dispArr(nums);
document.write("<br/>")
document.write("the minimum value is: "+ minValue);
