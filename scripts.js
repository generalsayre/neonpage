      const hoverSound = new Audio('https://assets.onecompiler.app/43jyj7jhc/43ks4fre7/angel-choir.mp3');
      hoverSound.volume = 0.2;
      const links = document.querySelectorAll('.links');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    });