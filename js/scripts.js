function cup(cups)
{
  return(cups*250);
}
function ounce(ounces)
{
  return(ounces*30);
}
function pint(pints)
{
  return(pints*500);
}

$(document).ready(function()
{
  $("form#conversion1").submit(function(event)
  {
    event.preventDefault();
    var cup_input = parseFloat($("#cup").val());
    var result =cup(cup_input);
    $("#output1").text(result);



   });
});

$(document).ready(function()
{
  $("form#conversion2").submit(function(event)
  {
    event.preventDefault();
    var ounce_input = parseFloat($("#ounce").val());
    var result =ounce(ounce_input);
    $("#output2").text(result);



   });
});

$(document).ready(function()
{
  $("form#conversion3").submit(function(event)
  {
    event.preventDefault();
    var pint_input = parseFloat($("#pint").val());
    var result =pint(pint_input);
    $("#output3").text(result);



   });
});
