var arrIdInput = [
    'tknv',
    'name',
    'email',
    'password',
    'datepicker',
    'luongCB',
    'chucvu',
    'gioLam',
];
var arrStudent = [];
function getValueUser() {
    var student  = new Student();
    for (var i = 0; i < arrIdInput.length; i++) {
        var userInput = document.getElementById(arrIdInput[i]).value;
        console.log(userInput);
        student[arrIdInput[i]] = userInput;
    }

    arrStudent.push(student);
    saveLocalStorage("arrStudent", arrStudent);
    console.log(arrStudent);
    renderDisplay();
    document.getElementById('formQLSV').reset(); 
};

function renderDisplay (arr) {
    if (!arr) {
        arr = arrStudent;
    }
    var content = '';

    for (var i = 0; i < arr.length; i++) {
        var student = new Student();
        // console.log(student);
        var valueStudent = arr[i];
        // console.log(valueStudent);
        Object.assign(student, valueStudent);

        content += `<tr>
            <td>${student.tknv}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.datepicker}</td>
            <td>${student.chucvu}</td>
            <td>${student.tinhTongLuong()}</td>
            <td>${student.xepLoai()}</td>
            <td>
            <button onclick="deleteUser('${valueStudent.tknv}')" class="btn btn-danger">Delete</button>
            <button class="btn btn-dark">Edit</button>
            </td>
        </tr>`;
    }
    document.getElementById('tableDanhSach').innerHTML = content;
};

document.getElementById('btnThemNV').onclick = getValueUser;

function deleteUser(maSV) {
    console.log(maSV);
    var index = -1;
    for (var i = 0; i < arrStudent.length; i++) {
        var student  = arrStudent[i];
        if (student.tknv == maSV) {
            console.log(i);
            index = i;
        }
    }

    if (index != -1) {
        arrStudent.splice(index, 1);
        renderDisplay();
        console.log(arrStudent);
    }
 };

function saveLocalStorage(key, value) {
    var valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
} 

function getLocalStorage(key) {
    var arrLocal = JSON.parse(localStorage.getItem(key));
    console.log(arrLocal);

    if(arrLocal) {
        arrStudent = arrLocal;
        renderDisplay();
    }
}

getLocalStorage('arrStudent');

