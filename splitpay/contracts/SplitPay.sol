// SplitPay (tip/contribute to multiple ether addresses)
// Author:  Bill Gleim
// twitter: @billgleim

contract SplitPay {
    
    // creates an enumerated type called Actor which consists of Creator and Promoter
    enum Actor { Creator, Promoter }

    // builds a variable (struct) called Payee which has two sub-variables, an address called payoutAddress and a uint called percentage     
    struct Payee
    {
        address payoutAddress;
        uint    percentage;
        Actor   payeeType;
    }
    
    // contract indexing for split-pay support: multiple payees
    mapping(address => Payee) private payees;

    // currently only supporting single-buyer support:
    //   if there exist multiple contributors/tippers, each will 
    //   require their own interface to the split-pay contract
    address buyer;

    // events are returned after functions are successfully called
    event onContribute(address indexed from, uint indexed lid, uint _value);
    event onPayout(address indexed from, uint indexed lid, uint _value);
    event onRefund(address indexed from, uint indexed lid, uint _value);

 function addBuyer(address _buyerAddress)
    {
        // set the internal buyer 
        buyer = _buyerAddress;
    }

 function addPayee(address payeeAddress, uint payeePercentage, Actor payeeType)
    {
        // add to the internal set of payees
        payees[payeeAddress] = Payee(payeeAddress, payeePercentage, payeeType);
    }

 function contribute(uint _lid)
    {
    }

 function refund(uint _lid)
    {
    }

 function payout(uint _lid)
    {
    }

 }
