const container = document.querySelector('.container');

function generateGrid(squarePerSide) {


  function addBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }

  container.setAttribute('style', `grid-template: repeat(${squarePerSide}, 1fr) / repeat(${squarePerSide}, 1fr)`);

  for (i = 0; i < (Math.pow(squarePerSide, 2)); i++){
    addBox();
  }

  document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('mouseover', (e) => {
      box.classList.add('hover')
    });
  });

}





generateGrid(16)


const reset = document.querySelector('#reset');
reset.onclick = () => {
  let length = prompt('How many squares per side?');
  document.querySelectorAll('.box').forEach((box) => {
    container.removeChild(box)
  })
  generateGrid(length);
}
