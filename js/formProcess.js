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
//         var sever = 'http://ff8de78d.ngrok.io';
//         var url = sever+'/erc20/transfer?amount='+sendTokenUnit+'&?address='+tempAddress;
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
        var sever = 'http://6d3a0ea6.ngrok.io';
        var transfer = sever+'/erc20/transfer?amount='+sendTokenUnit+'&address='+sendAddress;
        // var swapApproveSender =sever+'/escrow/erc20/approve?address='+&passcode='passcode'
        var escrow = sever+'/escrow/create?erc20from='+sendAddress+'&erc20to='+receiveWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+sendAddressWaller+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode=passcode';


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
    $("#sellerREview").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});

$("#sellerTranferEscrow").click(function(){
    $("#sellerTransferFund").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});

$("#buyerTranferEscrow").click(function(){
    $("#buyerTransferFund").toggle();
    // if ($("#exchangeForm20").is(":visible")) {
    //     $("#exchangeForm20").toggle()
    // }
});