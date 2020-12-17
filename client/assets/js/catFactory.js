//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor
}

function genColors() {
  var colors = []
  for (var i = 10; i < 99; i++) {
    var color = getColor()
    colors[i] = color
  }
  return colors
}


//GAAN NOG DINGEN MIS MET DE RANDOMIZER, GETALLEN GROTER DAN 100 KOMEN ERUIT + ER ZIT EEN GEKKE LOOP IN ERGENS

function headColor(color, code) {
  $(".head, .body").css("background", "#" + color); //This changes the color of the cat
  $("#headcode").html("code: " + code); //This updates text of the badge next to the slider
  $("#dnabody").html(code); //This updates the body color part of the DNA that is displayed below the cat
}

function randomHeadColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  headColor(colorcode, code);
  $("#bodycolor").val(code);
}

function hatColor(color, code) {
  $(".hat, .hatinside").css("background", "#" + color);
  $("#hatcode").html("code: " + code);
  $("#dnahat").html(code);
}

function randomHatColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  hatColor(colorcode, code);
  $("#hatcolor").val(code);
}

function eyesColor(color, code) {
  $(".eye1, .eye2").css("background", "#" + color);
  $("#eyescode").html("code: " + code);
  $("#dnaeyes").html(code);
}

function randomEyesColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  eyesColor(colorcode, code);
  $("#eyescolor").val(code);
}

function earColor(color, code) {
  $(".ear").css("background", "#" + color);
  $("#earcode").html("code: " + code);
  $("#dnaears").html(code);
}

function randomEarColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  earColor(colorcode, code);
  $("#earcolor").val(code);
}

function armsLegsColor(color, code) {
  $(".armsleft, .armsright,  .legleft, .legright").css(
    "background",
    "#" + color
  );
  $("#armslegscode").html("code: " + code);
  $("#dnaarmslegs").html(code);
}

function randomArmsLegsColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  armsLegsColor(colorcode, code);
  $("#armslegscolor").val(code);
}

function bellyColor(color, code) {
  $(".bodyinner").css("background", "#" + color);
  $("#bellycode").html("code: " + code);
  $("#dnabelly").html(code);
}

function randomBellyColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  bellyColor(colorcode, code);
  $("#bellycolor").val(code);
}

function tailColor(color, code) {
  $(".catTail span").css("background", "#" + color);
  $("#tailcode").html("code: " + code);
  $("#dnatail").html(code);
}

function randomTailColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  tailColor(colorcode, code);
  $("#tailcolor").val(code);
}

function trunkColor(color, code) {
  let colorTrunk = color;
  $(".trunk, .left-branch, .right-branch").css("background", "#" + color);
  $(".right_ear").css({
    "box-shadow": "#" + color,
  });

  $("#trunkcode").html("code: " + code);
  $("#dnatrunk").html(code);

  return colorTrunk;
}

function randomTrunkColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  trunkColor(colorcode, code);
  $("#trunkcolor").val(code);
}

function vaseColor(color, code) {
  $(".vase").css("color", "#" + color);
  $(".vase").css("border-top-color", "#" + color);
  $("#vasecode").html("code: " + code);
  $("#dnavase").html(code);
}

function randomVaseColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(color);
  var colorcode = color[code];
  vaseColor(colorcode, code);
  $("#vasecolor").val(code);
}

function eyeVariation(num, i="factory") {
  $("#dnaeyeshape").html(num);
  console.log('Ivariation', {num,i})
  switch (num) {
    case 1:
      console.log("case 1")
      $("#eyeName").html("Plain");
      normalEyes(i);
      break;

    case 2:
      console.log("case 2")
      normalEyes(i);
      $("#eyeName").html("Tear left");
      eyesType1(i);
      break;

    case 3:
      console.log("case 3")
      normalEyes(i);
      $("#eyeName").html("Tear right");
      eyesType2(i);
      break;

    case 4:
      console.log("case 4")
      normalEyes(i);
      $("#eyeName").html("Tears");
      eyesType3(i);
      break;

    case 5:
      console.log("case 5")
      normalEyes(i);
      $("#eyeName").html("Tears right");
      eyesType4(i);
      break;

    case 6:
      console.log("case 6")
      normalEyes(i);
      $("#eyeName").html("Freaky");
      eyesType5(i);
      break;
      default: 
      console.log("default");
  }

}
//aangepast met i erin

