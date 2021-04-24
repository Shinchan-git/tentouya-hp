import React from "react"
import { Link } from "gatsby"
import "../css/global.css"
import LogoImg from "../images/logo/tentouya_logo.png"

export default function Header() {
  return (
    <header>
      <Link to={"/"} className="logo highlight">
        <p><img src={LogoImg} alt="てんとうや" /><span className="bold">てんとうや</span></p>
      </Link>
    </header>
  )
}