let max =1000000;
const random= (max)=>  Math.floor(Math.random() * max);


function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}



function generatePrime(quota) {
  let primes = [];
  while (primes.length < quota) {
    let candidate = random(max);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const output = document.querySelector('div#output');
const button = document.querySelector('#generate');
button.addEventListener('click', () => {
    const quota = document.querySelector('#number');
    const primes = generatePrime(quota.value);
    output.innerHTML = primes.join(', ');
});
