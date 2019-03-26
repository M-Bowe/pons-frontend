

var server = 'http://059111a9.ngrok.io';


$(function() { //shorthand document.ready function
    $('#sellerReview').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        // store the value of the input with name='age'
        var sendAddress = $("#senderAddress20").val();
        var receiveAddress = $("#receiverAddress20").val();
        // var tempAddress = '685e0b659c3be1c465d5bb37c03e6263efcae25b';
        // sendTokenUnit = 50;

        var senderBalance = server+'/erc20/balance?address='+sendAddress;
        var receiverBalance = server+'/erc20/balance?address='+receiveAddress;
        $.getJSON(url,
            function(text){
                if(text){
                    // $('body').html(text.content);
                    console.log(text);

                } else {
                    // $('body').html('Error');
                    console.log("error");
                }
            }
        );
    });
});

// swap function
$(function() { //shorthand document.ready function
    $('#exchangeForm20').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        $("#loadIcon").toggle();
        // store the value of the input with name='age'
        var sendAddress = $("#senderAddress").val();
        var sendAddressWallet = $("#senderAddressWallet").val();
        var receiveAddress = $("#receiverAddress").val();
        var receiveWallet =  $("#receiverAddressWallet").val();
        var sendTokenUnit = $("#sendToken").val();
        var receiveTokenUnit = $("#receiveToken").val();
        // var receiveTokentUnit = $("#receiveToken20").val();
        // https://www.linkedin.com/in/william-duong-4bb32a12b/

        // sendAddress = '685e0b659c3be1c465d5bb37c03e6263efcae25b';
        // receiveAddress = '';
        // sendTokenUnit = 50;
        // var server = 'http://6d3a0ea6.ngrok.io';
        // var transfer = server+'/erc20/transfer?amount='+sendTokenUnit+'&address='+sendAddress;
        // var swapApproveSender =server+'/escrow/erc20/approve?address='+&passcode='passcode'
        // var escrow = server+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWallet+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';
        var escrow = server+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWallet+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';


        console.log(escrow);
        $.getJSON(escrow,
            function(text2){
                if(text2){
                    // $('body').html(text.content);
                    console.log(text2);
                    var data = text2.data;
                    var escrow20 = data.erc20EscrowAddress;
                    var escrow721 = data.erc721EscrowAddress;
                    console.log("escoew 20 : "+escrow20);
                    console.log("escoew 721 : "+escrow721);
                    $("#loadIcon").toggle();
                    document.getElementById("escrow").innerHTML = "";

                    document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">contract address escrow 20:  ${escrow20}</div>`);
                    document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">contract address escroew 721: ${escrow721}</div>`);


                } else {
                    // $('body').html('Error');
                    console.log("error");
                }
            }
        );


    });
});

$(function() { //shorthand document.ready function
    $('#buyerTransferFund').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        // store the value of the input with name='age'
        var buyer = $("#buyerTransferERC20").val();
        var passphrase = $("#buyerPassphrase").val();
        // var server = 'http://6d3a0ea6.ngrok.io';
        var transfer = server+'/escrow/erc20/approve?passcode='+passphrase+'&address='+buyer;
        // var swapApproveSender =server+'/escrow/erc20/approve?address='+&passcode='passcode'
        // var escrow = server+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWallet+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';

        console.log("buyer start to lesase fund ");
        console.log(transfer);
        $.getJSON(transfer,
            function(text3){
                if(text3){
                    // $('body').html(text.content);
                    console.log(text3);
                    // document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">contract address ${text2}</div>`);


                } else {
                    // $('body').html('Error');
                    console.log("error");
                }
            }
        );


    });
});


$(function() { //shorthand document.ready function
    $('#sellerTransferFund').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        // store the value of the input with name='age'
        var seller = $("#sellerTransferERC721").val();
        var passphrase = $("#sellerPassphrase").val();
        // var server = 'http://6d3a0ea6.ngrok.io';
        var transfer = server+'/escrow/erc721/approve?passcode='+passphrase+'&address='+seller;
        // var swapApproveSender =server+'/escrow/erc20/approve?address='+&passcode='passcode'
        // var escrow = server+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWallet+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';
        console.log("seller start to lesase fund ");
        $.getJSON(transfer,
            function(text4){
                if(text2){
                    // $('body').html(text.content);
                    console.log(text4);
                    // document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">contract address ${text2}</div>`);


                } else {
                    // $('body').html('Error');
                    console.log("error");
                }
            }
        );


    });
});



