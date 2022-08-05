let headImg = document.getElementById('headImg');
headImg.src = users.results[0].picture.large;

let heading = document.getElementById('heading');
heading.innerHTML = "Hi, I am " + users.results[0].name.title + ". " + users.results[0].name.first + " " + users.results[0].name.last;

let email = document.getElementById('email');
email.innerHTML = "My email is " + users.results[0].email;

let birthday = document.getElementById('bday');
birthday.innerHTML += users.results[0].dob.date.substring(8,10)+ "/" + users.results[0].dob.date.substring(5,7)+ "/" + users.results[0].dob.date.substring(0,4);

let address = document.getElementById('address');
address.innerHTML += users.results[0].location.street.number + " " + users.results[0].location.street.name + " Street";

let phoneNumber = document.getElementById('phone');
phoneNumber.innerHTML += users.results[0].phone;

let password = document.getElementById('password');
password.innerHTML += users.results[0].login.password;

function randomize(){
    let randomIndex = Math.floor(Math.random()*users.results.length);
    let randomUser = users.results[randomIndex];
    headImg.src = randomUser.picture.large;
    heading.innerHTML = "Hi, I am " + randomUser.name.title + ". " + randomUser.name.first + " " + randomUser.name.last;
    email.innerHTML = "My email is " + randomUser.email;
    birthday.innerHTML = "My birthday is " + randomUser.dob.date.substring(8,10)+ "/" + randomUser.dob.date.substring(5,7)+ "/" + randomUser.dob.date.substring(0,4);
    address.innerHTML = "My address is " + randomUser.location.street.number + " " + randomUser.location.street.name;
    phoneNumber.innerHTML = "My phone number is " + randomUser.phone;
    password.innerHTML = "My password is " + randomUser.login.password;
}

const randomizer = document.getElementById("randomizerButton");
randomizer.onclick = function(event){
    event.preventDefault();
    randomize();
}