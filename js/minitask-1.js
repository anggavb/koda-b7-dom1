const inpTemperature = document.querySelector("input.temperature")
const unitTemperature = document.querySelector("select[name=unit-temp]")
const conversionTemperature = document.querySelector("select[name=conversion-temp]")
let result = document.querySelector("h2")
// console.log(inpTemperature, unitTemperature.value);
const calcTemp = (e) => {
  const valUnit = unitTemperature.value
  const valConversion = conversionTemperature.value

  if (valUnit === 'celsius') {
    if (valConversion === 'fahrenheit') {
      result.textContent = (e.target.value * 1.8) + 32
    }
    if (valConversion === 'kelvin') {
      result.textContent = e.target.value + 273.15
    }
    if (valConversion === 'rankine') {
      result.textContent = (e.target.value * 1.8) + 491.67
    }
  }

  if (valUnit === 'kelvin') {
    if (valConversion === 'celsius') {
      result.textContent = e.target.value - 273.15
    }
    if (valConversion === 'fahrenheit') {
      result.textContent = (e.target.value - 273.15) * 1.8 + 32
    }
    if (valConversion === 'rankine') {
      result.textContent = e.target.value * 1.8
    }
  }
  
  if (valUnit === 'fahrenheit') {
    if (valConversion === 'celsius') {
      result.textContent = (e.target.value - 32) * (5/9)
    }
    if (valConversion === 'kelvin') {
      result.textContent = (e.target.value - 32) * (5/9) + 273.15
    }
    if (valConversion === 'rankine') {
      result.textContent = e.target.value + 459.67
    }
  }
  
  if (valUnit === 'rankine') {
    if (valConversion === 'celsius') {
      result.textContent = (e.target.value - 491.67) * (5/9)
    }
    if (valConversion === 'kelvin') {
      result.textContent = e.target.value * (5/9)
    }
    if (valConversion === 'fahrenheit') {
      result.textContent = e.target.value - 459.67
    }
  }
}

inpTemperature.onchange = function (e) {
  return calcTemp(e)
}

unitTemperature.onchange = (e) => {
  return calcTemp(e)
}

conversionTemperature.onchange = e => {
  return calcTemp(e)
}