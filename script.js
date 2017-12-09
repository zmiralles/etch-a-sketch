



function generateGrid(squarePerSide) {
  const container = document.querySelector('.container');

  function addBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  }

  container.setAttribute('style', `grid-template: repeat(${squarePerSide}, 1fr) / repeat(${squarePerSide}, 1fr)`);

  for (i = 0; i < (Math.pow(squarePerSide, 2)); i++){
    addBox();
  }
}


/*for (i = 0; i < 256; i++){
  addBox();
}*/

generateGrid(64)
