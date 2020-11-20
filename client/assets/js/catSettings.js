
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "hatcolor" : 10,
    "eyescolor" : 10,
    "earcolor" : 10,
    "armslegscolor" : 10,
    "bellycolor" : 10,
    "tailcolor" : 10,
    "trunkcolor" : 10,
    "vasecolor" : 10,
    "eyeshape" : 1,
    "nailshape" : 1,
    "decorationwings" : 1,
    "animation" :  1,
//  "lastNum" :  1,
//  "decorationSidescolor" : 13,
//  "decorationPattern" : 1,
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
  $('#dnahat').html(defaultDNA.hatcolor);
  $('#dnaeyes').html(defaultDNA.eyescolor);
  $('#dnaear').html(defaultDNA.earcolor);
  $('#dnaarmslegs').html(defaultDNA.armslegscolor);
  $('#dnabelly').html(defaultDNA.bellycolor);
  $('#dnatail').html(defaultDNA.tailcolor);
  $('#dnatrunk').html(defaultDNA.trunkcolor);
  $('#dnavase').html(defaultDNA.vasecolor);
  $('#dnaeyeshape').html(defaultDNA.eyeshape);
  $('#dnanaildecoration').html(defaultDNA.nailshape);
  $('#dnawings').html(defaultDNA.decorationwings)
  $('#dnaanimation').html(defaultDNA.animation);
  //$('#dnaspecial').html(defaultDNA.lastNum)
  //$('#dnadecoration').html(defaultDNA.decorationPattern)
  //$('#dnadecorationSides').html(defaultDNA.decorationSidescolor)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnahat').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnaarmslegs').html()
    dna += $('#dnabelly').html()
    dna += $('#dnatail').html()
    dna += $('#dnatrunk').html()
    dna += $('#dnavase').html()
    dna += $('#dnaeyeshape').html()
    dna += $('#dnanaildecoration').html()
    dna += $('#dnawings').html()
    dna += $('#dnaanimation').html()
  //dna += $('#dnaspecial').html()

    return dna.toString()
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    hatColor(colors[dna.hatcolor],dna.hatcolor)
    $('#hatcolor').val(dna.hatcolor)
    eyesColor(colors[dna.eyescolor],dna.eyescolor)
    $('#eyescolor').val(dna.headcolor)
    earColor(colors[dna.earcolor],dna.earcolor)
    $('#earcolor').val(dna.earcolor)
    armsLegsColor(colors[dna.armslegscolor],dna.armslegscolor)
    $('#armslegscolor').val(dna.armslegscolor)
    bellyColor(colors[dna.bellycolor],dna.bellycolor)
    $('#bellycolor').val(dna.bellycolor)
    tailColor(colors[dna.tailcolor],dna.tailcolor)
    $('#tailcolor').val(dna.tailcolor)
    trunkColor(colors[dna.trunkcolor],dna.trunkcolor)
    $('#trunkcolor').val(dna.trunkcolor)
    vaseColor(colors[dna.vasecolor],dna.vasecolor)
    $('#vasecolor').val(dna.vasecolor)
    eyeVariation(dna.eyeshape)
    $("#dnaeyeshape").val(dna.eyeshape)
    decorationNailVariation(dna.nailshape)
    $("#dnanaildecoration").val(dna.nailshape)
    animationVariation(dna.animation)
    $("#animation").val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)

})
$('#earcolor').change(()=>{
    var colorVal = $('#earcolor').val()
    earColor(colors[colorVal],colorVal)
})

$('#hatcolor').change(()=>{
    var colorVal = $('#hatcolor').val()
    hatColor(colors[colorVal],colorVal)
})

$('#eyescolor').change(()=>{
    var colorVal = $('#eyescolor').val()
    eyesColor(colors[colorVal],colorVal)
})


$('#armslegscolor').change(()=>{
    var colorVal = $('#armslegscolor').val()
    armsLegsColor(colors[colorVal],colorVal)
})

$('#bellycolor').change(()=>{
    var colorVal = $('#bellycolor').val()
    bellyColor(colors[colorVal],colorVal)
})

$('#tailcolor').change(()=>{
    var colorVal = $('#tailcolor').val()
    tailColor(colors[colorVal],colorVal)
})

$('#trunkcolor').change(()=>{
    var colorVal = $('#trunkcolor').val()
    //var colorVal2 = $('#wingcolor').val()
    trunkColor(colors[colorVal],colorVal)
  //  trunkColor(color2s[colorVal2],colorVal2)
//    decorationWings(colors[colorVal],colorVal)

})

$('#vasecolor').change(()=>{    
    var colorVal = $('#vasecolor').val()
    vaseColor(colors[colorVal],colorVal)
})

// $("#kittyId" + i).find   ?
$('#eyeshape').change(()=>{
   
    var EyeShapeNum = parseInt($('#eyeshape').val())
      eyeVariation(EyeShapeNum);
      console.log("SHAPPPPIE", EyeShapeNum)
})

$('#decorationnail').change(()=>{
    var shape = parseInt($('#decorationnail').val())
   decorationNailVariation(shape)
})

$('#wingshapedec').change(()=>{
    var shape = parseInt($('#wingshapedec').val())
   decorationWings(shape)
})

$('#animation').change(()=>{
    var animationVal = parseInt($('#animation').val())
  animationVariation(animationVal)
})
