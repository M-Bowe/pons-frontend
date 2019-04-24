// Set server instance here as 'x.ngrok.io';
var server = 'http://4237612e.ngrok.io';

$(function() {
  $('#sellerReview').on('submit', function(e) {
    e.preventDefault();  //prevent form from submitting
    $("#loadIcon").toggle();
    var erc20Escrow = $("#escrowERC20").val();
    var erc721Escrow = $("#escrowERC721").val();
    var getReview = server+'/escrow/viewEscrowParams?erc20EscrowAddress='+erc20Escrow+'&erc721EscrowAddress='+erc721Escrow;
    console.log(getReview);

    $.getJSON(getReview,
      function(text) {
        if(text) {
          console.log(text);
          var data = text.data;
          var erc20from = data.erc20from;
          var erc20to = data.erc20to;
          var erc20Amount = data.erc20Amount;
          var erc721from = data.erc721from;
          var erc721to = data.erc20to;
          var erc721Id = data.erc721Id;
          var transactionERC20 = "ERC-20 Transfer from "+erc20from+" to "+erc20to+" for the amount of "+erc20Amount;
          var transactionERC721 = "ERC-721 Transfer from "+erc721from+" to "+erc721to+ " for the ERC-721 ID "+erc721Id;

          $("#loadIcon").toggle();
          document.getElementById("escrow").innerHTML = "";
          document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Please review the contracts with the other party<br>${transactionERC20}<br>${transactionERC721}</div>`);
        }
        else {
          console.log("error");
        }
      });
    });
});

// swap function
$(function() {
  $('#exchangeForm20').on('submit', function(e) {
    e.preventDefault();  //prevent form from submitting
    $("#loadIcon").toggle();
    var sendAddress = $("#senderAddress").val();
    var sendAddressWallet = $("#senderAddressWallet").val();
    var receiveAddress = $("#receiverAddress").val();
    var receiveWallet =  $("#receiverAddressWallet").val();
    var sendTokenUnit = $("#sendToken").val();
    var receiveTokenUnit = $("#receiveToken").val();
    var passphrase =  $("#passphrase").val();
    var escrow = server+'/escrow/create?erc20from='+sendAddress+'&erc20to='+sendAddressWallet+'&erc20Amount='+sendTokenUnit+'&erc721from='+receiveAddress+'&erc721to='+receiveWallet+'&erc721Id='+receiveTokenUnit+'&timelimit=10&passcode='+passphrase;
    console.log(escrow);

    $.getJSON(escrow,
      function(text2) {
        if(text2) {
          console.log(text2);
          var data = text2.data;
          var escrow20 = data.erc20EscrowAddress;
          var escrow721 = data.erc721EscrowAddress;
          console.log("Escrow ERC-20: " + escrow20);
          console.log("Escrow ERC-721: " + escrow721);
          $("#loadIcon").toggle();
          document.getElementById("escrow").innerHTML = "";
          document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Please send your tokens to your respective escrow addresses<br>ERC-20 Escrow Address:  ${escrow20}<br>ERC-721 Escrow Address: ${escrow721}</div>`);
        }
        else {
          console.log("error");
        }
      }
    );
  });
});

$(function() {
  $('#buyerTransferFund').on('submit', function(e) {
    e.preventDefault();
    var buyer = $("#buyerTransferERC20").val();
    var passphrase = $("#buyerPassphrase").val();
    var transfer = server+'/escrow/erc20/approve?passcode='+passphrase+'&address='+buyer;
    console.log("Buyer started to release funds");
    console.log(transfer);

    $.getJSON(transfer,
      function(text3){
        if(text3) {
          console.log(text3);
          document.getElementById("escrow").innerHTML = "";
          document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Successfully transferred the ERC-20 tokens</div>`);
        }
        else {
          console.log("error");
        }
      }
    );
  });
});

$(function() {
  $('#sellerTransferFund').on('submit', function(e) {
    e.preventDefault();
    var seller = $("#sellerTransferERC721").val();
    var passphrase = $("#sellerPassphrase").val();
    var transfer = server+'/escrow/erc721/approve?passcode='+passphrase+'&address='+seller;
    console.log("Seller started to release funds");
    console.log(transfer);

    $.getJSON(transfer,
      function(text4) {
        if(text4) {
          console.log(text4);
          document.getElementById("escrow").innerHTML = "";
          document.getElementById("escrow").insertAdjacentHTML("afterbegin", `<div class="alert alert-success" role="alert">Successfully transferred the ERC-721 token</div>`);
        }
        else {
          console.log("error");
        }
      }
    );
  });
});

function getBalance() {
  document.getElementById("balance").innerHTML = "";
  var address = document.getElementById("inputBalance").value;
  if (address !== "") {
    console.log(`Checking token type and getting balance for ${address}...`);
    var token = (($("#is721Balance").is(":checked")) ? 'erc721' : 'erc20');

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
    xhttp.open("GET", `${server}/${token}/balance?address=${address}`, true);
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
      getList.open("GET", `${server}/blockchain/getTransactions?num=10`, true);
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
