// SoloPay (tip/contribute to single ether addresses)
// Author:  Bill Gleim
// twitter: @billgleim

contract SoloPay {
    
    address public payer;
    address public payee;

    uint value;

    uint payerBeginningBalance;
    uint payeeBeginningBalance;

    uint payerFinalBalance;
    uint payeeFinalBalance;

    function SoloPay(address _payeeAddress) {
      payer = msg.sender;
      payee = _payeeAddress;
      value = msg.value;

      payerBeginningBalance = payer.balance;
      payeeBeginningBalance = payee.balance;

      payee.send(value);

      payerFinalBalance = payer.balance;
      payeeFinalBalance = payee.balance;
    }
}
