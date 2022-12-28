export function toSentenceCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function createElement(elementType, elementText) {
  const element = document.createElement(elementType);
  if (elementText) element.textContent = elementText;
  return element;
}

// maybe I can make a function to lowercase the string and if they are
// sliced by empty space, change the empty space to dash
// To transform it to classname
