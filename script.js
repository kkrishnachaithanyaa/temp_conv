document.addEventListener('DOMContentLoaded', () => {
  const tempInput = document.getElementById('tempInput');
  const resultDiv = document.getElementById('result');
  const radios = document.getElementsByName('conversion');

  function convertTemp() {
    const value = parseFloat(tempInput.value);
    if (isNaN(value)) {
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }

    let conversionType = Array.from(radios).find(r => r.checked).value;
    let result = '';

    if (conversionType === 'cToF') {
      result = `${value} °C = ${(value * 9/5 + 32).toFixed(2)} °F`;
    } else {
      result = `${value} °F = ${((value - 32) * 5/9).toFixed(2)} °C`;
    }

    resultDiv.textContent = result;
  }

  tempInput.addEventListener('input', convertTemp);
  radios.forEach(radio => radio.addEventListener('change', convertTemp));
});
