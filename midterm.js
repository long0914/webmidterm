

window.onload = function() {
  let main = document.createElement('div');
  main.id = 'main';

  document.body.appendChild(main);

  // create a div element
  let prevDiv = document.createElement('div');
  prevDiv.id = 'prev';
  prevDiv.innerText = 'prev';

  let nextDiv = document.createElement('div');
  nextDiv.id = 'next';
  nextDiv.innerText = 'next';

  let playDiv = document.createElement('div');
  playDiv.id = 'play';
  playDiv.innerText = 'play';

  let stopDiv = document.createElement('div');
  stopDiv.id = 'stop';
  stopDiv.innerText = 'stop';

  let lbTitleDiv = document.createElement('div');
  lbTitleDiv.id = 'lbTitle';
  lbTitleDiv.textContent = 'Title';
  lbTitleDiv.innerText = 'lbTitle';

  let lbCounterDiv = document.createElement('div');
  lbCounterDiv.id = 'lbCounter';
  lbCounterDiv.innerText = 'lbCounter';

  let lbImageDiv = document.createElement('div');
  lbImageDiv.id = 'lbImage';
  lbImageDiv.innerText = 'lbImage';
  

  // Append lbImageDiv to main
  main.appendChild(lbImageDiv);

  // Append other divs to lbImageDiv
  lbImageDiv.appendChild(prevDiv);
  lbImageDiv.appendChild(nextDiv);
  lbImageDiv.appendChild(playDiv);
  lbImageDiv.appendChild(stopDiv);
  lbImageDiv.appendChild(lbTitleDiv);
  lbImageDiv.appendChild(lbCounterDiv);

  
  console.log(main.childNodes)
};


  