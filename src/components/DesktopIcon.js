import React from "react"

function DesktopIcon({icon, label, position, onClick}){
  return (
    <div className="desktop-icon" 
        style={{top: position.top, left: position.left}}
        onClick={onClick}
        >
          <div className="desktop-icon-image">{icon}</div>
          <div className="desktop-icon-text">{label}</div>
    </div>
  )
}

export default DesktopIcon