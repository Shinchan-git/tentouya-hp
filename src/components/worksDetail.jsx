import React from "react"
import "../css/global.css"

export default function WorksDetail(props) {
  return (
    <div className="works-detail">
      <div className="line-padding-10" />
      <div className="section-large-no-margin">
        <p className="title text-center">{props.data.title}</p>
        {props.children}
      </div>
    </div>
  )
}