pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    address payable public owner;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        uint price;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price
    );

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor() public {
        name = "O-Two market place";
        owner = msg.sender;
    }

    function createProduct(string memory _name, uint _price) public onlyOwner {
        require(bytes(_name).length > 0); //require valid name
        require(_price > 0);

        //Increment produt count
        productCount++;

        //Create product
        products[productCount] = Product(productCount,_name,_price);

        //Trigger an event
        emit ProductCreated(productCount, _name, _price);
    }

    function receiveProductAndPay(uint _id) public payable{
        //Fetch the product
        Product memory _product = products[_id]; //memory --> assigning it to a local variable
        //Fetch the owner
        address payable _seller = owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price);
        
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        
        // Pay the seller by sending them ether
        address(_seller).transfer(msg.value);

        //Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price);
    }

    function rewardCoinsToUser(uint _user) public payable onlyOwner{

        //Pay the user from the owner
        address(_user).transfer(msg.value);
    }

}