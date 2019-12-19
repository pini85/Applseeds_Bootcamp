document.addEventListener('DOMContentLoaded', (event) => {
    const skrllr = new Skrllr('main', {
      transitionTime: 1800,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      updateURL: true,
      menu: document.querySelector('.pagination'),
      beforeTransition: (index, nextIndex, next) => before(index, nextIndex, next),
      afterTransition: (index, nextIndex, next) => after(index, nextIndex, next),
    })
  
    function before (index, nextIndex, next) {
      console.log('Before transition');
      console.log(index);
      console.log(nextIndex);
      console.log(next);
    }
  
    function after (index, nextIndex, next) {
      console.log('After transition');
      console.log(index);
      console.log(nextIndex);
      console.log(next);
    }
  }, false)