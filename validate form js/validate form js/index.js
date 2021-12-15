function validateEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function save() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = '';

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value
    }
// Kiểm tra dữ liệu người dùng nhập tên
    if(fullname == 0) {
        document.getElementById('error-fullname').innerHTML = "Vui lòng nhập họ và tên"
    } else if (fullname.length <= 2) {
        fullname = '';
        document.getElementById('error-fullname').innerHTML = "Họ và tên quá ngắn"
    } else if (fullname.length >= 50) {
        fullname = '';
        document.getElementById('error-fullname').innerHTML = "Họ và tên quá dài"
    } else {error-fullnam
        document.getElementById('e').innerHTML = ''
    }
// Kiểm tra dữ liệu người dùng nhập số điện thoại
    if(phone == 0) {
        document.getElementById('error-phone').innerHTML = "Vui lòng nhập số điện thoại"
    } else if(phone.length > 11) {
        phone = '';
        document.getElementById('error-phone').innerHTML = "Số điệnt thoại không đúng"
    } else {
        document.getElementById('error-phone').innerHTML = ''
    }
// Kiểm tra người dùng nhập địa chỉ
    if(address == 0) {
        document.getElementById('error-address').innerHTML = "Vui lòng nhập địa chỉ"
    } else {
        document.getElementById('error-address').innerHTML = ''
    }
// Kiểm tra người dùng nhập định dạng gmail
    if(email == 0) {
        document.getElementById('error-email').innerHTML = "Vui lòng nhập Email"
    } else if (!validateEmail(email)) {
        email = '';
        document.getElementById('error-email').innerHTML = "Sai định dạng gmail "
    } else if (validateEmail(email)) {
        document.getElementById('error-email').innerHTML = '';
    }

    if(gender == 0) {
        gender = ''
        document.getElementById('error-gender').innerHTML = " Vui lòng chọn giới tính"
    } else {
        document.getElementById('error-gender').innerHTML = '';
    }

    if(fullname && phone && address && email && gender) {   
        // let students = [];
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

        students.push({
            fullname: fullname,
            email: email,
            address: address,
            gender: gender,
        });
        localStorage.setItem('students', JSON.stringify(students))
        renderStudent()
    }
}

function renderStudent() {
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

    // if (students.length === 0) {
    //     return false
    // }

    let contentstudent = 
        `<tr>
            <td>STT</td>
            <td>Họ và Tên</td>
            <td>Email</td>
            <td>Địa chỉ</td>
            <td>Giới Tính</td>
            <td>Hành Động</td>
        </tr>`

        students.forEach((students, index) => {
            let id = index;
            index++
            contentstudent += 
            `<tr>
            <td>${index}</td>
            <td>${students.fullname}</td>
            <td>${students.email}</td>
            <td>${students.address}</td>
            <td>${students.gender}</td>
            <td>
                <a href= "#">Edit</a> hoặc <a href= "#" onclick= "deleteStudent(id)">Delete</a>
            </td>
        </tr>`
        })

        document.getElementById('detail').innerHTML = contentstudent;

}
function deleteStudent(id) {    
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];
    students.splice(id, 1);
    localStorage.setItem('students', JSON.stringify(students));
    renderStudent()
}