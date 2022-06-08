import React from 'react'

function NameList() {
    const names = ['Bruce', 'Diana', 'Clark'];
    const NameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>{NameList}</div>
  )
}

export default NameList;