function randomEyeVariation(num, i="factory") {
  var num = filterOnetoSix(num);
  console.log('RANDOM Eye variation', {num,i})
  eyeVariation(num);
  $("#eyeshape").val(num)
}



function decorationNailVariation(num, i="factory") {
  $("#dnanaildecoration").html(num);
  resetNails();
  switch (num) {
    case 1:
      $("#nailName").html("Miaaaauwwwww");
      resetNails();
      normalNails(i);
      break;

    case 2:
      $("#nailName").html("Defense");
      nails1(i);
      break;

    case 3:
      $("#nailName").html("Ninja Fighter Cat");
      nails2(i);
  }
}

function randomDecorationNailVariation(num) {
  var num = filterOnetoThree(num);
  decorationNailVariation(num);
  $("#decorationnail").val(num);
}

function decorationWings(num, i="factory") {
  console.log('WINGSSSS!!!', {num,i})
  $("#dnawings").html(num);
  //resetWings();
  switch (num) {
    case 1:
      console.log("NO WINGS")
      $("#wingNames").html("No Wings");

    case 2:
      console.log("FAILED WINGS")
      $("#wingNames").html("Failed Wings");
      wings1(i);
      break;

    case 3:
      console.log("FAILED WIGNS MIAAAW")
      $("#wingNames").html("Wingy Miaauw");
      wings2(i);
      break;

    case 4:
      console.log("WINGS FFLYING CAT")
      $("#wingNames").html("Flying Cat");

      wings3(i);
      break;

    case 5:
      console.log("FAILED DARK ANGEL WINGS")
      $("#wingNames").html("Dark Angel");
      wings4(i);
  }
}


function decorationWings2(num, i="factory") {
  console.log('WINGSSSS!!!', {num,i})
  $("#dnawings").html(num);
  resetWings();
  switch (num) {
    case 1:
      console.log("NO WINGS")
      $("#wingNames").html("No Wings");

    case 2:
      console.log("FAILED WINGS")
      $("#wingNames").html("Failed Wings");
      wings1(i);
      break;

    case 3:
      console.log("FAILED WIGNS MIAAAW")
      $("#wingNames").html("Wingy Miaauw");
      wings2(i);
      break;

    case 4:
      console.log("WINGS FFLYING CAT")
      $("#wingNames").html("Flying Cat");

      wings3(i);
      break;

    case 5:
      console.log("FAILED DARK ANGEL WINGS")
      $("#wingNames").html("Dark Angel");
      wings4(i);
  }
}

function randomDecorationWings(num) {
  var num = filterOnetoFive(num);
  decorationWings2(num);
  $("#kittyId" + i)
  .find$("#wingshapedec").val(num);
}

function normalEyes(i) {
  $("#kittyId" + i)
  .find(".eye1, .eye2").find("div").css("border", "none");
}

function eyesType1(i) {
  console.log("hhhhhhhhhhhhh", i)
  $("#kittyId" + i)
  .find(".eye1").find("div").css("border-top", "10px solid");

}

function eyesType2(i) {
  console.log("hhhhhhhhhhhhh", i)
  $("#kittyId" + i)
  .find(".eye2").find("div").css("border-top", "10px solid");

}

function eyesType3(i) {
  console.log("hhhhhhhhhhhhh", i)
  $("#kittyId" + i)
  .find(".eye1,.eye2").find("div").css("border-top", "10px solid");

}

function eyesType4(i) {
  console.log("hhhhhhhhhhhhh", i)
  $("#kittyId" + i)  
  .find(".eye1,.eye2").find("div").css("border-left", "13px solid");
  
}

function eyesType5(i) {
  console.log("hhhhhhhhhhhhh", i)
  $("#kittyId" + i)
  .find(".eye1,.eye2").find("div").css("border-top", " 36px solid");
  $("#kittyId" + i)
  .find(".eye1,.eye2").find("div").css("border-bottom", " 36px solid");

}

function normalNails(i) {
  console.log("NAAAAILS", i)

  $("#kittyId" + i)
  .find(".armsleftinside").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "21px",
    top: "20px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
  });
  $("#kittyId" + i)
  .find(".armsrighttinside").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "24px",
    top: "19px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "55",
  });

  $("#kittyId" + i)
  .find(".armsleftinside2").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "11px",
    top: "11px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
    transform: "rotate(0deg)",
  });

  $("#kittyId" + i)
  .find(".armsrightinside2").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "14px",
    top: "12px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "55",
    transform: "rotate(0deg)",
  });
  $("#kittyId" + i)
  .find(".armsleftinside3").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "1px",
    top: "-3px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
  });
  $("#kittyId" + i)
  .find(".armsrightinside3").css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    height: "11px",
    width: "8px",
    left: "3px",
    top: "-1px",
    position: "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "5",
  });
}

