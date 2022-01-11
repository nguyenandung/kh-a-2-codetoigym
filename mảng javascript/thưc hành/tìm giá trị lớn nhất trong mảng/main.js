let num = [2,4,100,700,800,0,21]
let max = num[0];
index = 0;

for(let i = 0; i < num.length; i++){
    if(num[i]>max){
        max = num[i];
        index = i;
    }
}
console.log("giá trị: "+max +" ở vị trí: "+ index)