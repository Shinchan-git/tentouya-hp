import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { tentouPlayingCards } from "../../components/worksData"
import { TentouPlayingCardsImages } from "../../components/thumbnailImages"
import TentouCardsData from "../../components/tentouPlayingCardsData"

const Description = () => {
  return (
    <p className="main-text">
      日本には現在約190種のテントウムシがいます。<br />その中から、トランプの数字に対応する模様を持った36種を選び、リアルなイラストに仕上げました。<br />それぞれの種類の体型・触角・眼・脚など、各部位の形状にもこだわった、超マニアックな一品です！<br />遊びながらテントウムシの名前も覚えられます。
    </p>
  )
}

const TentouPlayingCards = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={tentouPlayingCards.title + " - てんとうや"} />
      <meta name="twitter:image" content={tentouPlayingCards.twitterImg} />
      <meta name="theme-color" content="#0B308F" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={tentouPlayingCards}>
          <div className="padding-30-0">
            <TentouPlayingCardsImages imgNum="1" />
          </div>
          <div className="buy-button">
            <a href={tentouPlayingCards.link} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する&nbsp;&#8599;
            </a>
          </div>
          <Description />

          <div className="padding-30-0">
            <TentouPlayingCardsImages imgNum="2" />
          </div>

          <div className="padding-30-0">
            <TentouPlayingCardsImages imgNum="3" />
          </div>

          <p className="main-text bold" id="tentou-playing-card-data">テントウトランプ解説</p>
          <p className="main-text">
            カタカナ表記が和名、アルファベットが学名（イタリック体）と記載者・記載年です。学名とは世界共通の名前です。記載（新種記載）とは、その種が新種であることを論文で示すことです。<br />
            レア度：&#9733;1～5（多いほど珍しい） 作者の独断と偏見によります。
          </p>

          <TentouCardsData />

          <div className="padding-30-0">
            <TentouPlayingCardsImages imgNum="4" />
          </div>
        </WorksDetail>
      </main>

      <Footer />
    </div>
  )
}

export default TentouPlayingCards
