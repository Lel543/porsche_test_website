document.addEventListener('DOMContentLoaded', function() {
  
    const slides = document.querySelectorAll('.slide');
    
        function setActiveSlide(clickedSlide) {
          slides.forEach(slide => {
            slide.classList.remove('active');
          });
          clickedSlide.classList.add('active');
        }
        
        slides.forEach(slide => {
          slide.addEventListener('click', () => {
            setActiveSlide(slide);
          });
        });
    
  const fullPrice = document.getElementById('price-display'); // Platz für die Preisanzeige
  const baseprice = document.getElementById('baseprice-display'); // Platz für die Preisanzeige
  const addpriceDisplay = document.getElementById('additionalprice-display'); // Platz für die Preisanzeige
  // Grundpreise
  const basePrice = 193417; // Grundpreis des Autos
  const wheelPrices = {
      'standard': 0,
      'gray': 1190,
      'gold': 1190 // Neodym als gold
  };

  const colorPrices = {
      'black': 1000,
      'white': 0, // Standardfarbe
      'red': 1500,
      'blue': 1900
  };

  let carColor = 'white';
  let wheelColor = 'standard';

  // Funktion zur Aktualisierung des Bildes
  function updateCarImage() {
      carImage.src = `./img/${carColor}-${wheelColor}.webp`;
      updatePrice(); 
  }

  function updatePrice() {
    const addprice = wheelPrices[wheelColor] + colorPrices[carColor];
    const totalPrice = basePrice + addprice; // Update total price calculation

    addpriceDisplay.textContent = `Aufpreis: ${addprice} €`; // Correctly update additional price display
    baseprice.textContent = `Grundpreis: ${basePrice} €`; // Correctly update base price display
    fullPrice.textContent = `Gesamtpreis: ${totalPrice} €`; // Correctly update total price display
}


  // Event Listener für die Karosseriefarbe
  document.getElementById('black-btn').addEventListener('click', function() {
      carColor = 'black';
      updateCarImage();
  });

  document.getElementById('white-btn').addEventListener('click', function() {
      carColor = 'white';
      updateCarImage();
  });

  document.getElementById('red-btn').addEventListener('click', function() {
      carColor = 'red';
      updateCarImage();
  });

  document.getElementById('blue-btn').addEventListener('click', function() {
      carColor = 'blue';
      updateCarImage();
  });

  // Event Listener für die Felgenfarbe
  document.getElementById('standard-btn').addEventListener('click', function() {
      wheelColor = 'standard';
      updateCarImage();
  });

  document.getElementById('gray-btn').addEventListener('click', function() {
      wheelColor = 'gray';
      updateCarImage();
  });

  document.getElementById('neodym-btn').addEventListener('click', function() {
      wheelColor = 'gold'; // Neodym
      updateCarImage();
  });

  // Initialisierung
  updateCarImage();
  
});
