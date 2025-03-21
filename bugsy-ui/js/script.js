    function flipCard(card) {
    card.classList.toggle("flipped");
  }

  document.querySelector('.shiny-cta').addEventListener('click', () => {
    window.open(
      'https://docs.google.com/forms/d/1yUad3S1KrFy0hZ6TJxbNnPmmOLz7B80mnxQZR961kHs/edit', 
      '_blank' // opens in a new tab
    );
  });
  