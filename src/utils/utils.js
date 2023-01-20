export function toSentenceCase(string) {
  if (!string) return;
  return string[0].toUpperCase() + string.slice(1);
}

export function createElement(elementType, elementText) {
  const element = document.createElement(elementType);
  if (elementText) element.textContent = elementText;
  return element;
}

export function toShorterDate(date) {
  if (!date) return;
  const parsedDateArray = date.split("-");
  const year = parsedDateArray[0].slice(2);
  const month = parsedDateArray[1];
  const day = parsedDateArray[2];

  return `${year}/${month}/${day}`;
}
// maybe I can make a function to lowercase the string and if they are
// sliced by empty space, change the empty space to dash
// To transform it to classname
