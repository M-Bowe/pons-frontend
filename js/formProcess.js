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
        var sendAddress = $("#senderAddress20").val();
        var receiveAddress = $("#receiverAddress20").val();
        var sendTokenUnit = $("#sendToken20").val();
        // var receiveTokentUnit = $("#receiveToken20").val();
        // https://www.linkedin.com/in/william-duong-4bb32a12b/

        sendAddress = '685e0b659c3be1c465d5bb37c03e6263efcae25b';
        receiveAddress = '';
        sendTokenUnit = 50;
        var sever = 'http://27caaf3f.ngrok.io';
        var transfer = sever+'/erc20/transfer?amount='+sendTokenUnit+'&address='+sendAddress;
        // var swapApproveSender =sever+'/escrow/erc20/approve?address='+&passcode='passcode'
        var escrow = sever+'/escrow/create?erc20from=B&erc20to=A&erc20Amount=200&erc721from=2&erc721to=1&erc721Id=0&timelimit=10&passcode=passcode';




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
    if ($("#exchangeForm721").is(":visible")) {
        $("#exchangeForm721").toggle()
    }
});

$("#erc721Form").click(function(){
    $("#exchangeForm721").toggle();
    if ($("#exchangeForm20").is(":visible")) {
        $("#exchangeForm20").toggle()
    }
});