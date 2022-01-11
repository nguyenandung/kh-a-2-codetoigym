let array = Array();
let x = 0;
function add_element_to_array(){
    array[x]= document.getElementById("txtValue").value;
    alert("Phần tử: "+ array[x] + "sau khi thêm vao" + x);
    x++;
    document.getElementById("txtValue").value = "";
}
// function display_array() {
//     let e = "<hr/>";
//     for (let i = 0; i < array.length; i++) {
//         e += "Element " + i + " = " + array[i] + "<br/>";
//     }
//     document.getElementById("result").innerHTML = e;
// }
function display_array(){
    let e = "<hr>";
    for(let i=0;i<array.length;i++){
        e += "Phần tử 1: "+ i +"=" +array[i] + "<br>";
    }
    document.getElementById('result').innerHTML = e;
}