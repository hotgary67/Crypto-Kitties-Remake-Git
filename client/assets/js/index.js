
var web3 = new Web3(Web3.givenProvider);
var contractAddress = "0xa6a265c0246928aDBed4e729d3217d758C3FC01F";
var myContract = new web3.eth.Contract(abi, contractAddress);
console.log(myContract);
var user;
let account;
let contractAddressOfOwnerKitties;
web3.eth.getAccounts().then((metaUserAccount) => {
  contractAddressOfOwnerKitties = metaUserAccount[0];
  console.log(contractAddressOfOwnerKitties);
});

$(document).ready(function () {
  window.ethereum.enable().then(function (accounts) {
    instance = new web3.eth.Contract(abi, contractAddress, {
      from: accounts[0],
    });

    let user = contractAddressOfOwnerKitties;
 
    myContract.methods.getAllKittiesIOwn(user).call({}, function (err, result) {
      if (err) {
        console.log(err);
        web3.eth.getChainId().then(console.log);
      } else {
        console.log(result);

        console.log(result.length);
        $("#numberOfCatUserOwns").append(
          "Number of Cats I own:" + " " + result.length + "<br>"

        );
            
        var arrayOfKittiesThatOwnerOwns = result;
        console.log(arrayOfKittiesThatOwnerOwns);

            if (err) {
              console.log(err);
            } else {
              console.log(result.genes);

              for (let i = 0; i < arrayOfKittiesThatOwnerOwns.length; i++) {
               // was    var dnaOfEachCat = myContract.methods
                  myContract.methods
                  .getKitty(i)
                  .call()
                  .then(function (res) {
                    var dnaPlusIndexCat = i + " " + res[0];
                    console.log(dnaPlusIndexCat);
                    var catIdNumber = i;
                    var onlyDna =res[0];
                   // console.log(onlyDna);
                    // dit hieronder is even een test om alleen de vaas eruit te filteren voor iedere cat, kijken of het lukt die correct naar de html te pushen

                    let dubbelDigitGenes = onlyDna.slice(0, 18);
                    // this are the Genes codes that range from 1 to <10
                    let singleDigitGenes = onlyDna.slice(18, 23);
                 //   console.log(dubbelDigitGenes, singleDigitGenes);
                    // below all genes are sliced into the original values
                    let slicedDubbelDigitGenes = dubbelDigitGenes.match(
                      /.{1,2}/g
                    );
                    let slicedSingleDigitGenes = singleDigitGenes.match(
                      /.{1}/g
                    );
                    console.log(slicedDubbelDigitGenes, slicedSingleDigitGenes);

                    //asign the right gene value to body part/function
                    let headAndBodyGenes = slicedDubbelDigitGenes[0];
                    let hatGenes = slicedDubbelDigitGenes[1];
                    let eyesGenes = slicedDubbelDigitGenes[2];
                    let earGenes = slicedDubbelDigitGenes[3];
                    let armsAndLegsGenes = slicedDubbelDigitGenes[4];
                    let bellyGenes = slicedDubbelDigitGenes[5];
                    let tailGenes = slicedDubbelDigitGenes[6];
                    let trunkGenes = slicedDubbelDigitGenes[7];
                    let vaseGenes = slicedDubbelDigitGenes[8];

                    let eyeShapeGenes = Number(slicedSingleDigitGenes[0]);
                    console.log(eyeShapeGenes)
                   //-- JHIER MISSCHIEN FUNCTIE TOEVOEGEN DAT DE EYES VERANDERD?
                   
               //    eyeVariation(4);
                   // var Rando = randomEyeVariation(eyeShapeGenes);
                  //  console.log(Rando);
      
     
             


                    let nailShapeGenes =  Number(slicedSingleDigitGenes[1]);
           


                    let wingGenes =  Number(slicedSingleDigitGenes[2]);
                    console.log("this is WINGSDNA", wingGenes)
                    let animationGenes =  Number(slicedSingleDigitGenes[3]);
                    console.log("this is ANIMATIONDNA", animationGenes)
                    var catColors = allColors();

                    var headAndBodyColorCode = catColors[headAndBodyGenes];
                    var hatColorCode = catColors[hatGenes];
                    var eyesColorCode = catColors[eyesGenes];
                    var earColorCode = catColors[earGenes];
                    var armsAndLegsColorCode = catColors[armsAndLegsGenes];
                    var bellyColorCode = catColors[bellyGenes];
                    var tailColorCode = catColors[tailGenes];
                    var trunkColorCode = catColors[trunkGenes];
                    var vaseColorCode = catColors[vaseGenes];
                    //
                    var wingColorCode = catColors[wingGenes];
                    console.log("wing Color code ", wingColorCode );


                

//dit is de verbeterde vesie van hierboven
                    
                  
  
                    console.log(
                      "Dna of Vase is" +
                        " " +
                        vaseGenes +
                        " , " +
                        "color code is " + "#" +
                        vaseColorCode
                    );
        
                    var htmlString =
                      `<div class="d-flex solokitty flex-column p-4" id="kittyId` +
                      i +
                      `">
                      <div class="col-sm">
                        <div class="hat">
                            <div class="hatlogo">
                              <span id="dnahat"></span>
                            </div>
                            <div class="hatinside">
                            </div>
                          </div>
                  
                          <div class="cat">
                  
                            <div class="ears">
                  
                              <div class="ear left_ear">
                              </div>
                              <div class="ear right_ear">
                              </div>
                  
                            </div>
                  
                            <div class="head">
                  
                              <div class="eyes">
                                <div class="eye1">
                                  <div class="pupils ">
                                    <div class="pupilsinside">
                                    </div>
                                  </div>
                                </div>
                                <div class="eye2">
                                  <div class="pupils">
                                    <div class="pupilsinside">
                                    </div>
                                  </div>
                                </div>
                  
                  
                                <div class="tongue">
                                  <div class="realnose"></div>
                                  <div class="tonguecenter"></div>
                                </div>
                  
                                <div class="left-mouth"></div>
                                <div class="left-mouth2"></div>
                                <div class="left-mouth3"></div>
                                <div class="right-mouth"></div>
                                <div class="right-mouth2"></div>
                                <div class="right-mouth3"></div>
                              </div>
                  
                              <div class="body">
                                <div class="bodyinner">
                                  <div class="arms">
                                    <div class="armsleft">
                                      <div class="armsleftinside">
                  
                                      </div>
                                      <div class="armsleftinside2">
                  
                                      </div>
                                      <div class="armsleftinside3">
                  
                                      </div>
                                    </div>
                                    <div class="armsright">
                                      <div class="armsrighttinside">
                  
                                      </div>
                                      <div class="armsrightinside2">
                  
                                      </div>
                                      <div class="armsrightinside3">
                  
                                      </div>
                                    </div>
                                  </div>
                  
                                </div>
                                <div class="legs">
                                  <div class="legleft">
                                    <div class="legleftinside"> </div>
                                    <div class="legleftinside2"> </div>
                                  </div>
                  
                                  <div class="legright">
                                    <div class="legrightinside"> </div>
                                  </div>
                                </div>
                              </div>
                  
                              <div class="position" class="sunflower">
                                <div class="trunk">
                  
                                  <div class="left-branch"></div>
                                  <div class="right-branch"></div>
                                </div>
                                <div class="vase"></div>
                              </div>
                
                            </div>
                            <div class="catTail">
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                              <span class="catColor"></span>
                            </div>
                  
                        
                      
                    </div>
                    <br><br><br><br><br><br><br><br><br><br>
                  </div></div>`;


                  var htmlString2 =
                  `<div class="d-flex solokitty flex-column p-4" id="kittyId` +
                  i +
                  `"><div class="checkboxdiv checkboxes id="checkboxinput `+ i + `">
                  
                  <input type="checkbox" class="single-checkbox2" name="test" value="`+ i + `"/ id="r`+ i + `">
                  <label for="r`+ i + ` ">Kitty Id:` + ` ` + i + ` <br> Dna:` + ` ` + onlyDna + `</label>
               
                     </div>
                  <div class="col-sm ">
                  
                    <div class="hat">
                        <div class="hatlogo">
                          <span id="dnahat"></span>
                        </div>
                        <div class="hatinside">
                        </div>
                      </div>
              
                      <div class="cat">
              
                        <div class="ears">
              
                          <div class="ear left_ear">
                          </div>
                          <div class="ear right_ear">
                          </div>
              
                        </div>
              
                        <div class="head">
              
                          <div class="eyes">
                            <div class="eye1">
                              <div class="pupils ">
                                <div class="pupilsinside">
                                </div>
                              </div>
                            </div>
                            <div class="eye2">
                              <div class="pupils">
                                <div class="pupilsinside">
                                </div>
                              </div>
                            </div>
              
              
                            <div class="tongue">
                              <div class="realnose"></div>
                              <div class="tonguecenter"></div>
                            </div>
              
                            <div class="left-mouth"></div>
                            <div class="left-mouth2"></div>
                            <div class="left-mouth3"></div>
                            <div class="right-mouth"></div>
                            <div class="right-mouth2"></div>
                            <div class="right-mouth3"></div>
                          </div>
              
                          <div class="body">
                            <div class="bodyinner">
                            
                              <div class="arms">
                                <div class="armsleft">
                                  <div class="armsleftinside">
              
                                  </div>
                                  <div class="armsleftinside2">
              
                                  </div>
                                  <div class="armsleftinside3">
              
                                  </div>
                                </div>
                                <div class="armsright">
                                  <div class="armsrighttinside">
              
                                  </div>
                                  <div class="armsrightinside2">
              
                                  </div>
                                  <div class="armsrightinside3">
              
                                  </div>
                                </div>
                              </div>
              
                            </div>
                            <div class="legs">
                              <div class="legleft">
                                <div class="legleftinside"> </div>
                                <div class="legleftinside2"> </div>
                              </div>
              
                              <div class="legright">
                                <div class="legrightinside"> </div>
                              </div>
                            </div>
                          </div>
              
                          <div class="position" class="sunflower">
                            <div class="trunk">
              
                              <div class="left-branch"></div>
                              <div class="right-branch"></div>
                            </div>
                            <div class="vase"></div>
                          </div>
            
                        </div>
                        <div class="catTail">
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                          <span class="catColor"></span>
                        </div>
                    

                       
                  
                </div>
          
                <br><br><br><br><br><br><br><br><br><br>
              </div></div>`;

                    //append basic design all cats owner
                    $("#allKittiesIownDivs").append(htmlString);
                    $("#allKittiesIcanBreedWithDivs").append(htmlString2);

                    //color coding for all elements of the individual cats of owner
                    $("#kittyId" + i)
                      .find(".head, .body")
                      .css("background", "#" + headAndBodyColorCode);
                       $("#kittyId" + i)
                      .find(".hat, .hatinside")
                      .css("background", "#" + hatColorCode);
                    $("#kittyId" + i)
                      .find(".eye1, .eye2")
                      .css("background", "#" + eyesColorCode);
                    $("#kittyId" + i)
                      .find(".ear")
                      .css("background", "#" + earColorCode);
                    $("#kittyId" + i)
                      .find(".armsleft, .armsright,  .legleft, .legright")
                      .css("background", "#" + armsAndLegsColorCode);
                    $("#kittyId" + i)
                      .find(".bodyinner")
                      .css("background", "#" + bellyColorCode);
                    $("#kittyId" + i)
                      .find(".catTail span")
                      .css("background", "#" + tailColorCode);
                    $("#kittyId" + i)
                      .find(".trunk, .left-branch, .right-branch")
                      .css("background", "#" + trunkColorCode);
                    $("#kittyId" + i)
                      .find(".vase")
                      .css("color", "#" + vaseColorCode);
                    $("#kittyId" + i)
                      .find(".vase")
                      .css("border-top-color", "#" + vaseColorCode);

                                 
                      
                   
                   eyeVariation(eyeShapeGenes,i);
                   decorationNailVariation(nailShapeGenes,i);
                   decorationWings(wingGenes,i);
                   animationVariation(animationGenes,i);

         
                  })
                  .catch(function (err) {
                    console.log(err);
                    throw err;
                  });
              }
            }
         
      }
    });
  });
});

