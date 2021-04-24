import * as React from "react"
import { Link } from "gatsby"
import "../css/global.css"
import Header from "../components/header"

const NotFoundPage = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>Not found</title>
      <meta name="viewport" content="width=device-width" />

      <Header />

      <div className="text-center">
        <h1 className="not-found extra-large">404</h1>
        <h2 className="not-found">Not Found</h2>
        <Link to={"/"} className="link highlight">トップに戻る&nbsp;&gt;</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
