import React from 'react'

const Icon = ({ open, setOpen }) => {    
    return (
        <button className="Icon" open={open} onClick={() => setOpen(!open)}>
            {open ?
            'Close':
            'Menu'
            }
        </button>
    )
}
export default Icon