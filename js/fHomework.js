/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  if (document.getElementById("same").checked) {
    document.getElementById("billingName").value = document.getElementById("shippingName").value;
    document.getElementById("billingZip").value = document.getElementById("shippingZip").value;

  }
 else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
}

// function billingFunction(){
// 		if (document.getElementById('same').checked){

// 			document.getElementById('billingName').value=document.getElementById('shippingName').value;
// 			document.getElementById('billingZip').value=document.getElementById('shippingZip').value;
//       // document.getElementById('nick').style.display="inline";
//       // document.getElementById('nickname').setAttribute('required',true);
// 		}
// 		else{ 			

// 			document.getElementById('billingName').value="";
// 			document.getElementById('billingZip').value="";

// 			document.getElementById('billingName').removeAttribute('required');
// 			document.getElementById('billingZip').removeAttribute('required');

// 			// document.getElementById('nickname').removeAttribute('required');
// 			// document.getElementById('nick').style.display="none";
// 		}
// 	}
