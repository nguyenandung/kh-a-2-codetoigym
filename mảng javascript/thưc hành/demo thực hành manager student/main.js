let students = [
    ["Long Vu", 20, "longvu@gmaail.com"], // 0
    ["Duy Ha", 21, "ha@gmail.com"], // 1
    ["Ngoc Linh", 22, "linh@gmail.com"], // 2
    ["Ky Duyen", 30, "duyen@gmail.com"] // 3
];

function showList() {
    let html = "";
    for (let i = 0; i < students.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1
        html += "</td>";
        for (let j = 0; j < students[i].length; j++) {
            html += "<td>";
            html += students[i][j]
            html += "</td>"
        }
        html += "<td>";
        html += '<button onclick="deleteStudent(' + i + ')">Delete</button>';
        html += "</td>";
        html += "</tr>";

    }
    document.getElementById('list-student').innerHTML = html
}

showList();

function deleteStudent(index) {
    if (confirm('Are you sure?')) {
        students.splice(index, 1);
        showList();
    }
}