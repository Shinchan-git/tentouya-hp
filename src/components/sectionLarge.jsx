import React from "react"
import "../css/global.css"

export default function SectionLarge(props) {
  return (
    <div className="section-large">
      <p className="title">{props.title}</p>
      {props.children}
    </div>
  )
}