import {Number1,Number2,Number3 } from './Analysisprops'
import React from 'react'


export function Average() {
  return (
<div id="Average">
<p>Average </p>
</div>
  )
}

export function Reviews(){
  return (
  <div id="Reviews">
    <p>Reviews </p>
    </div>
  )
}


export function Analysis() {
    return (
    <div className="analysis">
        <Number1 num="960" />
        <Number2 num="122" /> 
        <Number3 num="321" />
      </div>
    )
}


