import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { yahoshiTShirt } from "../../components/worksData"
import { YahoshiTShirtImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      沖縄より南にしかいないテントウムシ、ヤホシテントウのTシャツです！<br />
      湿地に生える植物の葉の上で生活しています。様々なバリエーションの模様をしているのにヤホシという名前が付いているのは、学名から取っているからでしょう。
    </p>
  )
}

const YahoshiTShirt = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={yahoshiTShirt.title + " - てんとうや"} />
      <meta name="twitter:image" content={yahoshiTShirt.twitterImg} />
      <meta name="theme-color" content="#f3f4f7" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={yahoshiTShirt}>
          <div className="padding-30-0">
            <YahoshiTShirtImg />
          </div>
          <div className="buy-button">
            <a href={yahoshiTShirt.link} target="_blank" rel="noopener noreferrer" className="link highlight">
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

export default YahoshiTShirt
