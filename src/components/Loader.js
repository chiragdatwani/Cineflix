import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <div className="loader-container">
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
