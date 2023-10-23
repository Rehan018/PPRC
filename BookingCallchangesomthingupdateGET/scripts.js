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


// document.getElementById('bookingForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//         timeForCall: document.getElementById('timeForCall').value
//     };

//     console.log("Form Submitted with the following data:");
//     console.log("Name:", formData.name);
//     console.log("Email:", formData.email);
//     console.log("Phone:", formData.phone);
//     console.log("Time for Call:", formData.timeForCall);

//     // Send the formData to crudcrud.com via a POST request using axios
//     axios.post('https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects', formData)
//         .then(response => {
//             const userDetails = response.data;
//             displayUserDetails([userDetails]); // Display the newly added user
//         })
//         .catch(error => {
//             console.error('There was an error posting the data!', error);
//         });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     if (e.target.classList.contains('delete-icon')) {
//         const userId = e.target.getAttribute('data-id');

//         axios.delete(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${userId}`)
//             .then(response => {
//                 e.target.parentElement.remove();
//             })
//             .catch(error => {
//                 console.error('There was an error deleting the user!', error);
//             });
//     }
// });

// function displayUserDetails(data) {
//     const container = document.getElementById('res');
//     data.forEach(user => {
//         container.innerHTML += `
//             <div>
//             Name:${user.name}<br>
//             Email:${user.email}<br>
//             Phone:${user.phone}<br>
//             Time for call:${user.timeForCall}<br><br>
//             </div>
//             `;
//     });
// }


// document.getElementById('bookingForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//         timeForCall: document.getElementById('timeForCall').value
//     };

//     const editingId = this.getAttribute('data-editing');
//     if (editingId) { // if in editing mode
//         axios.put(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${editingId}`, formData)
//             .then(response => {
//                 // Reset form after updating
//                 document.getElementById('name').value = '';
//                 document.getElementById('email').value = '';
//                 document.getElementById('phone').value = '';
//                 document.getElementById('timeForCall').value = '';

//                 this.removeAttribute('data-editing');
                
//                 // Refresh displayed data
//                 fetchAndDisplayData();
//             })
//             .catch(error => {
//                 console.error('There was an error updating the user!', error);
//             });
//     } else {
//         axios.post('https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects', formData)
//             .then(response => {
//                 const userDetails = response.data;
//                 displayUserDetails([userDetails]); // Display the newly added user
//             })
//             .catch(error => {
//                 console.error('There was an error posting the data!', error);
//             });
//     }
// });

// document.addEventListener('click', function(e) {
//     if (e.target.classList.contains('delete-icon')) {
//         const userId = e.target.getAttribute('data-id');

//         axios.delete(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${userId}`)
//             .then(response => {
//                 e.target.parentElement.remove();
//             })
//             .catch(error => {
//                 console.error('There was an error deleting the user!', error);
//             });
//     } else if (e.target.classList.contains('edit-icon')) {
//         const userId = e.target.getAttribute('data-id');

//         axios.get(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${userId}`)
//             .then(response => {
//                 const user = response.data;
//                 document.getElementById('name').value = user.name;
//                 document.getElementById('email').value = user.email;
//                 document.getElementById('phone').value = user.phone;
//                 document.getElementById('timeForCall').value = user.timeForCall;

//                 document.getElementById('bookingForm').setAttribute('data-editing', userId);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the user data!', error);
//             });
//     }
// });

// function fetchAndDisplayData() {
//     axios.get('https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects')
//         .then(response => {
//             const users = response.data;
//             displayUserDetails(users);
//         })
//         .catch(error => {
//             console.error('There was an error fetching all user data!', error);
//         });
// }

// function displayUserDetails(data) {
//     const container = document.getElementById('res');
//     container.innerHTML = ''; // Clear previous details
//     data.forEach(user => {
//         container.innerHTML += `
//             <div>
//                 Name:${user.name}<br>
//                 Email:${user.email}<br>
//                 Phone:${user.phone}<br>
//                 Time for call:${user.timeForCall}<br>
//                 <span class="edit-icon" data-id="${user._id}">&#9998;</span>
//                 <span class="delete-icon" data-id="${user._id}">&#10006;</span>
//                 <br><br>
//             </div>
//         `;
//     });
// }

// document.addEventListener('DOMContentLoaded', fetchAndDisplayData);



let currentEditingUserId = null; 

document.addEventListener('DOMContentLoaded', function() {
    fetchAndDisplayData(); 

    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if(currentEditingUserId) {
            updateUserData(currentEditingUserId);
        } else {
            addNewUserData();
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('edit-icon')) {
            const userId = e.target.getAttribute('data-id');
            populateFormWithUserData(userId);
        } else if (e.target.classList.contains('delete-icon')) {
            const userId = e.target.getAttribute('data-id');
            deleteUserData(userId, e.target.parentElement);
        }
    });
});

function addNewUserData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        timeForCall: document.getElementById('timeForCall').value
    };

    axios.post('https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects', formData)
        .then(() => {
            fetchAndDisplayData();
        })
        .catch(error => {
            console.error('There was an error posting the data!', error);
        });
}

function updateUserData(userId) {
    const updatedData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        timeForCall: document.getElementById('timeForCall').value
    };

    axios.put(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${userId}`, updatedData)
        .then(() => {
            fetchAndDisplayData();
            currentEditingUserId = null;
        })
        .catch(error => {
            console.error('Error updating the user data', error);
        });
}

function deleteUserData(userId, userElement) {
    axios.delete(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${userId}`)
        .then(() => {
            userElement.remove();
        })
        .catch(error => {
            console.error('There was an error deleting the user!', error);
        });
}

function populateFormWithUserData(userId) {
    axios.get(`https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects/${userId}`)
        .then(response => {
            const user = response.data;
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
            document.getElementById('timeForCall').value = user.timeForCall;
            currentEditingUserId = userId;
        })
        .catch(error => {
            console.error('There was an error fetching user data!', error);
        });
}

function fetchAndDisplayData() {
    axios.get('https://crudcrud.com/api/8df9cd2baebe408a87f1397d8406cd7a/objects')
        .then(response => {
            displayUserDetails(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching all user data!', error);
        });
}

function displayUserDetails(data) {
    const container = document.getElementById('res');
    container.innerHTML = '';  // Clearing the container
    data.forEach(user => {
        container.innerHTML += `
            <div>
                Name: ${user.name}<br>
                Email: ${user.email}<br>
                Phone: ${user.phone}<br>
                Time for call: ${user.timeForCall}<br>
                <span class="edit-icon" data-id="${user._id}" style="cursor: pointer; padding-right: 10px;">📝</span>
                <span class="delete-icon" data-id="${user._id}" style="cursor: pointer;">🗑️</span>
                <br><br>
            </div>
        `;
    });
}
