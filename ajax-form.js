/**
 * AJAX Form Submission with Feedback
 * ----------------------------------
 * This script handles form submission using AJAX, sending form data
 * to a server endpoint and providing user feedback without reloading.
 */

document.querySelectorAll('.js-ajax-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const receiverEmail = this.dataset.recipient || 'default@example.com';
        formData.append('receiver_email', receiverEmail);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/your-server-endpoint', true);
        xhr.onload = function() {
            const responseMessage = document.querySelector('.js-response-message');
            if (xhr.status === 200) {
                responseMessage.textContent = 'Message sent successfully!';
                responseMessage.classList.add('success');
                form.reset();
            } else {
                responseMessage.textContent = 'Error sending message.';
                responseMessage.classList.add('error');
            }
        };
        xhr.send(formData);
    });
});
