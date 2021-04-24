import React from "react"
import "../css/global.css"
import { Link } from "gatsby"

export default function WorksCard(props) {
  return (
    <Link to={props.link}>
      <div className="works-card">
        {props.children}
        <div>
          <p className="works-card-text">{props.title}</p>
        </div>
      </div>
    </Link>
  )
}