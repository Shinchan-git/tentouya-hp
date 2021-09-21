import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { tentouPostCardA } from "../../components/worksData"
import { PostcardAImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      普段なかなか見ることのないテントウムシの正面顔を絵はがきにしました。<br />
      カメノコテントウ、ムネアカオオクロテントウ、ハラグロオオテントウ(幼虫)、ハイイロテントウ、アミダテントウのセット<br />
      種類によって眼の大きさ・頭の模様・体型など、様々な特徴があることに気付くと、虫を見る楽しみが更に増えていくと思います。
    </p>
  )
}

const TentouPostCardA = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={tentouPostCardA.title + " - てんとうや"} />
      <meta name="twitter:image" content={tentouPostCardA.twitterImg} />
      <meta name="theme-color" content="#0B308F" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={tentouPostCardA}>
          <div className="padding-30-0">
            <PostcardAImg />
          </div>
          <div className="buy-button">
            <a href={tentouPostCardA.link} target="_blank" rel="noopener noreferrer" className="link highlight">
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

export default TentouPostCardA
