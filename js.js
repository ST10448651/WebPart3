
const enquiryForm = document.getElementById('enquiry-form');
enquiryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('service').value;
  if (name === '' || email === '' || service === '') {
    alert('Please fill in all fields');
  } else {
    alert('Form submitted');
  }
});


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    alert('Form submitted');
  }
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close');

document.querySelectorAll('.image-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const imageUrl = link.dataset.image;
    lightboxImage.src = imageUrl;
    lightbox.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  lightbox.style.display = 'none';
lightbox.addEventListener('click'), (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
}});
