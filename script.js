const form = document.querySelector('.contact-form');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;

  const formData = {
    name: name,
    email: email,
    message: message
  };

  try {
    const response = await fetch('https://formspree.io/f/xeogaapb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log('Success:', result);
    alert('Form submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the form.');
  }
});
