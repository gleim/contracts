modifier onlyowner { if (msg.sender == owner) _ } }

contract AlexContent {

	string index;
	string name;
	uint8 price;

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

	function setPrice(uint _price) onlyowner returns(bool success) {
		price = _price;
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
}
