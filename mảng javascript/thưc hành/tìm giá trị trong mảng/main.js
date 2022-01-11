let x = parseFloat(prompt("Nhập giá trị: "));
let numbers = [-3,5,2,1,10,8,9]
for(let i=0;i<numbers.length;i++){
    if(x ==numbers[i]){
        alert("gia tri: "+numbers[i] +"tìm thấy tại " + i ) 
    }
}