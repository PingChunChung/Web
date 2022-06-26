function showMonths(){
    var txt = '<option value ="0">請選擇';
    for ( let i = 1 ; i <= 12 ; i++){
        txt += '<option value ="' + i +'">' + i;
    }
    document.getElementById("birthday_m").innerHTML = txt;
    showDates();
}

function showDates(){
    var year = document.getElementById("birthday_y").value;
    var month = document.getElementById("birthday_m").value;
    var txt = '<option value ="0">請選擇';
    var mDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        mDay[1] = 29;
    }
    for ( let i = 1 ; i <= mDay[month-1] ; i++){
        txt += '<option value ="' + i + '">' + i;
    }
    
    document.getElementById("birthday_d").innerHTML = txt;
}