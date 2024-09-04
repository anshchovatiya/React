let root = document.getElementById("root");

function render(newElement,parent){
    let Element = document.createElement(newElement.type);
    Element.innerText = newElement.innerText;
    for(let property in newElement.props){
        Element.setAttribute(property,newElement.props[property]);
    }
    parent.appendChild(Element);
}

let anchorTag = {
    type : "a",
    props : {
        href : "https://www.youtube.com",
        target : "_blank",
        id : "link"
    },
    innerText : "Click me"
}

render(anchorTag,root);