import React from 'react'

import { ItemContainer } from './style'

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a className="ir" href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a> <br/><br/>
        <button className="remover" onClick={handleRemove}>Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo