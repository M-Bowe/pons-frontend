
// server =
var sever = 'http://173e9abc.ngrok.io';

//
$(function() { //shorthand document.ready function
    $('#sellerREview').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        // store the value of the input with name='age'
        var sendAddress = $("#senderAddress20").val();
        var receiveAddress = $("#receiverAddress20").val();
        // var tempAddress = '685e0b659c3be1c465d5bb37c03e6263efcae25b';
        // sendTokenUnit = 50;

        var senderBalance = sever+'/erc20/balance?address='+sendAddress;
        var receiverBalance = sever+'/erc20/balance?address='+receiveAddress;
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
        // store the value of the input with name='age'
        var sendAddress = $("#senderAddress").val();
        var sendAddressWaller = $("#senderAddressWallet").val();
        var receiveAddress = $("#receiverAddress").val();
        var receiveWallet =  $("#receiverAddressWallet").val();
        var sendTokenUnit = $("#sendToken").val();
        var receiveTokenUnit = $("#receiveToken").val();
        // var receiveTokentUnit = $("#receiveToken20").val();
        // https://www.linkedin.com/in/william-duong-4bb32a12b/

        // sendAddress = '685e0b659c3be1c465d5bb37c03e6263efcae25b';
        // receiveAddress = '';
        // sendTokenUnit = 50;
        // var sever = 'http://6d3a0ea6.ngrok.io';
        var transfer = sever+'/erc20/transfer?amount='+sendTokenUnit+'&address='+sendAddress;
        // var swapApproveSender =sever+'/escrow/erc20/approve?address='+&passcode='passcode'
        // var escrow = sever+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWaller+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';
        var escrow = sever+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWaller+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';


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
        var passphase = $("#buyerPassPhase").val();
        // var sever = 'http://6d3a0ea6.ngrok.io';
        var transfer = sever+'/escrow/erc20/approve?passcode='+passphase+'&address='+buyer;
        // var swapApproveSender =sever+'/escrow/erc20/approve?address='+&passcode='passcode'
        // var escrow = sever+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWaller+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';

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
        var passphase = $("#sellerPassPhase").val();
        // var sever = 'http://6d3a0ea6.ngrok.io';
        var transfer = sever+'/escrow/erc721/approve?passcode='+passphase+'&address='+seller;
        // var swapApproveSender =sever+'/escrow/erc20/approve?address='+&passcode='passcode'
        // var escrow = sever+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWaller+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';
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
    $("#exchangeForm20").toggle();
    // if ($("#exchangeForm721").is(":visible")) {
    //     //     $("#exchangeForm721").toggle()
    //     // }
});

$("#reviewForm").click(function(){
    $("#sellerREview").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});

$("#sellerTranferEscrow").click(function(){
    $("#sellerTransferFund").toggle();
});

$("#buyerTranferEscrow").click(function(){
    $("#buyerTransferFund").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});