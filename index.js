//console.log("hello bitam")clss ni. & idni#

// let name = document.querySelector('#name').value;
// let address = document.querySelector('#address').value;
// let email = document.querySelector('#email').value;
// let comment = document.querySelector('#msg').value;
// console.log(name);
// console.log(address);
// console.log(email);
// console.log(comment);
//tumetngneza fction
function haabsa(){

let name = document.querySelector('#name').value;
let address = document.querySelector('#address').value;
let email = document.querySelector('#email').value;
let comment = document.querySelector('#msg').value;
//store varible zetu
localStorage.setItem("names",name);
localStorage.setItem("addresses",address);
localStorage.setItem("email",email);
localStorage.setItem("comment",comment);

}

//call methdyt fcntion

//kuvuta data ktk local strage ifanane y juu
let data1 = localStorage.getItem('names');

let data2 = localStorage.getItem('addresses');

let data3 = localStorage.getItem('email');

let data4 = localStorage.getItem('comment');

//check data zpoo na kusply wapii
let haan = document.getElementById('myname');
let han = document.getElementById('myadd');
let hn = document.getElementById('mye');
let hana = document.getElementById('myc');


if(data1 && data2){
    if(data3 && data4){//jina lolote hapa ``name``
        haan.innerHTML =  `name: ${data1}`;
        han.innerHTML = `adddress : ${data2}`;
        hn.innerHTML = `email: ${data3}`;
        hana.innerHTML = `comment : ${data4} `;


    }
}