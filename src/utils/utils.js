export function toSentenceCase(string) {
  return string[0].toUpperCase() + string[0].slice(1);
}

export function createElement(elementType, elementText) {
  const element = createElement(elementType);
  if (elementText) element.textCotent = elementText;
  return element;
}
