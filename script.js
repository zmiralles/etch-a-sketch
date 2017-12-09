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

generateGrid(16)

const gridItem = document.querySelectorAll('.box');

gridItem.forEach((box) => {
  box.addEventListener('mouseover', (e) => {
    box.classList.add('hover')
  });
});
