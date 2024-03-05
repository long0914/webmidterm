let fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  

 fetchPromise
 .then( response => {if(!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('fetchPromise' + fetchPromise);
  return response.json();
  })
  .then(dat => { console.log(data); })// either this or the catch block is called
  .catch(error => { console.error('Error: ', error); console.log(
    'fetchpromise' + fetchPromise
  )}); // .catch() is called when the promise is rejected at end