$('#erc20Form').click(function(){

    if ($("#sellerReview").is(":visible")) {
            $("#sellerReview").toggle()
    }
    if ($("#sellerTransferFund").is(":visible")) {
        $("#sellerTransferFund").toggle()
    }
    if ($("#buyerTransferFund").is(":visible")) {
        $("#buyerTransferFund").toggle()
    }

    $("#exchangeForm20").toggle();
});

$("#reviewForm").click(function(){
    if ($("#exchangeForm20").is(":visible")) {
        $("#exchangeForm20").toggle()
    }
    if ($("#sellerTransferFund").is(":visible")) {
        $("#sellerTransferFund").toggle()
    }
    if ($("#buyerTransferFund").is(":visible")) {
        $("#buyerTransferFund").toggle()
    }

    $("#sellerReview").toggle();

});

$("#sellerTransferEscrow").click(function(){
    if ($("#exchangeForm20").is(":visible")) {
        $("#exchangeForm20").toggle()
    }
    if ($("#sellerReview").is(":visible")) {
        $("#sellerReview").toggle()
    }
    if ($("#buyerTransferFund").is(":visible")) {
        $("#buyerTransferFund").toggle()
    }


    $("#sellerTransferFund").toggle();

});

$("#buyerTransferEscrow").click(function(){
    if ($("#exchangeForm20").is(":visible")) {
        $("#exchangeForm20").toggle()
    }
    if ($("#sellerReview").is(":visible")) {
        $("#sellerReview").toggle()
    }
    if ($("#sellerTransferFund").is(":visible")) {
        $("#sellerTransferFund").toggle()
    }

    $("#buyerTransferFund").toggle();

});

function getBalance() {
    document.getElementById("balance").innerHTML = "";
    var address = document.getElementById("inputBalance").value;
    if (address !== "") {
        console.log(`Getting balance for ${address}...`);
        var xhttp = new XMLHttpRequest();
        xhttp.overrideMimeType("application/json");
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsonResponse = JSON.parse(this.responseText);
                let balance = jsonResponse.data;
                document.getElementById("balance").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Balance of wallet ${address}: ${balance}</div>`);
            }
            else if (this.status !== 200) {
                console.log(`Error getting balance, status ${this.status} ${this.responseText}`);
            }
        };
        xhttp.open("GET", `${server}/erc20/balance?address=${address}`, true);
        xhttp.send();
    }
    return false;
}

function getHistory() {
    document.getElementById("historyList").innerHTML = "";
    console.log(`Getting history of transactions...`);

    // Get the latest block number, then show its list of transactions
    var getBlock = new XMLHttpRequest();
    getBlock.overrideMimeType("application/json");
    getBlock.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonResponse = JSON.parse(this.responseText);
        let latestBlock = jsonResponse.data;

        var getList = new XMLHttpRequest();
        getList.overrideMimeType("application/json");
        getList.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(`Getting transactions on most recent block ${latestBlock}`);
            var history = JSON.parse(this.responseText).data;

            // Loop through each transaction and display the Hash, To, From, Value
            history.forEach(function(transaction) {
              let fromAddress = JSON.stringify(transaction.from);
              let toAddress = JSON.stringify(transaction.to);
              let value = JSON.stringify(transaction.value);
              document.getElementById("historyList").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Latest transaction:<br>From: ${fromAddress}<br>To: ${toAddress}<br>Amount: ${value}</div>`);
            });
          }
          else if (this.status !== 200) {
            console.log(`Error getting transactions: ${this.responseText}`);
          }
        };
        getList.open("GET", `${server}/blockchain/getBlock?blockNum=${latestBlock}`, true);
        getList.send();
      }
      else if (this.status !== 200) {
        console.log(`Error getting transactions: ${this.responseText}`);
      }
    };
    getBlock.open("GET", `${server}/blockchain/getLatestBlock`, true);
    getBlock.send();

    return false;
}
