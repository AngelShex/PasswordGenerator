const characterAmountRange = document.getElementById
('characterAmountRange') 
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const characterAmountUppercase = document.getElementById
('includeAmountUppercase')
const includeNumberElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const includeUppercaseElement = document.getElementById('includeUppercase')
const btn = document.getElementById('btn')
const password = document.getElementById('password')



const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
  ).concat(
    arrayFromLowToHigh(91, 96)
    ).concat(
      arrayFromLowToHigh(123, 126)
    )

  
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
//
password.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value 
  const includeUppercase = includeUppercaseElement.checked 
  const includeNumbers = includeNumberElement.checked 
  const includeSymbols = includeSymbols.checked 
 const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
 btn.innerText = generatePassword
})



function syncCharacterAmount(e) {
const value = e.target.value
characterAmountNumber.value = value
characterAmountRange.value = value
}



// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {

}




// Add event listener to generate button
generateBtn.addEventListener('click', e => { 
  e.preventDefault()
  const characterAmount = characterAmountNumber.value 
  const includeUppercase = includeUppercaseElement.checked 
  const includeNumber = includeNumberElement.checked 
  const includeSymbols = includeSymbolsElement.checked 
 const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
passwordText.value = password
})


function generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols) {
   let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes =charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumber) charCodes =charCodes.concat(NUMBERS_CHAR_CODES)
  if (includeSymbols) charCodes =charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  } 
   return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
   array.push(i)
  }
  return array 
}