function nails1(i) {

  $("#kittyId" + i)
  .find(".armsleftinside, .armsrighttinside").css({
    transform: "rotate( 0deg)",
    height: "0px",
    width: "0px",
    top: "25px",
    left: "12px",
  });
  $("#kittyId" + i)
  .find(".armsleftinside2, .armsrightinside2").css({
    transform: "rotate(90deg)",
    height: "172px",
    width: "18px",
    top: "-70px",
    left: "8px",
    "background-color": "#a45656",
    "z-index": "5",
  });
  $("#kittyId" + i)
  .find(".armsleftinside3, .armsrightinside3").css({
    transform: "rotate(0deg)",
    height: "0px",
    width: "0px",
    top: "-28px",
    left: "18px",
  });
}

function nails2(i) {

  $("#kittyId" + i)
  .find(".armsleftinside, .armsrighttinside").css({
    transform: "rotate( 0deg)",
    height: "10px",
    width: "0px",
    top: "-184px",
    left: "14px",
    "background-color": "black",
    "border-color": "black",
  });
  $("#kittyId" + i)
  .find(".armsleftinside2, .armsrightinside2").css({
    transform: "rotate(120deg)",
    height: "155px",
    width: "13px",
    top: "-64px",
    left: "10px",
    "background-color": "#a45656",
    "z-index": "125",
  });
  $("#kittyId" + i)
  .find(".armsleftinside3, .armsrightinside3").css({
    transform: "rotate(0deg)",
    height: "10px",
    width: "0px",
    top: "-317px",
    left: "13px",
    "background-color": "black",
    "border-color": "black",
  });
}

function normalWings(i) {
  console.log("NORMAL WINGS", i)
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  
  $("#kittyId" + i)
  .find(".ear.left_ear").css({
    "box-shadow": "",
  });
  
  $("#kittyId" + i)
  .find("ear.right_ear").css({
    "box-shadow": "",
  });
}

function wings1(i) {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  var code = filterOnetoFive(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];
  console.log("WINGS1", i, colorcode)
  
  $("#kittyId" + i)
  .find(".left_ear").css({
    "box-shadow": "5px 25px 25px -9px",
    color: colorcode,
  });
  
  $("#kittyId" + i)
  .find(".right_ear").css({
    "box-shadow": "3px -25px 18px -8px",
    color: colorcode,
  });
}

function wings2(i) {

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  var code = filterOnetoFive(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];
  console.log("WINGS2", i,  colorcode)

  
  $("#kittyId" + i)
  .find(".left_ear").css({
    "box-shadow": "-75px 25px 3px 35px",
    color: colorcode,
  });
  
  $("#kittyId" + i)
  .find(".right_ear").css({
    "box-shadow": "60px -15px 3px 35px",
    color: colorcode,
  });
}

function wings3(i) {

  var code = filterOnetoFive(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];
  console.log("WINGS3", i,  colorcode)

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  
  $("#kittyId" + i)
  .find(".left_ear").css({
    "box-shadow": "-30px -22px 3px 35px",
    color: colorcode,
  });
  
  $("#kittyId" + i)
  .find(".right_ear").css({
    "box-shadow": "25px 25px 3px 35px",
    color: colorcode,
  });
}

function wings4(i) {
 
  var code = filterOnetoFive(code);
  var color = allColors(code);
  var colorcode = "#" + color[code];
  console.log("WINGS4", i,  colorcode)

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  //$('.left_ear').css({"box-shadow": "-10px -22px 3px 35px #e42e74", "transform": "rotate(30deg)" })
  
  $("#kittyId" + i)
  .find(".left_ear").css({
    "border-radius": "90% 0px% 90% 0%",
    transform: "rotate(10deg) scale(-1, 1)",
    height: "250px",
    width: "150px",
    "box-shadow": "20px -25px 18px 18px",
    left: "-70px",
    color: colorcode,
  });
  
  $("#kittyId" + i)
  .find(".right_ear").css({
    "border-radius": "90% 0p% 90% 0%",
    transform: "rotate(40deg) scaleX(-1)",
    height: "250px",
    width: "150px",
    "box-shadow": "20px -25px 18px 18px",
    left: "115px",
    color: colorcode,
  });
}

