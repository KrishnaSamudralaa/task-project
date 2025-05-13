const radios = document.querySelectorAll('input[name="productOption"]');
const cards = document.querySelectorAll('.radio-card');

const detailMap = {
  option1: document.getElementById('option1-details'),
  option2: document.getElementById('option2-details'),
  option3: document.getElementById('option3-details'),
};

// Hide all initially
Object.values(detailMap).forEach(detail => detail.style.display = 'none');

// Event listener
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    // Hide all option sections
    Object.values(detailMap).forEach(detail => detail.style.display = 'none');

    // Remove active border
    cards.forEach(card => card.classList.remove('active'));

    if (radio.checked) {
      // Show selected details
      detailMap[radio.id].style.display = 'block';

      // Add active style to selected card
      radio.closest('.radio-card').classList.add('active');
    }
  });
});
