
function setPsurname() {

    var surname = $("#surname").val();
    console.log("this is the surname: " + surname)
    const p2surname = document.querySelector('#p2surname');
    p2surname.innerHTML = surname;
    
}

$(document).ready(function () {
    $("#surname").keyup(setPsurname);
});



function setPfirstname() {
    
    var firstname = $("#firstname").val();
    console.log("this is the firstname: " + firstname)
    const p2firstname = document.querySelector('#p2firstname');
    p2firstname.innerHTML = firstname;
    
}

$(document).ready(function () {
    $("#firstname").keyup(setPfirstname);
});




function setPlastname() {
    
    var lastname = $("#lastname").val();
    console.log("this is the lastname: " + lastname)
    const p2lastname = document.querySelector('#p2lastname');
    p2lastname.innerHTML = lastname;
    
}

$(document).ready(function () {
    $("#lastname").keyup(setPlastname);
});




function setPemail() {
    
    var email = $("#email").val();
    console.log("this is the email: " + email)
    const p2email = document.querySelector('#p2email');
    p2email.innerHTML = email;
    
}

$(document).ready(function () {
    $("#email").keyup(setPemail);
});




function setPcontact() {
    
    var contact = $("#contact").val();
    console.log("this is the contact: " + contact)
    const p2contact = document.querySelector('#p2contact');
    p2contact.innerHTML = contact;
    
}

$(document).ready(function () {
    $("#contact").keyup(setPcontact);
});




function setPalt_contact() {
    
    var alt_contact = $("#alt_contact").val();
    console.log("this is the alt_contact: " + alt_contact)
    const p2alt_contact = document.querySelector('#p2alt_contact');
    p2alt_contact.innerHTML = alt_contact;
    
}

$(document).ready(function () {
    $("#alt_contact").keyup(setPalt_contact);
});




function setPUTME() {
    
    var UTME = $("#UTME").val();
    console.log("this is the UTME: " + UTME)
    const p2UTME = document.querySelector('#p2UTME');
    p2UTME.innerHTML = UTME;
    
}

$(document).ready(function () {
    $("#UTME").keyup(setPUTME);
});



































function setPfir_select() {
    
    var fir_select = $("#fir_select").val();
    console.log("this is the fir_select: " + fir_select)
    const p2fir_select = document.querySelector('#p2fir_select');
    p2fir_select.innerHTML = fir_select;
    
}

$(document).ready(function () {
    $("#fir_select").keyup(setPfir_select);
});




function setPsec_select() {
    
    var sec_select = $("#sec_select").val();
    console.log("this is the sec_select: " + sec_select)
    const p2sec_select = document.querySelector('#p2sec_select');
    p2sec_select.innerHTML = sec_select;
    
}

$(document).ready(function () {
    $("#sec_select").keyup(setPsec_select);
});