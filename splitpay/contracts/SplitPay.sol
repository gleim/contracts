// SplitPay (tip/contribute to multiple ether addresses)
// Author:  Bill Gleim
// twitter: @billgleim

contract SplitPay {
    
    // creates an enumerated type called Actor which consists of Creator and Promoter
    enum Actor { Creator, Promoter }

    // builds a variable (struct) called Payee which has two sub-variables, an address called payoutAddress and a uint called percentage     
    struct Payee
    {
        address payeeAddress;
        uint    percentage;
        Actor   payeeType;
    }
    
    struct SplitPayData {
        // number of payout recipients
        uint numPayees;

        // contract indexing for split-pay support: multiple payees
        mapping (uint => Payee) payees;
    }

    SplitPayData splitPayData;

    // currently only supporting single-buyer support:
    //   if there exist multiple contributors/tippers, each will 
    //   require their own interface to the split-pay contract
    address public buyer;

    // events are returned after functions are successfully called
    event onPayout(address indexed from, uint indexed lid, uint _value);

    function SplitPay() {
        buyer = msg.sender;
    }

    // current invariant: single buyer per SplitPay contract
    function addBuyer(address _buyerAddress)
    {
        // set the internal buyer 
        buyer = _buyerAddress;
    }

    function addPayee(address _payeeAddress, uint _payeePercentage, Actor _payeeType)
    {
        // add to an indexed internal set of payees
        splitPayData.payees[splitPayData.numPayees] = Payee(_payeeAddress, _payeePercentage, _payeeType);

        // increment payee counter
        splitPayData.numPayees++;
    }

    function payout(uint _desiredPayoutAmount)
    {
        // validate payee amount
        uint validatedPayoutAmount = 0;

        for (uint i = 0; i < splitPayData.numPayees; i++) {
            validatedPayoutAmount += _desiredPayoutAmount * splitPayData.payees[i].percentage / 100; 
        } 

        if (validatedPayoutAmount <= _desiredPayoutAmount) {
            for (uint j = 0; j < splitPayData.numPayees; j++) {
                splitPayData.payees[j].payeeAddress.send(msg.value * splitPayData.payees[j].percentage / 100); 
            } 
        } else {
            suicide(msg.sender);
        }
    }
}
