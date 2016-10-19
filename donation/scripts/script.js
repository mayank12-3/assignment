var total = parseInt(0);

function myFunction() {
  var value = parseInt(document.getElementById('txt').value);
  total = total + value;
  document.getElementsByTagName("PROGRESS")[0].setAttribute("value", total);
  if (total >= 1000) {
		$('#myModal').modal('show')
    total = 0;
    return document.getElementById("myparagraph").innerHTML = "All done";
  }
  return document.getElementById("myparagraph").innerHTML = 1000 - total + " still needed for this project";
}