import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { horseshoeCrabPapercraft } from "../../components/worksData"
import { HorseshoeCrabImages, HorseshoeCrabYoutubeFrame } from "../../components/thumbnailImages"


const Description = () => {
  return (
    <p className="main-text">
      カブトガニの10齢幼生のペーパークラフトです。<br />
      細かいパーツまでリアルな作りになっています。<br /><br />
      ご購入いただくと、PDFファイルの展開図がダウンロードできます。<br />
      ぜひ紙で立体作品を作る楽しさを見つけてみてください！
    </p>
  )
}

const HorseshoeCrabPapercraft = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={horseshoeCrabPapercraft.title + " - てんとうや"} />
      <meta name="twitter:image" content={horseshoeCrabPapercraft.twitterImg} />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={horseshoeCrabPapercraft}>
          <div className="padding-30-0">
            <HorseshoeCrabImages imgNum="1" />
          </div>

          <div className="buy-button">
            <a href={horseshoeCrabPapercraft.link} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する&nbsp;&#8599;
            </a>
          </div>

          <Description />

          <div className="padding-30-0">
            <HorseshoeCrabImages imgNum="2" />
          </div>

          <div className="padding-30-0">
            <HorseshoeCrabYoutubeFrame />
          </div>

        </WorksDetail>
      </main>

      <Footer />
    </div>
  )
}

export default HorseshoeCrabPapercraft
