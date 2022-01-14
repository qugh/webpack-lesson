import './index.scss'
import SvgImage from './assets/img/icon.svg'

const myText: string = 'Hello world'
let flexContainer
let mainContainer = document.body

window.onload = () => renderPage()

const renderFlexContainer = (node) => {
  flexContainer = document.createElement('div')
  flexContainer.classList.add('flex_container')
  node.appendChild(flexContainer)
}
const renderText = (node) => {
  const textElement = document.createElement('span')
  textElement.innerHTML = myText
  node.appendChild(textElement)
}
const renderSvgIcon = (node) => {
  const svgElement = document.createElement('div')
  svgElement.innerHTML = SvgImage
  node.appendChild(svgElement)
}

const renderPage = () => {
  renderFlexContainer(mainContainer)
  renderText(flexContainer)
  renderSvgIcon(flexContainer)
}
