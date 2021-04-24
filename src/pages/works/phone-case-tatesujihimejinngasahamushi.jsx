import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { phoneCaseTatesujihime } from "../../components/worksData"
import { PhoneCaseTatesujihimeImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      日本で最も美しいカメノコハムシ類とも言える、タテスジヒメジンガサハムシのスマホケースです。<br />
      クリアケースで翅の透明感を表現しました。
    </p>
  )
}

const PhoneCaseTatesujihime = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={phoneCaseTatesujihime}>
          <div className="padding-30-0">
            <PhoneCaseTatesujihimeImg />
          </div>
          <div className="buy-button">
            <a href={phoneCaseTatesujihime.linkIPhone} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する(iPhone)&nbsp;&#8599;
            </a>
            <a href={phoneCaseTatesujihime.linkAndroid} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する(Android)&nbsp;&#8599;
            </a>
          </div>
          <Description />
        </WorksDetail>
      </main>

      <Footer />
    </div>
  )
}

export default PhoneCaseTatesujihime
