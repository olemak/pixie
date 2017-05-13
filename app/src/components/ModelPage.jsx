import React from 'react'

const ModelPage = ({match}) => (
  <div>
    <h2>Model: {match.params.id}</h2>
  </div>
)

export default ModelPage