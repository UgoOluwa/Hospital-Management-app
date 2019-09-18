var patientContainer = document.getElementById("refresh");


var checkPatient = document.getElementById("update");

checkPatient.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest(); 
    ourRequest.open('GET', 'http://localhost:3000/patients');
    ourRequest.onload =  function(){
        if(ourRequest.status>= 200 && ourRequest.status < 400){
            var patients = JSON.parse(ourRequest.responseText);
            checkPatients(patients);
        }
        else {
            console.log("Server Error");
        }
            
    };

    ourRequest.onerror = function(){
        console.log("conection Error");
    };

    ourRequest.send();
});





// create patient
$(document).on('submit', '#information', function(event){
    // get the form data
    let formData = {
        'name' : $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
        'address': $('input[name=address]').val(),
        'gender': $('input[name=gender]').val(),
        'bloodgroup': $('input[name=bloodgroup]').val(),
        'age': $('input[name=age]').val(),
    }
    // process the form
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : 'http://localhost:3000/patients', // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true
    })
    // using the done promise callback
    .done(function(data) {
        alert("Checked-in successfully") 
        $('#information').each(function(){
            this.reset();
        });
    });
    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
});







//Admin Log in

function hiss(){
    var usernameInput = document.getElementById('admin-name');
    var passwordInput = document.getElementById('admin-password');

    var username = "admin";
    var password = "finalbustop9876";

    if(usernameInput.value == username && passwordInput.value == password){
        window.open("C:/Users/press crew/Desktop/Hospital Management Solution/admin.html");
        
    }
    else {
        alert("Incorect Username or Password.");
    }

}




//Update Patient

$(document).on('submit', '#update-btn', function(){
    let id = $(this).attr('data-id');
    $.getJSON('http://localhost:3000/patients/' + id, function(data){
        
    })

})

