const seatBtn = document.getElementsByClassName('seat-btn');
for(const btn of seatBtn){
    btn.addEventListener('click', function eventHandler(){
        setBackgroundColorById('seat-btn')
    })
}