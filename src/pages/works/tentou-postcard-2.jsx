import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { tentouPostCardB } from "../../components/worksData"
import { PostcardBImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      テントウムシ絵はがきの第２弾です。第１弾は正面顔ですが、今回は同じ種類の別の角度からの写真です。カメノコテントウ、ムネアカオオクロテントウ、ハラグロオオテントウ(幼虫)、ハイイロテントウ、アミダテントウのセットです。テントウムシの多様な姿をお楽しみください!
    </p>
  )
}

const TentouPostCardB = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={tentouPostCardB.title + " - てんとうや"} />
      <meta name="twitter:image" content={tentouPostCardB.twitterImg} />
      <meta name="theme-color" content="#0B308F" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={tentouPostCardB}>
          <div className="padding-30-0">
            <PostcardBImg />
          </div>
          <div className="buy-button">
            <a href={tentouPostCardB.link} target="_blank" rel="noopener noreferrer" className="link highlight">
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

export default TentouPostCardB
