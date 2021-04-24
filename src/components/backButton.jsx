import React from "react"
import { Link } from "gatsby"
import "../css/global.css"

export default function BackButton(props) {
  return (
    <Link to={props.link} className="back-button highlight">
      &lt;{props.text}
    </Link>
  )
}