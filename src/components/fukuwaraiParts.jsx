import * as React from "react"
import "../css/global.css"
import Draggable from 'react-draggable'

export default function FukuwaraiParts(props) {
  if (props.size === "100") {
    return (
      <Draggable>
        <div className="fukuwarai-parts-100">
          {props.children}
          <div className="draggable-transparent-cover">
          </div>
        </div>
      </Draggable>
    )
  } else {
    return (
      <Draggable>
        <div className="fukuwarai-parts">
          {props.children}
          <div className="draggable-transparent-cover">
          </div>
        </div>
      </Draggable>
    )
  }
}
