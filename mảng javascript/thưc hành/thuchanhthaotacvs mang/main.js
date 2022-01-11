let array = Array(); 
let x = 0;

function add_element_to_array(){
    array[x] = document.getElementById('txtValue').value;
    alert("phân tu: "+ array[x]+"add thêm vao vi tri" + x);
    x++;
    doccument.getElementById('txtValue').value="";
}

function display_array(){
    let a = "<hr>"
    for(let i = 0;i<array.length;i++){
        a += "phan tu: "+ i +"=" + array[i] +"<br>";
    }
    document.getElementById('result').innerHTML =a;
}