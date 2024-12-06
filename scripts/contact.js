// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

function submission() {

    let submitted = '<p class="submitted">Thank you for your message!</p>';

    document.getElementById("contact-page").outerHTML = submitted;
}

document.getElementById("submit-button").addEventListener("click", submission);
