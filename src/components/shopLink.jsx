import React from "react"
import "../css/global.css"

export default function SectionLarge(props) {
  return (
    <div>
      <span>{props.title}:&nbsp;</span>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </div>
  )
}