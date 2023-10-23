// document.getElementById('bookingForm').addEventListener('submit', function(e) {
//     e.preventDefault(); 
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const timeForCall = document.getElementById('timeForCall').value;

//     console.log("Form Submitted with the following data:");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Phone:", phone);
//     console.log("Time for Call:", timeForCall);

//     //storing data in localStorage

//     localStorage.setItem('name',name);
//     localStorage.setItem('email',email);
//     localStorage.setItem('phone',phone);
//     localStorage.setItem('timeForCall',timeForCall)

// });


document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        timeForCall: document.getElementById('timeForCall').value
    };

    console.log("Form Submitted with the following data:");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Phone:", formData.phone);
    console.log("Time for Call:", formData.timeForCall);

    // Send the formData to crudcrud.com via a POST request using axios
    axios.post('https://crudcrud.com/api/your_unique_endpoint_identifier/objects', formData)
        .then(response => {
            console.log('Data successfully posted!', response.data);
        })
        .catch(error => {
            console.error('There was an error posting the data!', error);
        });
});
