function bai4(){
    var soN = parseInt(document.getElementById('soNT').value);
    var text = "";
    var i;
    var j;
    if(soN <= 1)
    {
        text += "Khong co so nguyen to nao tu 1 den n"
    }
    else{
        for(i =2; i <= soN; i++)
        {
            if(i == 2)
                {
                    text += i + " ";
                }
                // i = 3 -->
            else{
                var dem =0;
                for(j = 1; j<=i; j++)
                {
                    if(i%j == 0)
                    {
                        dem++;
                    }
                }
                if(dem==2)
                {
                    text += i + " ";
                }
            }
        }
    }
    document.getElementById('ketquaB4').value = text;
}
// 10/ 2 3 4 5 6 7 8 9 10
function bai5(){
    var x = parseInt(document.getElementById('soBai5').value);
    var tong =0;
    for(var i=0; i<=x; i++)
    {
        tong += i;
    }
    document.getElementById('ketquaB5').value = tong;
}
function bai6(){
    var x = parseInt(document.getElementById('soBai6').value);
    var tong =0;
    for(var i=0; i<=x; i++)
    {
        tong += i*i;
    }
    document.getElementById('ketquaB6').value = tong;
}
function bai7(){
    var x = parseInt(document.getElementById('soBai7').value);
    var tong =0;
    for(var i=0; i<=x; i++)
    {
        if(i%2 != 0)
        {
            tong += i;
        }
    }
    document.getElementById('ketquaB7').value = tong;
}
function bai8(){
    var x = parseInt(document.getElementById('soBai8').value);
    var check = 1;
    while (x > 0) {
        var temp = x % 10;
        if (temp % 2 == 0)
        {
            check = 0;
            break;
        }
        else{
            x /= 10;
        }
    }
    var text = "";
    if(check == 0)
    {
        text += "No";
    }
    else{
        text += "Yes";
    }
    document.getElementById('ketquaB8').value = text;
}
function bai9(){
    var x = (document.getElementById('soBai9').value);
    var text1 = x.split("");
    var text2 = text1.reverse();
    var text3 = text2.join("");
    // document.getElementById('ketquaB9').value =text3;
    var check = 1;
    if(x == text3)
    {
        check = 1;
    }
    else{
        check = 0;
    }
    if(check == 1){
        document.getElementById('ketquaB9').value = "Doi xung";
    }
    else{
        document.getElementById('ketquaB9').value = "khong doi xung";
    }
   
}
function bai10(){
    for(var i =2; i<=9; i++)
    {
       for(var j =1; j<=10; j++)
       {
        document.getElementById("ketquaB10").value += i + " x " + j + " = " + i * j + '\n';
       }
       document.getElementById("ketquaB10").value += "---------------" + '\n'
    }
}