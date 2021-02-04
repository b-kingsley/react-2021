function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello React 2021";

  return element;
}

document.body.appendChild(component());
