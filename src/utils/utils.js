export function toSentenceCase(string) {
  return string[0].toUpperCase() + string[0].slice(1);
}

export function createElement(elementType, elementText) {
  const element = document.createElement(elementType);
  if (elementText) element.textContent = elementText;
  return element;
}
