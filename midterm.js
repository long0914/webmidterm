// // Define the days of the week
// let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// // Create a new table element
// let table = document.createElement('table');

// // Add a row for the days of the week
// let headerRow = document.createElement('tr');
// daysOfWeek.forEach(day => {
//   let th = document.createElement('th');
//   th.textContent = day;
//   headerRow.appendChild(th);
// });
// table.appendChild(headerRow);
// console.log(headerRow.children);




// // Calculate the number of days in August and the day of the week August starts on
// let year = new Date().getFullYear();
// let firstDay = new Date(year, 7, 1).getDay();
// let daysInMonth = 31; // August always has 31 days
// console.log(firstDay);


// // Add rows for each week in August, filling in the dates
// let date = 1;
// for (let i = 0; i < 6; i++) { // maximum 6 weeks in a month
//   let row = document.createElement('tr');
//   for (let j = 0; j < 7; j++) {
//     let td = document.createElement('td');
//     if ((i === 0 && j < firstDay) || date > daysInMonth) {
//       td.textContent = '';
//     } else {
//       td.textContent = date;
//       date++;
//     }
//     row.appendChild(td);
//   }
//   table.appendChild(row);
// }

// // Append the table to the body
// document.body.appendChild(table);

// let parent = document.createElement('div');

// parent.innerHTML = 'Parent <p>Paragraph</p>Text<!--Comment-->';

// console.log(parent.childNodes); // Outputs: 3 (1 element, 1 text node, 1 comment)
// console.log(parent.children); // Outputs: 1 (only the 'p' element)



// let node = document.body.children[1]; // Assuming the first child is a text node
// console.log("parent node and parent element");
// console.log(node.parentNode); // Outputs: [object HTMLBodyElement]
// console.log(node.parentElement); // Outputs: null

// function createAttribute() {
//   let attr = document.createAttribute('class');
//   attr.value = 'myClass';

// console.log(attr); // Uncaught ReferenceError: attr is not defined


// }

// window.onload = function() {
//   let main = document.createElement('div');
//   main.id = 'main';
//   main.innerHTML = 'Hello, World!';
//   document.body.appendChild(main);

//   // create a div element
// let prevDiv = document.createElement('div');
// prevDiv.id = 'prev';

// let nextDiv = document.createElement('div');
// nextDiv.id = 'next';

// let playDiv = document.createElement('div');
// playDiv.id = 'play';

// let stopDiv = document.createElement('div');
// stopDiv.id = 'stop';

// let lbTitleDiv = document.createElement('div');
// lbTitleDiv.id = 'lbTitle';
// lbTitleDiv.textContent = 'Title';

// let lbCounterDiv = document.createElement('div');
// lbCounterDiv.id = 'lbCounter';
// //not yet content

// let lbImageDiv = document.createElement('div');
// lbImageDiv.id = 'lbImage';

// // Assuming mainDiv is your main div
// let mainDiv = document.getElementById('main');

// // Append lbImageDiv to mainDiv
// mainDiv.appendChild(lbImageDiv);
// // Append other divs to lbImageDiv
// lbImageDiv.appendChild(prevDiv);
// lbImageDiv.appendChild(nextDiv);
// lbImageDiv.appendChild(playDiv);
// lbImageDiv.appendChild(stopDiv);
// lbImageDiv.appendChild(lbTitleDiv);
// lbImageDiv.appendChild(lbCounterDiv);


// prevDiv.innerText = 'prev';
// nextDiv.innerText = 'next';
// playDiv.innerText = 'play';
// stopDiv.innerText = 'stop';
// lbTitleDiv.innerText = 'lbTitle';
// lbCounterDiv.innerText = 'lbCounter';
// lbImageDiv.innerText = 'lbImage';
// };



window.onload = function() {
  let main = document.createElement('div');
  main.id = 'main';
  main.innerHTML = 'Hello, World!';
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
};

