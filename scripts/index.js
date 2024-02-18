const seatBtn = document.getElementsByClassName('seat-btn');
 let availableSeat = 40;
 let totalSeatBooking = 0;
 let totalPrice = 0;
for(const btn of seatBtn){

   btn.addEventListener('click', function(){
   btn.classList.add('bg-green-300');
   availableSeat -= 1;
    const available = document.getElementById('available-seat');
    available.innerText = availableSeat;
    
    totalSeatBooking += 1;
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

num.innerText = totalPrice;

});

}










function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
