const body = document.body

const main = document.createElement("main")
main.setAttribute("class", "calculator")

const display = document.createElement("div")
display.setAttribute("class", "display")

const h = document.createElement("div")
h.setAttribute("class", "history")
h.textContent = "H"

const result = document.createElement("div")
result.setAttribute("class", "result")
result.textContent = "0"

display.append(h, result)

const section = document.createElement("section")
section.setAttribute("class", "buttons")
const symbols = [{
  type: 'scientific',
  list: [
    "Deg", "Rad", "x!",
    "Inv", "sin", "ln",
    "π", "cos", "log",
    "e", "tan", "√",
    "Ans", "EXP", "X^y"
  ],
}, {
  type: 'numeric',
  list: [
    "(", ")", "%",
    "AC",
    7, 8, 9, "÷",
    4, 5, 6, "x",
    1, 2, 3, "-",
    0, ".", "=", "+"
  ]
}]

for (const symbol of symbols) {
  const wrapper = document.createElement("div")
  wrapper.setAttribute("class", symbol.type)

  for (const list of symbol.list) {
    const button = document.createElement("button")
    button.textContent = list
    wrapper.appendChild(button)

    if (typeof list === 'number' || list === '.') {
      button.setAttribute("class", "number")
    }
    
    if (list === '=') {
      button.setAttribute("class", "equal")
    }
  }
  section.appendChild(wrapper)
}

main.append(display, section)
body.appendChild(main)
