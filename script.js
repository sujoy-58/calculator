let resultElement = document.getElementById('result');

function appendToResult(value) {
  resultElement.textContent += value;
}

function clearInput() {
  resultElement.textContent = '';
}

function clearLastInput() {
  let currentResult = resultElement.textContent;
  resultElement.textContent = currentResult.slice(0, -1);
}

function calculateResult() {
  try {
    resultElement.textContent = eval(resultElement.textContent);
  } catch (error) {
    resultElement.textContent = 'Error';
  }
}

document.addEventListener('keypress', function (event) {
  var keyPressed = event.key;
  var buttons = document.querySelectorAll('.items button');

  if (keyPressed === 'Enter') {
    document.querySelector('.double-column').click();
}

    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === keyPressed) {
        buttons[i].click();
        break;
      }
    }

  });

  document.addEventListener('keydown', function(event) {
    var keyPressed = event.key;

    if (keyPressed === 'Backspace') {
        clearLastInput();
    }
  });
