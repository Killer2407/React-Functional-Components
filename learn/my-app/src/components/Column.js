import React from 'react'

function Column() {
    const items = []
  return (
      <>
      {
          items.map(item => (
              <React.Fragment key = {item.id}>
                  <h1>Title</h1>
                  <p>{items.title}</p>
                  </React.Fragment>
          ))
      }
        <td>Name</td>
        <td>Aniket</td>
      </>
    
  )
}

export default Column