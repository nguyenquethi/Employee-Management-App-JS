function Student () {
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = '';
    this.chucvu = '';
    this.gioLam = '';
    this.tinhTongLuong = function(){
        var tongLuong = this.luongCB*1 * this.gioLam*1;
        return tongLuong;
    };
    this.xepLoai = function () {
        if (this.gioLam >= 192){
            return "Excellent";
        }else if (this.gioLam >= 176){
            return 'Good';
        }else if (this.gioLam >= 160){
            return 'Fair';
        }else{
            return 'Poor';
        }
    };
}