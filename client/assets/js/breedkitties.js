$('.myCatsRowsPlusColumns').on('click', function(evt) {
  if ($(this).find('input:checked').length > 2) {
    $(evt.target).prop("checked", false);
  
  };
});


function getOptions() {
  var frm = document.getElementById("myform2");
  var chk = frm.querySelectorAll('input[type=checkbox]:checked');
  var vals = [];
  for (var i = 0; i < chk.length; i++) {
    vals.push(chk[i].value);
    
  }
    alert(JSON.stringify(  "You have selected Mum Kitty Id:" + " " + vals[0] + " " + "Dad Kitty Id:" + " " + vals[1]));
  let mumId = vals[0];
  let dadId = vals[1];

  return [mumId, dadId];
}






