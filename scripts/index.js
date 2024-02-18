const seatBtn = document.getElementsByClassName('seat-btn');
 let availableSeat = 40;
 let totalSeatBooking = 0;
 let totalPrice = 0;


for(const btn of seatBtn){

   btn.addEventListener('click', function eventHandler(){
   btn.classList.add('bg-green-300');
   availableSeat -= 1;
    const available = document.getElementById('available-seat');
    available.innerText = availableSeat;
    
    totalSeatBooking += 1;
    if(totalSeatBooking > 4){
        btn.removeEventListener('click', eventHandler());
        return;
    }
   
    const booking = document.getElementById('seat-booking');
    booking.innerText = totalSeatBooking;

    const placeName = btn.innerText;

    const ticketPrice = document.getElementById('ticket-price');
    const price = ticketPrice.innerText;

    const selectedContainer = document.getElementById('place-name');

 const li = document.createElement('li');
    
     const p = document.createElement('p');
   p.innerText = placeName;

   const p3 = document.createElement('p');
   p3.innerText = 'Economy';

    const p2 = document.createElement('p');
    p2.innerText = price;


    li.appendChild(p);
    li.appendChild(p3);
    li.appendChild(p2);
    selectedContainer.appendChild(li);

    li.classList.add('flex');
    li.classList.add('gap-28');

     
const priceNum = parseInt(price);

 totalPrice += priceNum;

const num = document.getElementById('total-price');
const grand = document.getElementById('grand-total');

num.innerText = totalPrice;
grand.innerText = totalPrice;

 const coupon = document.getElementById('coupon');
coupon.addEventListener('keyup', function(event){
    const text = event.target.value;
    const couponBtn = document.getElementById('coupon-btn');
    const grandPrice = document.getElementById('grand-total');
  
   if(text === 'NEW15'){
        couponBtn.removeAttribute('disabled');
    
        const grandTotal = totalPrice - (totalPrice*0.15);
         grandPrice.innerText = grandTotal;
   }
   else if(text === 'Couple20'){
    couponBtn.removeAttribute('disabled');
    
    const grandTotal = totalPrice - (totalPrice*0.20);
     grandPrice.innerText = grandTotal;
   }
   
});

    




});

}



document.getElementById('name').addEventListener('keyup', function(event){
    const nameText = event.target.value;
    // const name = toString(nameText)
     const activateButton = document.getElementById('btn-next');
     if(typeof name === 'string'){
        activateButton.removeAttribute('disabled');
     }
})



document.getElementById('phone-number').addEventListener('keydown', function(event){
    const numb = event.target.value;
    const phnNum = parseInt(numb);
    console.log(numb)
     const activatedButton = document.getElementById('btn-next');
     if(typeof phnNum === 'number'){
        activatedButton.removeAttribute('disabled', true);
     }
     else{

     }
})







//  document.getElementById('coupon').addEventListener('keyup', function(event){
//     const text = event.target.value;
//    const couponBtn = document.getElementById('coupon-btn');

//    if(text === 'NEW15'){
//     couponBtn.removeAttribute('disabled');
//     }
      

  
//    else if(text === 'Couple20'){
//     couponBtn.removeAttribute('disabled');
//    }
//    else{
//      couponBtn.setAttribute('disabled', true);
//    }
//  });









function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
