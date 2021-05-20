const btn = document.getElementById('btn');
const main = document.getElementById('main');

createBoxes();

// event listener
btn.addEventListener('click', changeBox);

// change + rotate boxes
function changeBox() {
  const boxes = document.querySelectorAll('.small-box');
  
  if (main.childNodes[0].className === 'small-box') {
    const bigBox = document.createElement('div');
    bigBox.className = 'big-box';
    boxes.forEach(box => {
      box.style.transform = 'rotate(-90deg)';
      setTimeout(() => {
        // const img = document.querySelector('.img');
        box.remove();
        // img.remove();
        main.appendChild(bigBox);
      }, 200)
    });
  } else {
    const bigBox = document.querySelector('.big-box');
    bigBox.remove();
    createBoxes();
  }
}

// create boxes
function createBoxes() {
  for ( let i = 0 ; i <= 15 ; i++ ) {
    let div = document.createElement('div');
    div.className = 'small-box';
    main.appendChild(div);
    insertGif();
  }
}

// background position

function insertGif() {

  const boxes = document.querySelectorAll('.small-box');
  boxes.forEach(box => {

    posX = box.offsetLeft - boxes[0].offsetLeft;
    posY = box.offsetTop - boxes[0].offsetTop;
    console.log(posX, posY)

    box.style.backgroundPosition = `-${posX}px -${posY}px`
    // box.style.transform = 'rotate(360deg)';
  })
}
