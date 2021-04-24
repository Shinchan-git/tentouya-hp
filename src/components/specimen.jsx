import React from "react"
import "../css/global.css"
import { Link } from "gatsby"

export default function Dragable(props) {
  return (
    <Link to={props.link} className="specimen">
      {props.children}
      <div class="specimen-title">
        <p>{props.title}</p>
      </div>
    </Link>
  )
}
