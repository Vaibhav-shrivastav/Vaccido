// CONTACTFORM DATABASE STARTS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBBQNcTSWHp_3wsfITTMSaTQFndMcGKsuk",
    authDomain: "vaccido-c103d.firebaseapp.com",
    databaseURL: "https://vaccido-c103d-default-rtdb.firebaseio.com",
    projectId: "vaccido-c103d",
    storageBucket: "vaccido-c103d.appspot.com",
    messagingSenderId: "614444590128",
    appId: "1:614444590128:web:dc0dce475e6208840939f5"
};

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('Vaccido');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){

    var name = getElementVal('contact-name');
    var phone = getElementVal('contact-phone');
    var message = getElementVal('contact-message');

    console.log(name, phone, message);

    saveMessages(name, phone, message);

    document.getElementById('success').style.display = 'block';

    setTimeout(() =>{
        document.getElementById('success').style.display = 'none';
    },3000);

    document.getElementById('contact-form').reset();
    e.preventDefault();

}

const saveMessages = (name, phone, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        phone: phone,
        message: message
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value ;
}
// CONTACT-FORM DATABASE ENDS HERE

const user = [
    {
        name: 'Ansha',
        childName: 'Tomesh',
        childAge: '1',
        childGender: 'male',
        childDOB: '1/1/2021',
        childBloodGrp: 'AB+',
        email: 'ansha@gmail.com',
        pass:'123',
        image: 'test1-child.jpg',
        vaccimg : 'ansha-vaccine.png'
    },
    {
        name: 'Ananya',
        childName: 'Aditi',
        childAge: '1.5',
        childGender: 'female',
        childDOB: '1/1/2020',
        childBloodGrp: 'O+',
        email: 'ananya@gmail.com',
        pass:'456',
        image: 'test2-child.jpg',
        vaccimg: 'ananya-vaccine.png'
    },
    {
        name: 'Saurav',
        childName: 'Maulika',
        childAge: '10',
        childGender: 'female',
        childDOB: '1/1/2012',
        childBloodGrp: 'O+',
        email: 'saurav@gmail.com',
        pass:'123',
        image: 'test2-child.jpg',
        vaccimg: 'ananya-vaccine.png'
    }

];

const email = document.getElementById('email')
const password = document.getElementById('password')
const loginButton = document.getElementById('login')

loginButton.addEventListener("click", login)

function login(e){
    user.map((u) => {
        if(u.email === email.value && u.pass === password.value){
            document.body.innerHTML = `
            <div class="container">
            <br>
            <h2>Welcome ${u.name},</h2>
            <h3 class="text-secondary">Dashboard</h3>
            <a href="index.html" class="btn btn-outline-warning">Logout</a>
        
        </div><br>
        <div class="container" style="background-color: rgb(248, 248, 242); padding:10px">
            <div class="container" >
                <h2 class="bg-primary text-center p-1" style="color: white;">Child Vaccination Profile</h2>
            </div>
            <span class="" style="float: right; margin-right: 230px; margin-top: 50px;">
                <img style="height: 200px;" src="QR-code.jpeg" alt=""><br><br>
                <a href="appointments.html" target="_blank" class="btn btn-primary">Book vaccine</a><br> <br>
                <a href="#vaccine-history" class="btn btn-secondary" style="color: white;">Vaccination History</a>
            </span>
            <div class=" container float-left">
                <h3 class="text-secondary ml-4" style="font-family: 'Poppins'"><b>Name:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>${u.childName}</span> </h3>
                <h3 class="text-secondary ml-4" style="font-family: 'Poppins'"><b>Age:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${u.childAge}</span> </h3>
                <h3 class="text-secondary ml-4" style="font-family: 'Poppins'"><b>Gender:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${u.childGender}</span> </h3>
                <h3 class="text-secondary ml-4" style="font-family: 'Poppins'"><b>Date of Birth:</b> <span>${u.childDOB}</span> </h3>
                <h3 class="text-secondary ml-4" style="font-family: 'Poppins'"><b>Blood Group:</b> <span>${u.childBloodGrp}</span> </h3>
            </div>
            <div class="container float-right mr-5">
                <img style="height: 180px" src="${u.image}" alt="">
            </div>
            <br><hr><br>
            <div id='vaccine-history' class="container">
                <button class="btn btn-outline-primary">Vaccination History</button><br><br>
            <div class="container text-center" >
                <img class="text-center" style="height: 550px;" src="${u.vaccimg}" alt="">
            </div>
        </div><br>
            </div>
        </div>
            `;
            document.getElementById('user-login').reset();
            return ;

        }else{
            document.getElementById('login-alert').style.display = 'block';
        }
    })

    

    e.preventDefault();
}