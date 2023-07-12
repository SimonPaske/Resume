function sendMail(contactForm) {
    emailjs.send('service_htavrsk', 'template_6ekgtgt', {
        from_name: contactForm.name.value,
        from_email: contactForm.email.value,
        message: contactForm.projectsummary.value
    })
        .then(
            function (response) {
                alert('Email sent successfully!');
                console.log("SUCCESS", response);
                setTimeout(function () {
                    location.reload();
                }, 2000);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}


// function sendMail(contactForm) {
//     document.getElementById('submitbtn').addEventListener('submit', function (event) {
//         event.preventDefault();    

//         var contactForm = {
//             "from_name": contactForm.name.value,
//             "from_email": contactForm.email.value,
//             "message": contactForm.message.value
//         };

//         emailjs.send('service_htavrsk', 'template_6ekgtgt', contactForm)
//             .then(function (response) {
//                 console.log('SUCCESS!', response.status, response.text);
//             }, function (error) {
//                 console.log('FAILED...', error);
//             });
//     })
// }