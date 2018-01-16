var qttElements = 90;


function reset(){ 
  var person = prompt("Please enter the qtt of elements", "");
  if (person == null) {
    resetColor();
  }else {
    const qttTemp = parseInt(person);
    if (isNaN(qttTemp)){
      resetColor();
    }else{
      qttElements = qttTemp;
      generateTable(qttElements);
    }    
  }
      
function resetColor(){
  const squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach(key => key.style.backgroundColor = 'white')
}
  
 
}

function change(e){ 
 e.target.style.backgroundColor = 'black';
}


function buttonReset(){
  document.querySelector('#reset').addEventListener('click', reset)
}

function changeBackgroundColor(){  
  const squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach(key => key.addEventListener('mouseover', change));
}


function generateTable(elementsByLine){
  const sizeElement = Math.abs(500 / elementsByLine);
  const grid = document.querySelector('.grid');
  var gridHtml = "";
  for (var i = elementsByLine * elementsByLine; i > 0; i--) {
    gridHtml += `<div class="square" style="height: ${sizeElement}px; width: ${sizeElement}px;"></div>`;
  }

  grid.innerHTML = gridHtml;
  changeBackgroundColor();
}

generateTable(qttElements);
buttonReset();