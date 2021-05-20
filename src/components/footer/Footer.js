import React from 'react'
import ReactDom from 'react-dom'
import './footer.css'

export default function Footer()  {
    return ReactDom.createPortal(
        <div className='footer-page flex-row' >
        <a href="https://github.com/Ineffabl3Fray" target="_blank" rel="noreferrer">See it on My Github</a>
      </div>,
      document.getElementById("footer")
    )
}
