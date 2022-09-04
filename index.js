const createAndAppendNewElement = (element, parent, text) => {
  const newElement = document.createElement(element);

  if (text) {
    newElement.innerText = text;
  }
  
  parent.append(newElement);

  return newElement;
}

const createCounter = (initialValue = 0) => {
  let counterValue = initialValue;
  const wrapper = createAndAppendNewElement('div', document.body);
  const minusButton = createAndAppendNewElement('button', wrapper, '-');
  const plusButton = createAndAppendNewElement('button',wrapper, '+');
  const counter = createAndAppendNewElement('span', wrapper,`counter: ${counterValue}`);

  minusButton.addEventListener('click', () => {
    counter.innerText = `counter: ${--counterValue}`
  })
  plusButton.addEventListener('click', () => {
    counter.innerText = `counter: ${++counterValue}`
  })
};