function resetWings() {
  console.log("resetting wings");

 $(".left_ear").css({
    "box-shadow": "",
  });
$(".right_ear").css({
    "box-shadow": "",
  });
}

function animationVariation(num, i="factory") {
  console.log('ANIMMAAAATIONNNNN', {num,i})
  $("#dnaanimation").html(num);
 // resetAnimation();
  switch (num) {
    case 1:
      $("#animationName").html("Lame");
      animationType1(i);
      break;

    case 2:
      $("#animationName").html("Cat got some moves");
      animationType2(i);
      break;

    case 3:
      $("#animationName").html("Hajahiiii");
      animationType3(i);
      break;

    case 4:
      $("#animationName").html("Master Ninja Cat");
      animationType4(i);
      break;

    case 5:
      $("#animationName").html("Crazy Ears");
      animationType5(i);
      break;

    case 6:
      $("#animationName").html("Fly Away");
      animationType6(i);
      break;
  }
}

function animationVariation2(num, i="factory") {
  console.log('ANIMMAAAATIONNNNN', {num,i})
  $("#dnaanimation").html(num);
  resetAnimation();
  switch (num) {
    case 1:
      $("#animationName").html("Lame");
      animationType1(i);
      break;

    case 2:
      $("#animationName").html("Cat got some moves");
      animationType2(i);
      break;

    case 3:
      $("#animationName").html("Hajahiiii");
      animationType3(i);
      break;

    case 4:
      $("#animationName").html("Master Ninja Cat");
      animationType4(i);
      break;

    case 5:
      $("#animationName").html("Crazy Ears");
      animationType5(i);
      break;

    case 6:
      $("#animationName").html("Fly Away");
      animationType6(i);
      break;
  }
}

function randomAnimationVariation(num) {
  var num = filterOnetoFive(num);
  $("#animation").val(num);

  $("#dnaanimation").html(num);
  resetAnimation();
  switch (num) {
    case 1:
      $("#kittyId" + i)
  .find("#animationName").html("Lame");
      animationType1(i);

      break;

    case 2:
      $("#kittyId" + i)
  .find("#animationName").html("Cat got some moves");
      animationType2(i);
      break;

    case 3:
      $("#kittyId" + i)
  .find("#animationName").html("Hajahiiii");
      animationType3(i);
      break;

    case 4:
      $("#kittyId" + i)
  .find("#animationName").html("Master Ninja Cat");
      animationType4(i);
      break;

    case 5:
      $("#kittyId" + i)
  .find("#animationName").html("Crazy Ears");
      animationType5(i);
      break;

    case 6:
      $("#kittyId" + i)
      .find("#animationName").html("Fly Away");
      animationType6(i);
  }
}

function animationType1(i) {
  $("#kittyId" + i)
  .find(".armsleft").addClass("movingHead");
}

function animationType2(i) {
  $("#kittyId" + i)
  .find(".armsleft").addClass("movingStickRight");
}

function animationType3(i) {
  $("#kittyId" + i)
  .find(".armsleft").addClass("movingStickLeft");
}

function animationType4(i) {
  $("#kittyId" + i)
  .find(".armsleft").addClass("movingStickRight");
  $("#kittyId" + i)
  .find(".armsright").addClass("movingStickLeft");
}

function animationType5(i) {
  $("#kittyId" + i)
  .find(".left_ear").addClass("movingWings");
  $("#kittyId" + i)
  .find(".right_ear").addClass("movingWings");
}

function animationType6(i) {
  $("#kittyId" + i)
  .find(".left_ear").addClass("movingWings2");
  $("#kittyId" + i)
  .find(".right_ear").addClass("movingWings2");
}

function resetAnimation() {
  $(".armsleft").removeClass("movingHead movingStickRight movingStickLeft");
  $(".armsright").removeClass("movingStickLeft");
  $(".left_ear").removeClass("movingWings movingWings2");
  $(".right_ear").removeClass("movingWings movingWings2");
}

function resetNails() {
  $(".armsleft").removeAttr("style");
  $(".armsright").removeAttr("style");
}

function resetWings() {
  $(".ear.left_ear").removeAttr("style");
  $(".ear.right_ear").removeAttr("style");
}
