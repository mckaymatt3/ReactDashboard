import React from 'react'

function Button({icon, bgColor, color, bgHoverColor, size, text, borderRadius, width}) {
  return (
    <button
    type="button"
    // onClick={() => setIsClicked(initialState)}
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={` text-${size} p-3 hover: drop-shadow-xl`}
  >
    {text}
  </button>
  )
}

export default Button