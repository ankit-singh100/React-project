function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'h1',
    children: 'Click me to visit',
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);