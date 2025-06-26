import React from 'react'

function ButtonInline() {
    const styles = {
  backgroundColor: "hsl(190, 80%, 60%)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "10px",
  cursor: "pointer",
}
  return (
     <button style={styles}>Click Me</button>
  )
}

export default ButtonInline