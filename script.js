const textInput = document.getElementById('textInput');
const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');
const sendButton = document.getElementById('sendButton');
const formattedOutput = document.getElementById('formattedOutput');

boldButton.addEventListener('click', () => {
  formatSelectedText(textInput, '*');
});

italicButton.addEventListener('click', () => {
  formatSelectedText(textInput, '_');
});

sendButton.addEventListener('click', () => {
  const formattedText = formatForWhatsApp(textInput.value);
  formattedOutput.textContent = formattedText;
});

function formatSelectedText(input, wrapper) {
  const startPos = input.selectionStart;
  const endPos = input.selectionEnd;
  const selectedText = input.value.substring(startPos, endPos);
  const newText = `${wrapper}${selectedText.trim()}${wrapper}`;
  
  input.setRangeText(newText, startPos, endPos, 'end');
}

function formatForWhatsApp(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '*$1*')
    .replace(/_(.*?)_/g, '*$1*');
}
