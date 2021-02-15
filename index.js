function generateName() {
  const firstName = generateFirstName()
  const lastName = generateLastName()
  return `${firstName} ${lastName}`
}

function generateFirstName() {
  const firstNames = [
    'Tom',
    'Joe',
  ]
  return randomValue(firstNames)
}

function generateLastName() {
  const lastNames = [
    'Doe',
    'Black',
  ]
  return randomValue(lastNames)
}

function randomValue(values) {
  return values[randomIndex(values)]
}

function randomIndex(values) {
  return Math.floor(Math.random() * values.length)
}

function main() {
  const name = generateName()
  const container = document.createElement('div')
  container.textContent = name
  document.body.appendChild(container)
}

main()
