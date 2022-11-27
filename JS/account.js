

document.getElementById("calButton").addEventListener("click", function(){
     //console.log("I got Deposit Button");
    
    let deposit = parseFloat(document.getElementById("dMoney").value);
    let withdarw = parseFloat(document.getElementById("wMoney").value);

    let curBalance = parseFloat(document.getElementById("curBlance").innerText);
    let newDepo = parseFloat(document.getElementById("tDepo").innerText);
    let totalWithdraw = parseFloat(document.getElementById("tWithdraw").innerText);

    if(deposit > 0 && document.getElementById("wMoney").innerText == ""){
        document.getElementById("curBlance").innerText = curBalance + deposit;
        document.getElementById("tDepo").innerText = deposit + newDepo;
                    }
    else if(withdarw => 0 && document.getElementById("dMoney").innerText == "" ){
    document.getElementById("curBlance").innerText = curBalance - withdarw;
    document.getElementById("tWithdraw").innerText = totalWithdraw + withdarw;
                        }
    else if (deposit > 0 && withdarw > 0){
        
        document.getElementById("tDepo").innerText = deposit + newDepo;
        // document.getElementById("curBlance").innerText = curBalance - withdarw;
        document.getElementById("tWithdraw").innerText = totalWithdraw + withdarw;
        document.getElementById("curBlance").innerText = curBalance + deposit - withdarw;
    }


    document.getElementById("dMoney").value = "";
    document.getElementById("wMoney").value = "";
});