function sendKittyToBlockChain() {
  let dnaStr = getDna();

  console.log(dnaStr);

  instance.methods.createKittyGen0(dnaStr).send({}, function (err, txHash) {
    if (err) console.log(err);
    else console.log(txHash);
  });


  bornKittyPropertiesArray = [];
  myContract.events.Birth(
    {
      // Can use from block 0 but returns all previous births
      //fromBlock: 0
      fromBlock: "latest",
      toBlock: "latest",
    },
    function (error, result) {
      if (!error) {
        console.log(result, "Kitty has been born");
        console.log(
          result.returnValues.kittenId,
          result.returnValues.generation,
          result.returnValues.genes,
          result.returnValues.mumId,
          result.returnValues.dadId,
          result.returnValues.owner
        );

        alert("Your Kitty is born");
        bornKittyPropertiesArray.push(
          result.returnValues.kittenId,
          result.returnValues.generation,
          result.returnValues.genes,
          result.returnValues.MumId,
          result.returnValues.dadId,
          result.returnValues.owner
        );

        $("#bornCatSpecifications").append(
          "Kitten Id:" + " " + result.returnValues.kittenId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Generation:" + " " + result.returnValues.generation + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Genes:" + " " + result.returnValues.genes + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Mum ID:" + " " + result.returnValues.MumId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Dad ID:" + " " + result.returnValues.dadId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Owner Address:" + " " + result.returnValues.owner
        );
      } else {
        console.log(error);
      }
    }
  );
  console.log(bornKittyPropertiesArray);

  bornKittyPropertiesArray.forEach((value) => {
    document.querySelector(
      ".bornCatSpecifications"
    ).innerHTML += `<span>${value}</span>`;
  });

  bornKittyIdAndDna = [];
  myContract.getPastEvents(
    "Birth",
    {
      fromBlock: 0,
    },

    function (error, result) {
      if (!error) {
        console.log(result, "All your cats are being retrieved");
        console.log(result.returnValues.kittenId, result.returnValues.genes);

        alert("Your Kitty is born");
        bornKittyIdAndDna.push(
          result.returnValues.kittenId,
          result.returnValues.genes
        );

        $("#bornCatSpecifications").append(
          "Kitten Id:" + " " + result.returnValues.kittenId + "<br>"
        );
        $("#bornCatSpecifications").append(
          "Genes:" + " " + result.returnValues.genes + "<br>"
        );
      } else {
        console.log(error);
      }
    }
  );
  console.log(bornKittyIdAndDna);

}
function breedNewKitty(mumId,dadId) {
 
  const getMumDad = getOptions();
  console.log(getMumDad);

  let dadKittyDna = getMumDad[0];
  let mumKittyDna = getMumDad[1];
  console.log(dadKittyDna, mumKittyDna);

  myContract.methods.getKitty(mumKittyDna).call({}, function (err, result) {
    if (err) {
      console.log(err );
 
    } else {
      console.log(result.genes);
      let mumGenes = result.genes;
      console.log(mumGenes);

  }});

  myContract.methods.getKitty(dadKittyDna).call({}, function (err, result) {
    if (err) {
      console.log(err);
 
    } else {
      console.log(result.genes);
      let dadGenes = result.genes;

  }});



  instance.methods.breed(dadKittyDna,mumKittyDna).send({}, function (err, result) {
if  (err) {console.log(err) ;
  
}

else 

console.log(result);


});



myContract.methods.breed(dadKittyDna,mumKittyDna).call({}, function (err, result)  {
  if  (err) {console.log(err);
  
  }
     
  else 
    console.log(result);
});



bornKittyPropertiesArray = [];
  myContract.events.Birth(
    {
      // Can use from block 0 but returns all previous births
      //fromBlock: 0
      fromBlock: "latest",
      toBlock: "latest",
    },
    function (error, result) {
      if (!error) {
        console.log(result, "Kitty has been born");
        console.log(
          result.returnValues.kittenId,
          result.returnValues.generation,
          result.returnValues.genes,
          result.returnValues.mumId,
          result.returnValues.dadId,
          result.returnValues.owner
        );

        alert("Your Kitty is born");
        bornKittyPropertiesArray.push(
          result.returnValues.kittenId,
          result.returnValues.generation,
          result.returnValues.genes,
          result.returnValues.MumId,
          result.returnValues.dadId,
          result.returnValues.owner
        );

    
      } else {
        console.log(error);
      }
    }
  );

}
