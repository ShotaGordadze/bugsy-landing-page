    function flipCard(card) {
    card.classList.toggle("flipped");
  }

  document.querySelector('.shiny-cta').addEventListener('click', () => {
    window.open(
      'https://drive.google.com/file/d/1uoXeN7bg4h_D961dk_aFUpOnJKL0IHOJ/view?usp=sharing', 
      '_blank' // opens in a new tab
    );
  });
  