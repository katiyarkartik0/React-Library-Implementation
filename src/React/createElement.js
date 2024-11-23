import MyReact from ".";

function createElement(type, props, ...children) {
  const element = {
    type,
    props: {
      ...props,
    },
  };
  if (children.length) {
    element.props.children = children.flat().map((child) => {
      if (typeof child === "object") {
        return child;
      } else {
        return MyReact.createTextElement(child);
      }
    });
  }
  return element;
}

export default createElement