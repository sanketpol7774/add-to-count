var count= 0;



function addtocount(){
  count++;
  document.getElementById('counter').value= count;
}

function removecount(){
if(count >0 )
    count--;
document.getElementById('counter').value= count;
}





function addtocounter(){
  count++;
  document.getElementById('sanket').value= count;
}

function removecounter(){
if(count >0 )
    count--;
document.getElementById('sanket').value= count;
}

function removeAll(){
    count=0;
    document.getElementById('sanket').value= count;
}


function changeCount(counterId, priceId, unitPrice, increment) {
  let input = document.getElementById(counterId);
  let value = parseInt(input.value);
  value += increment;
  if (value < 0) value = 0;
  input.value = value;

  let totalPrice = value * unitPrice;
  document.getElementById(priceId).innerText = `${totalPrice}.rs`;
}





























addtocart();