const exerciseButtons = document.querySelectorAll('.exercise-btn');
const exerciseContainers = document.querySelectorAll('.exercise-container');
exerciseButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const exerciseNumber = btn.dataset.exercise;
    exerciseContainers.forEach(container => {
      if (container.id === `exercise${exerciseNumber}-container`) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  });
});


document.getElementById('exercise1-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const n = document.getElementById('n').value; 
  const sum = calculateSeriesSum(n); 
  const result = (Math.PI ** 2) / 6; 
  document.getElementById('exercise1-result').textContent = `La suma de la serie infinita es aproximadamente: ${sum.toFixed(6)}, que se aproxima a π²/6 = ${result.toFixed(6)}.`; // Muestra el resultado
});


function calculateSeriesSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i ** 2); 
  }
  return sum;
}


document.getElementById('exercise2-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const n = document.getElementById('exercise2-input').value;
  const sum = calculateSeriesSum(n);
  const approximateResult = 6;
  document.getElementById('exercise2-result').textContent = `La suma de la serie infinita para n = ${n} es aproximadamente: ${sum.toFixed(6)}, que se aproxima a 6.`;
});
function calculateSeriesSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += (i ** 2) / (2 ** i);
  }
  return sum;
}

document.getElementById('exercise3-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const inputValue = parseFloat(document.getElementById('exercise3-input').value)
  const cubicRoot = calculateCubicRoot(inputValue);
  const resultMessage = `La raíz cúbica aproximada de ${inputValue} es: ${cubicRoot.toFixed(4)}`;
      
document.getElementById('exercise3-result').textContent = resultMessage;
    });

function calculateCubicRoot(x) {
  let x1 = x;
  const maxIterations = 10;
  let iteration = 0;
  let relativeError = 1;

  while (relativeError > 0.00001 && iteration < maxIterations) {
  const x2 = (2 * x1 + x / (x1 * x1)) / 3;
  relativeError = Math.abs((x2 - x1) / x1);
    x1 = x2;
    iteration++;
    }

      return x1;
  }

document.getElementById('exercise4-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const n = parseInt(document.getElementById('exercise4-input').value);
  const exponentialFunction = calculateExponentialFunction(n);
  const resultMessage = `La función exponencial para n = ${n} es aproximadamente: ${exponentialFunction.toFixed(6)}`;
document.getElementById('exercise4-result').textContent = resultMessage;
});

function calculateExponentialFunction(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += Math.pow(1, i) / factorial(i);
  }
  return sum;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('exercise5-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const angle = parseFloat(document.getElementById('exercise5-input').value);
    const sinValue = calculateSin(angle);
    const resultMessage = `El valor de sin(${angle}°) usando la serie de Taylor es aproximadamente: ${sinValue}`;
    document.getElementById('exercise5-result').textContent = resultMessage;
  });
});

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

function calculateSin(angleDeg) {
  const angleRad = degToRad(angleDeg);
  let term = angleRad;
  let sinValue = term;
  let n = 1;
  let error = Number.MAX_VALUE;
  const tolerance = 1e-6;

  while (error > tolerance) {
    n++;
    term = -term * angleRad * angleRad / (2 * n - 1) / (2 * n - 2);
    const sinNew = sinValue + term;
    error = Math.abs((sinNew - sinValue) / sinValue);
    sinValue = sinNew;
  }

  return sinValue.toFixed(8);
}