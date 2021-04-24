import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { phoneCasePop } from "../../components/worksData"
import { PhoneCasePopImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      様々なテントウムシをプリントしたポップなスマホケースです。テントウ同士の大きさは、それぞれ実際の比率に近いものになっています。<br />
      図鑑で種類を調べて楽しむのもおすすめです！
    </p>
  )
}

const PhoneCasePop = () => {
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
        <WorksDetail data={phoneCasePop}>
          <div className="padding-30-0">
            <PhoneCasePopImg />
          </div>
          <div className="buy-button">
            <a href={phoneCasePop.linkIPhone} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する(iPhone)&nbsp;&#8599;
            </a>
            <a href={phoneCasePop.linkAndroid} target="_blank" rel="noopener noreferrer" className="link highlight">
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

export default PhoneCasePop
