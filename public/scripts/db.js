
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
        // window.open("C:/Users/press crew/Desktop/Hospital Management Solution/admin.html");
        window.location = './admin.html'
        
    }
    else {
        alert("Incorect Username or Password.");
    }

}




//Update Patient

$(document).on('submit', '#update-patient', function(){
    event.preventDefault();
    var updateInfo = $('input[name=get]').val();
    console.log(updateInfo);
    $.getJSON("http://localhost:3000/patients?name="+updateInfo, function(data){
        console.log(data[0].name);
        $('#update-id-info').val(data[0].id);
        $('#update-name-info').val(data[0].name);
        $('#update-email-info').val(data[0].email);
        $('#update-phone-info').val(data[0].phone);
        $('#update-address-info').val(data[0].address);
        $('#update-gender-info').val(data[0].gender);
        $('#update-bloodgroup-info').val(data[0].bloodgroup);
        $('#update-age-info').val(data[0].age);
    })

})





//refresh log

$(document).ready(function(){
        $.getJSON("http://localhost:3000/patients/", function(data){
        var patientData = '';
        $.each(data, function(key, value){
            patientData += '<tr>';
            patientData += '<td>'+value.id+'</td>';
            patientData += '<td>'+value.name+'</td>';
            patientData += '<td>'+value.email+'</td>';
            patientData += '<td>'+value.phone+'</td>';
            patientData += '<td>'+value.address+'</td>';
            patientData += '<td>'+value.gender+'</td>';
            patientData += '<td>'+value.bloodgroup+'</td>';
            patientData += '<td>'+value.age+'</td>';
            patientData += '</tr>';

        })
        $("#patient-info").append(patientData);
    })
})


//Read a Patient

$(document).on('submit', '#refresh-log', function(event){
    event.preventDefault();
    var serch = $('input[name=search]').val();
    console.log(serch);
    var info = '';
    $.getJSON("http://localhost:3000/patients?name="+serch, function(value){
            console.log(value);
            info+= '<tr>';
            info += '<td>'+value[0].id+'</td>';
            info += '<td>'+value[0].name+'</td>';
            info += '<td>'+value[0].email+'</td>';
            info += '<td>'+value[0].phone+'</td>';
            info += '<td>'+value[0].address+'</td>';
            info += '<td>'+value[0].gender+'</td>';
            info += '<td>'+value[0].bloodgroup+'</td>';
            info += '<td>'+value[0].age+'</td>';
            info+= '</tr>';
            $("#info-table").append(info);
            console.log(info);
        })
        error: (function(){
            alert("Patient is not checked in")
        })

    })







    //delete Patien-

$(document).on('submit', '#delete-form', function(event){
    event.preventDefault();
    var patientId = $('input[name=id-search]').val();
    let deleteJob = confirm("Are you sure you want to check out this patient");
    if (deleteJob == true){
        $.ajax({
            type        : 'DELETE', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'http://localhost:3000/patients/'+ patientId, // the url where we want to POST
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
        // using the done promise callback
        .done(function(data) {
            alert("Patient checked out successfully")
            window.location = "./admin.html"
        });
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    };

})



$(document).on('submit', '#update-form', function(event){
    // get the form data
    let formData = {
        'name' : $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'phone': $('input[name=phone]').val(),
        'address': $('input[name=address]').val(),
        'gender': $('input[name=gender]').val(),
        'bloodgroup': $('input[name=bloodgroup]').val(),
        'age': $('input[name=age]').val(),
        'id': $('input[name=id]').val(),
    }
    let int = $('input[name=id]').val();
    // process the form
    $.ajax({
        type        : 'PATCH', // define the type of HTTP verb we want to use (POST for our form)
        url         : 'http://localhost:3000/patients/'+ $('input[name=id]').val(), // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode      : true
    })
    // using the done promise callback
    .done(function(data) {
        alert("updated successfully")
        window.location = "./admin.html" 
        $('#update-form').each(function(){
            this.reset();
        });
    });
    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
});
