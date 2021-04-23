const items = document.querySelectorAll('.item-active');

items.forEach(el =>
  el.addEventListener('click', event => {
    var t = '';

    if (el.classList.contains('d-0')) {
      // apply .is-showing class on current and on d-1
      t = '.d-1';
    }
    if (el.classList.contains('d-1')) {
      // apply .is-showing class on current and on d-2
      console.log('show depth 2');
      t = '.d-2';
    }
    if (el.classList.contains('d-2')) {
      // apply .is-showing class on current and on d-3
      console.log('show depth 3');
      t = '.d-3';
    }
    if (el.classList.contains('d-3')) {
      // apply .is-showing class on current and on d-4
      console.log('show depth 4');
      t = '.d-4';
    }

    el.classList.toggle('is-open');

    let sub = document.querySelectorAll(t);
    sub.forEach(el => {
      el.classList.toggle('is-showing');
    });
    console.log(sub, 'show depth 1');
  })
);
