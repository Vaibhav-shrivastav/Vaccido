document.getElementById('one').addEventListener('click', bookone);
document.getElementById('two').addEventListener('click', booktwo);
document.getElementById('three').addEventListener('click', bookthree);

function bookone(){
    document.getElementById('one').innerHTML = 'Appointment booked';

    document.getElementById('success').style.display = 'block';

    setTimeout(() =>{
        document.getElementById('success').style.display = 'none';
    },4000);

}

function booktwo(){
    document.getElementById('two').innerHTML = 'Appointment booked';

    document.getElementById('success').style.display = 'block';

    setTimeout(() =>{
        document.getElementById('success').style.display = 'none';
    },3000);

}

function bookthree(){
    document.getElementById('three').innerHTML = 'Appointment booked';

    document.getElementById('success').style.display = 'block';

    setTimeout(() =>{
        document.getElementById('success').style.display = 'none';
    },4000);

}