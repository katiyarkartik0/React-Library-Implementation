function render(element, container) {
  if (isContainerRoot(container)) {
    emptyRootElement(container);
  }
  let dom;
  if (element.type === "TEXT_ELEMENT") {
    dom = document.createTextNode("");
  } else if (typeof element.type === "function") {
    return render(element.type(element.props), container);
  } else {
    dom = document.createElement(element.type);
  }
  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((name) => {
      if (isEventListener(name)) {
        attachEventListener(dom, name, element.props[name]);
      }
      return (dom[name] = element.props[name]);
    });

  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}

function emptyRootElement(container){
  container.innerHTML = ""
}

function isContainerRoot(container) {
  return container.id === "root";
}

function isEventListener(propName) {
  if (propName === "onClick") {
    return true;
  }
}

function attachEventListener(dom, event, callback) {
  if (event === "onClick") {
    dom.addEventListener("click", callback);
  }
}

export default render;
