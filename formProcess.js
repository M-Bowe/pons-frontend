
$(function() { //shorthand document.ready function
    $('#exchangeForm20').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        // store the value of the input with name='age'
        var sendAddress = $("#senderAddress20").val();
        var receiveAddress = $("#receiverAddress20").val();
        var sendTokenUnit = $("#sendToken20").val();
        var receiveTokentUnit = $("#receiveToken20").val();
        var url = 'https://e9cdb265.nrok.io/ERC20/balance?address=';
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