import React, {useRef} from "react"

function Window({title, isOpen, onClose, position,zIndexPos, onFocus, children}) {
    const windowRef = useRef(null)

    if (!isOpen) {
        return null
    }

    return (
        <div ref={windowRef} className="window" 
        style={{top: position.top, left: position.left, zIndex: zIndexPos}}
        onMouseDown={onFocus}
        >
            <div className="window-titlebar"
                  onMouseDown={() => console.log('hi')}
                  onMouseMove={() => console.log('in me')}
            >
                <span>{title}</span>
                <button onClick={onClose}>X</button>
            </div>
            <div className="window-content">
                {children} 
            </div>
        </div>
    )
}

export default Window