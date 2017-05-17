export default (selector) => {
  const container = document.querySelector(selector);

  if (!selector || !container) {
    console.warn('[dragToScroll] A valid selector is required!');
    return;
  }

  container.style.userSelect = 'none';

  let curXPos, curDown;

  container.addEventListener('mousemove', function(e){
    if (curDown) {
      container.scrollLeft = document.body.scrollLeft + (curXPos - e.pageX);
    }
  });

  container.addEventListener('mousedown', (e) => {
    curXPos = e.pageX;
    curDown = true;
  });

  container.addEventListener('mouseup', () => { curDown = false;});
};
