import React from "react"
import "../css/global.css"

export default function pageTopSentence(props) {
  return (
    <div className="page-top-sentence">
      {props.children}
    </div>
  )
}