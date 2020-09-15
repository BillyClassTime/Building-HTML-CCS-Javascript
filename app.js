'use strict'

// This is a single-line comment
/* Here's a 
multi-line
comment. */
if (true) {
    alert();
}
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');

