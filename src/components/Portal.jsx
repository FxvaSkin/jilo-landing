import { createPortal } from 'react-dom'

const Portal = ({ to = document.body, children }) => createPortal(children, to)

export { Portal }
