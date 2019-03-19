//
// $(function() { //shorthand document.ready function
//     $('#exchangeForm20').on('submit', function(e) { //use on if jQuery 1.7+
//         e.preventDefault();  //prevent form from submitting
//         // store the value of the input with name='age'
//         var sendAddress = $("#senderAddress20").val();
//         var receiveAddress = $("#receiverAddress20").val();
//         var sendTokenUnit = $("#sendToken20").val();
//         var receiveTokentUnit = $("#receiveToken20").val();
//         // https://www.linkedin.com/in/william-duong-4bb32a12b/
//         var tempAddress = '685e0b659c3be1c465d5bb37c03e6263efcae25b';
//         sendTokenUnit = 50;
//         var server = 'http://ff8de78d.ngrok.io';
//         var url = server+'/erc20/transfer?amount='+sendTokenUnit+'&?address='+tempAddress;
//         $.getJSON(url,
//             function(text){
//                 if(text){
//                     // $('body').html(text.content);
//                     console.log(text);
//
//                 } else {
//                     // $('body').html('Error');
//                     console.log("error");
//                 }
//             }
//         );
//     });
// });

// swap function
$(function() { //shorthand document.ready function
    $('#exchangeForm20').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
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
        var server = 'http://6d3a0ea6.ngrok.io';
        var transfer = server+'/erc20/transfer?amount='+sendTokenUnit+'&address='+sendAddress;
        // var swapApproveSender =server+'/escrow/erc20/approve?address='+&passcode='passcode'
        var escrow = server+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWallet+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';


        console.log(transfer);

        // $.getJSON(transfer,
        //     function(text){
        //         if(text){
        //             // $('body').html(text.content);
        //             console.log(text);
        //
        //
        //         } else {
        //             // $('body').html('Error');
        //             console.log("error");
        //         }
        //     }
        // );
        $.getJSON(escrow,
            function(text2){
                if(text2){
                    // $('body').html(text.content);
                    console.log(text2);


                } else {
                    // $('body').html('Error');
                    console.log("error");
                }
            }
        );


    });
});


//
// var createEscrow = function() {
//     /escrow/create?erc20from=B&erc20to=A&erc20Amount=200&erc721from=2&erc721to=1&erc721Id=0&timelimit=10&passcode=passcode
// };

$('#erc20Form').click(function(){
    $("#exchangeForm20").toggle();
    // if ($("#exchangeForm721").is(":visible")) {
    //     //     $("#exchangeForm721").toggle()
    //     // }
});

$("#reviewForm").click(function(){
    $("#sellerReview").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});

$("#sellerTransferEscrow").click(function(){
    $("#sellerTransferFund").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});

$("#buyerTransferEscrow").click(function(){
    $("#buyerTransferFund").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});

function getBalance() {
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
                console.log(`Error getting balance: ${this.responseText}`);
            }
        };
        xhttp.open("GET", `https://12e5f087.ngrok.io/erc20/balance?address=${address}`, true);
        xhttp.send();
    }
    return false;
}

function getHistory() {
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
            console.log(`Getting transactions on most recent block ${latestBlock}...`);
            var history = JSON.parse(this.responseText).data;

            console.log(`List of transactions on latest block ${latestBlock}: ${JSON.stringify(history)}`);
            // Loop through each transaction and display the Hash, To, From, Value
            document.getElementById("historyList").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Transaction list: ${JSON.stringify(history, null, 2)}</div>`);
          }
          else if (this.status !== 200) {
            console.log(`Error getting transactions: ${this.responseText}`);
          }
        };
        getList.open("GET", `https://a1afccc0.ngrok.io/blockchain/getBlock?blockNum=${latestBlock}`, true);
        getList.send();
      }
      else if (this.status !== 200) {
        console.log(`Error getting transactions: ${this.responseText}`);
      }
    };
    getBlock.open("GET", `https://a1afccc0.ngrok.io/blockchain/getLatestBlock`, true);
    getBlock.send();

    return false;
}
