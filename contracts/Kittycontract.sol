//toDO , loop maken voor functie getAllKittiesIOwn ipv die extra mapping

pragma solidity ^0.5.12;
pragma experimental ABIEncoderV2;
import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./Ownable.sol";

contract Kittycontract is IERC721, Ownable {
    event Birth(
        address owner,
        uint256 kittenId,
        uint256 mumId,
        uint256 dadId,
        uint256 genes,
        uint256 generation
    );
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );

    event ApprovalForAll(
        address owner,
        address _operator
        //  uint256 allKittiesOwnedByAddress
    );

   event Approval (
    address indexed owner,
    address indexed approved, 
    uint256 indexed tokenId
   );

   

    string public constant name = "Crazy Cats";
    string public constant symbol = "CCS";
    bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(
        keccak256("onERC721Received(address,address,uint256,bytes)")
    );
    bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
    bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;

    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] Kitties;

    mapping(uint256 => address) public tokenOwner;
    mapping(address => uint256) private totalTokenCountOwner;

    mapping(uint256 => address) public kittyIndexToApproved;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    //uitleg mapping array https://medium.com/coinmonks/array-and-map-in-solidity-a579b311d74b

    mapping(address => uint256[]) internal allKittiesOwnedByAddress;

    //     mapping (address => uint[]) internal allKittiesOwnedByAddress;

    //nr2  mapping(uint => uint) internal tokenTokenIndexes;
    //deze hierboven zouden de juist moeten zijn voor all tokens owned by address
    //nr 2 van de mapping wordt gebrtuik om de positie van de token in de array te bepalen
    //https://medium.com/@anallergytoanalogy/jumping-into-solidity-the-erc721-standard-part-7-9aca1411375a

    function breed(uint256 _dadId, uint256 _mumId) public returns (uint256) {
        
        //check Ownership should revert if sender does not own the mom or dad kitties
      require(tokenOwner[_dadId] == msg.sender && tokenOwner[_mumId] == msg.sender);
      require(_dadId !=_mumId);

     (uint dadGenes, , , ,uint generationDad) = getKitty(_dadId);
     (uint mumGenes, , , ,uint generationMum) = getKitty(_mumId);

    uint256 newBornKittyDna = _mixDna(dadGenes, mumGenes);
    
    uint256 newBornGenerationNumber = generationMum + 1;
       
         //give it to msg.sender
        _createKitty(_mumId, _dadId, newBornGenerationNumber, newBornKittyDna, msg.sender);
        
      
        return newBornKittyDna;
   
    }


    function supportsInterface(bytes4 _interfaceId)
        external
        view
        returns (bool)
    {
        return (_interfaceId == _INTERFACE_ID_ERC721 ||
            _interfaceId == _INTERFACE_ID_ERC165);
    }

    function createKittyGen0(uint256 _genes)
        public
        onlyOwner
        returns (uint256)
    {
        //owner = msg.sender;

        uint256 result = _createKitty(0, 0, 0, _genes, owner);
        return result;
    }

    function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Kitty memory _kitty = Kitty({
            genes: _genes,
            birthTime: uint64(now),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        uint256 newKittenId = Kitties.push(_kitty) - 1;
        // allKittiesOwnedByAddress[newKittenId].push(uint);

        //   allKittiesOwnedByAddress[msg.sender].push(newKittenId);
        allKittiesOwnedByAddress[owner].push(newKittenId);

        //   ownerTokenIndexes[creator].push(i+1);

        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes, _generation);

        _transfer(address(0), _owner, newKittenId);

        return newKittenId;
    }

    function getKitty(uint256 tokenId)
        public
        view
        returns (
            uint256 genes,
            uint256 birthTime,
            uint256 mumId,
            uint256 dadId,
            uint256 generation
        )
    {
        return (
            Kitties[tokenId].genes,
            Kitties[tokenId].birthTime,
            Kitties[tokenId].mumId,
            Kitties[tokenId].dadId,
            Kitties[tokenId].generation
        );
    }

    function balanceOf(address owner) external view returns (uint256 balance) {
        return totalTokenCountOwner[owner];
    }

    function totalSupply() external view returns (uint256 total) {
        return Kitties.length;
    }

    function tokenName() external view returns (string memory tokenName) {
        return name;
    }

    function tokenSymbol() external view returns (string memory tokenSymbol) {
        return symbol;
    }

    function ownerOf(uint256 tokenId) external view returns (address owner) {
        return tokenOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) external {
        require(tokenOwner[tokenId] != address(0), "This token does not exist");
        require(
            tokenOwner[tokenId] == msg.sender,
            "You are not the owner of this Kitty"
        );

        require(to != address(0), "Cannot send to zero address");
        require(to != address(this), "Cannot send to contract address");

        tokenOwner[tokenId] == msg.sender;
        address newOwner = to;

        //set new owner token
        tokenOwner[tokenId] = newOwner;

        totalTokenCountOwner[to]++;

        totalTokenCountOwner[msg.sender]--;

        emit Transfer(msg.sender, newOwner, tokenId);
    }

    function _transfer(
        address _from,
        address _to,
        uint256 _tokenId
    ) internal {
        totalTokenCountOwner[_to]++;

        tokenOwner[_tokenId] = _to;

        if (_from != address(0)) {
            totalTokenCountOwner[_from]--;
            delete kittyIndexToApproved[_tokenId];
        }

        emit Transfer(_from, _to, _tokenId);
    }

    function getAllKittiesIOwn(address owner)
        public
        view
        returns (uint256[] memory)
    {
        //   allKittyiesOwnedbyUser =;

        return allKittiesOwnedByAddress[owner];
    }

    function approve(address _approved, uint256 _tokenId) external {
        require(
            tokenOwner[_tokenId] == msg.sender ,
         //   ||  kittyIndexToApproved[_tokenId] == msg.sender, 
         // left this requirment out since it was not part of the assignment
            "You are not the owner of this Kitty"
        );
        kittyIndexToApproved[_tokenId] = _approved;

     
        emit Approval(msg.sender, _approved, _tokenId);
    }

    function getApproved(uint256 _tokenId) external view returns (address) {
        require(_tokenId < Kitties.length);
        return kittyIndexToApproved[_tokenId];
    }

    function setApprovalForAll(address _operator, bool _approved)
        external
        
    {
        require(_operator == msg.sender);
        _operatorApprovals[msg.sender][_operator] = _approved;

        emit ApprovalForAll(owner, _operator);

    }

    function isApprovedForAll(address _owner, address _operator)
        external
        view
        returns (bool)
    {
        if (_operatorApprovals[_owner][_operator] == true) {
            return true;
        } else {
            return false;
        }
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) external {
        require(
            tokenOwner[_tokenId] == msg.sender ||
                kittyIndexToApproved[_tokenId] == msg.sender ||
                isApprovedForAll(_from, msg.sender),
            "You are not the owner of this Kitty"
        );

        require(_to != address(0), "Cannot send to zero address");
        require(
            _from == tokenOwner[_tokenId],
            "This is not the address of the Token Owner"
        );

        totalTokenCountOwner[_to]++;

        tokenOwner[_tokenId] = _to;

        if (_from != address(0)) {
            totalTokenCountOwner[_from]--;
        }

        emit Transfer(_from, _to, _tokenId);
    }

    function _safeTransfer(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes memory _data
    ) internal {
        _transfer(_from, _to, _tokenId);
        require(_checkERC721Support(_from, _to, _tokenId, _data));
    }

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes calldata data
    ) external {
        require(
            tokenOwner[_tokenId] == msg.sender ||
                kittyIndexToApproved[_tokenId] == msg.sender ||
                _operatorApprovals[_from][msg.sender] == true,
            "You are not the owner of this Kitty"
        );

        require(_to != address(0), "Cannot send to zero address");
        require(
            _from == tokenOwner[_tokenId],
            "This is not the address of the Token Owner"
        );

        _safeTransfer(_from, _to, _tokenId, data);
    }

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) external {
        require(
            tokenOwner[_tokenId] == msg.sender ||
                kittyIndexToApproved[_tokenId] == msg.sender ||
                _operatorApprovals[_from][msg.sender] == true,
            "You are not the owner of this Kitty"
        );

        require(_to != address(0), "Cannot send to zero address");
        require(
            _from == tokenOwner[_tokenId],
            "This is not the address of the Token Owner"
        );

        _safeTransfer(_from, _to, _tokenId, "");
    }

    function _checkERC721Support(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes memory _data
    ) internal returns (bool) {
        if (!_isContract(_to)) {
            return true;
        }

        bytes4 returnData = IERC721Receiver(_to).onERC721Received(
            msg.sender,
            _from,
            _tokenId,
            _data
        );
        return returnData == MAGIC_ERC721_RECEIVED;
    }

    function _isContract(address _to) internal view returns (bool) {
        uint32 size;

        assembly {
            size := extcodesize(_to)
        }
        return size > 0;
    }

    function _mixDna(uint256 _dadDna, uint256 _mumDna) internal returns (uint256) {

        uint256 firstHalf = _dadDna / 100000000;
        uint256 secondHalf = _mumDna % 100000000;

        uint256 newDna = firstHalf + 100000000;
        newDna = newDna + secondHalf;
        return newDna;
    }
}
