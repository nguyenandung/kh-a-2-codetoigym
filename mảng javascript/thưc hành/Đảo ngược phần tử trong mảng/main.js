let x = [-3,5,1,3,2,101]

let first = 0; // duyệt phần tử đầu tiên của mảng

let last = x.length - 1;

while(last > first){
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(x)
