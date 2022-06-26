        //檢查長度
        function IDNumLength(IDNumber) {
            if (IDNumber.length != 10) {
                return false;
            }
            return true;
        }


        //檢查第一個字是不是英文
        function IDNumFirstChar(IDNumber) {
            if (IDNumber[0] < "A" || IDNumber[0] > "z") {
                return false;
            }
            else {
                return true;
            }
        }

        //檢查第一個數字是不是1或2
        function IDNumGender(IDNumber) {
            if (IDNumber[1] == (1 || 2)) {
                return true;
            }
            return false;
        }


        //確認第二個數字以後是不是數字
        function IDNumOtherNums(num) {
            str = num.substring(3, 10);
            if (isNaN(str)) {
                return false;
            }
            else {
                return true;
            }
        }

        var eng = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
        var sum = 0;

        function checkID() {
            IDNumber = document.getElementById("ID").value;
            if (IDNumLength(IDNumber) && IDNumGender(IDNumber) && IDNumOtherNums(IDNumber) && IDNumFirstChar(IDNumber)) {
                IDNumber = IDNumber.toUpperCase();
                firstChar = eng.indexOf(IDNumber[0]) + 10;
                sum = Math.floor(firstChar / 10) + (firstChar % 10) * 9;

                for (let i = 1; i <= 8; i++) {
                    sum += IDNumber[i] * (9 - i);
                }

                var checkCode = (sum % 10 == 0) ? 0 : (10 - (sum % 10));

                if (checkCode != IDNumber[9]) {
                    document.getElementById("IDWrong").innerHTML = "<span style = ' color: red;'>身份證字號有誤<span>";
                }
                else{
                    document.getElementById("IDWrong").innerHTML = ""
                }


            }
            else{
                document.getElementById("IDWrong").innerHTML = "<span style = ' color: red;'>身份證字號格式有誤<span>";
            }
        }