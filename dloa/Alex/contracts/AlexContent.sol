modifier onlyowner { if (msg.sender == owner) _ } }

contract AlexContent {

	address owner;
	string index;
	string name;
	uint8 view_price;
	uint8 content_price;
	mapping (address => uint) balances;
	mapping (address => bool) paid;

	function AlexContent() {
		owner = msg.sender;
	}

	function setIndex(string _index) onlyowner returns(bool success) {
		index = _index;
		return true;
	}

	function setName(string _name) onlyowner returns(bool success) {
		name = _name;
		return true;
	}

	function setViewPrice(uint _price) onlyowner returns(bool success) {
		view_price = _price;
		return true;
	}

	function setContentPrice(uint _price) onlyowner returns(bool success) {
		content_price = _price;
		return true;
	}

	function getIndex() returns(string contentIndex) {
		return index;
	}

	function setName() returns(string contentName) {
		return name;
	}

	function setPrice() returns(uint contentPrice) {
		return price;
	}

	function purchaseView() returns(bool success) {
		if (balances[msg.sender] < view_price) return false;
		balances[msg.sender] -= view_price;
		balances[owner] += view_price;
		paid[msg.sender] += true;
		return true;
	}

	function purchaseContent() returns(bool success) {
		if (balances[msg.sender] < content_price) return false;
		balances[msg.sender] -= content_price;
		balances[owner] += content_price;
		paid[msg.sender] += true;
		return true;
	}

	function viewPurchased() returns(bool purchased) {
		if (paid[msg.sender]) {
		    paid[msg.sender] = false;
			return true;
		} else {
			return false;
		}
	}

	function contentPurchased() returns(bool purchased) {
		if (paid[msg.sender]) 
			return true;
		else
			return false;
	}

	function view() returns(bool success) {
		return true;
	}
}
