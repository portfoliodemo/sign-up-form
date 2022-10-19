
// Submit Form Button
const submitBtn = document.getElementById('submit-btn');

// Get the password fields
const enterPassword = document.querySelector('#enter-password');
const confirmPassword = document.querySelector('#confrim-password');

// TODO 
// Add an event listener to the submitBtn, if invalid prevent submission.. 
// submitBtn.addEventListener('click', () => {
//     // Check password fields for null && || non-matching strings/values
//     if (enterPassword === null || confirmPassword === null ) {
//         submitBtn.addEventListener('click', function(event) {
//             event.preventDefault()
//         });
//         alert('Please enter a valid password in both fields.');
//     }
// });