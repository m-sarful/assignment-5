const seatBtn = document.getElementsByClassName('seat-btn');
 let availableSeat = 40;
 let totalSeatBooking = 0;
 let totalPrice = 0;


for(const btn of seatBtn){

   btn.addEventListener('click', function eventHandler(){
   

      btn.classList.add('pointer-events-none');
   btn.classList.add('bg-[#1DD100]');
   btn.classList.add('text-white');
   availableSeat -= 1;
    const available = document.getElementById('available-seat');
    available.innerText = availableSeat;
    
    totalSeatBooking++;
    if(totalSeatBooking > 4){
        btn.classList.remove('bg-[#1DD100]');
        btn.classList.remove('text-white');


        alert('you can booking only 4 seats');
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
    li.classList.add('gap-24');
    li.classList.add('flex-wrap');

     
const priceNum = parseInt(price);

 totalPrice += priceNum;

const num = document.getElementById('total-price');
const grand = document.getElementById('grand-total');

num.innerText = totalPrice;
grand.innerText = totalPrice;

 const coupon = document.getElementById('coupon');
coupon.addEventListener('keyup', function(event){
    const text = event.target.value;
    const grandPrice = document.getElementById('grand-total');
  
   if(text === 'NEW15'){
     const hideElement = document.getElementById('coupon-btn');
      hideElement.addEventListener('click', function(){
        const hideDiv = document.getElementById('coupon-div');
        hideDiv.classList.add('hidden');
        const grandTotal = totalPrice - (totalPrice*0.15);
         grandPrice.innerText = grandTotal;
      })
   }
   else if(text === 'Couple 20'){
    const hideElement = document.getElementById('coupon-btn');
      hideElement.addEventListener('click', function(){
        const hideDiv = document.getElementById('coupon-div');
        hideDiv.classList.add('hidden');
        const grandTotal = totalPrice - (totalPrice*0.20);
         grandPrice.innerText = grandTotal;
      })


   }
   
});

              
    




});

}


