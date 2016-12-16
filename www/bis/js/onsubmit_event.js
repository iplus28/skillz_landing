function ValidationEvent() {
  var coupon = document.getElementById("couponcode").value;
  return coupon == "beta10";
}

function ValidationEventTest() {
  var coupon = document.getElementById("couponcode").value;
  return coupon == "betatest";
}

function Change() {
  if (ValidationEvent()){
    document.getElementById("FinalAmount").innerHTML = "€9.90"
    }
	else if (ValidationEventTest) {
	document.getElementById("FinalAmount").innerHTML = "€0.51";
	}
}


