function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

document.addEventListener('DOMContentLoaded', function () {

  const leftSliderObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const leftSlider = entry.target.querySelector('.l-idle-1');

      if (entry.isIntersecting) {
        leftSlider.classList.add('l-slide');
        leftSliderObserver1.unobserve(entry.target); // Stop observing after adding the class
      }

    });
  });

  leftSliderObserver1.observe(document.querySelector('.l-idle-wrapper-1'));

  const leftSliderObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const leftSlider = entry.target.querySelector('.l-idle-2');

      if (entry.isIntersecting) {
        leftSlider.classList.add('l-slide');
        leftSliderObserver2.unobserve(entry.target);
      }

    });
  });

  leftSliderObserver2.observe(document.querySelector('.l-idle-wrapper-2'));

  const rightSliderObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const leftSlider = entry.target.querySelector('.r-idle-1');

      if (entry.isIntersecting) {
        leftSlider.classList.add('r-slide');
        rightSliderObserver1.unobserve(entry.target);
      }

    });
  });

  rightSliderObserver1.observe(document.querySelector('.r-idle-wrapper-1'));

  const rightSliderObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const leftSlider = entry.target.querySelector('.r-idle-2');

      if (entry.isIntersecting) {
        leftSlider.classList.add('r-slide');
        rightSliderObserver2.unobserve(entry.target);
      }

    });
  });

  rightSliderObserver2.observe(document.querySelector('.r-idle-wrapper-2'));

});




