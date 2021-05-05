import React from "react"
import "../css/global.css"
import { Link } from "gatsby"

export default function Card(props) {
  if (props.toLink === "fukuwarai") {
    return (
      <div className="card">
        {props.children}
        <div className="card-text">
          <p className="card-title">{props.title}</p>
          <p className="card-description">{props.description}</p>
          <div className="buy-button">
            <Link to={props.link} className="link highlight">あそぶ&nbsp;&gt;</Link>
          </div>
        </div>
      </div>
    )
  } else if (props.toLink === "detail") {
    return (
      <div className="card">
        {props.children}
        <div className="card-text">
          <p className="card-title">{props.title}</p>
          <p className="card-description">{props.description}</p>
          <div className="buy-button">
            <Link to={props.detailLink} className="link highlight">詳しく&nbsp;&gt;</Link>
            <a href={props.link} className="link highlight" target="_blank" rel="noopener noreferrer">
              購入する&nbsp;&#8599;
            </a>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="card">
        {props.children}
        <div className="card-text">
          <p className="card-title">{props.title}</p>
          <p className="card-description">{props.description}</p>
          <div className="buy-button">
            <a href={props.link} className="link highlight" target="_blank" rel="noopener noreferrer">
              購入する&nbsp;&#8599;
            </a>
          </div>
        </div>
      </div>
    )
  }
}