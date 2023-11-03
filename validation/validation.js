function checkEmptyValue(value, idSpan) {
    if (value == "") {
        document.getElementById(idSpan).innerHTML = "Please fill the blank";
        return false;
    }else {
        document.getElementById(idSpan).innerHTML = "";
        return true;
    }
}

function checkEmailValue(value, idSpan) {
    var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    regexEmail.test(value); // true , dữ liệu không thoả ==> false
    if (regexEmail.test(value)) {
        // dữ liệu thoả regex
        document.getElementById(idSpan).innerHTML = '';
        return true;
    } else {
        document.getElementById(idSpan).innerHTML =
        'Wrong email format';
        return false;
    }
}

function checkMinMaxValue(value, idSpan, min, max) {
    // kiểm tra độ dài ký tự
    if (value.length >= min && value.length <= max) {
      // điều kiện đúng dữ liệu thoả yêu cầu
      document.getElementById(idSpan).innerHTML = '';
      return true;
    } else {
      // điều kiện sai
      document.getElementById(
        idSpan
      ).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
      return false;
    }
}