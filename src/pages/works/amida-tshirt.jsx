import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { amidaTShirt } from "../../components/worksData"
import { AmidaTShirtImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      アミダテントウ Amida tricolor (Harold, 1878) の模様のTシャツです。
    </p>
  )
}

const AmidaTShirt = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={amidaTShirt.title + " - てんとうや"} />
      <meta name="twitter:image" content={amidaTShirt.twitterImg} />
      <meta name="theme-color" content="#f3f4f7" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={amidaTShirt}>
          <div className="padding-30-0">
            <AmidaTShirtImg />
          </div>
          <div className="buy-button">
            <a href={amidaTShirt.link} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する&nbsp;&#8599;
            </a>
          </div>
          <Description />
        </WorksDetail>
      </main>

      <Footer />
    </div>
  )
}

export default AmidaTShirt
