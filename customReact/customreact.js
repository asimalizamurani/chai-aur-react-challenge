function customeRender(reactElement, container) {

    // < ........ FIRST WAY .......... >
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childern
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    // < ........ SECOND WAY .......... >
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern

    for (const prop in reactElement.props) {
        if (prop === "children") continue // in early days of react, children was also passed as a prop, but now it is not passed as a prop, so we can ignore this line
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: "Click me"
}

const rootContainer = document.getElementById('root')

customeRender(reactElement, rootContainer)