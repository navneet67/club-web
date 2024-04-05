document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Simulate form submission (replace with actual AJAX request)
        setTimeout(() => {
            responseDiv.textContent = "Message sent successfully!";
            contactForm.reset();
        }, 1000);
    });
});
