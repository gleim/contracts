modifier onlyowner { if (msg.sender == owner) _ } }

contract AlexContent {

	string index;
	string name;
	uint8 view_price;
	uint8 content_price;

	function AlexContent() {

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
		return true;
	}

	function purchaseContent() returns(bool success) {
		return true;
	}

	function viewPurchased() returns(bool purchased) {
		return true;
	}

	function contentPurchased() returns(bool purchased) {
		return true;
	}

	function view() returns(bool success) {
		return true;
	}
}
