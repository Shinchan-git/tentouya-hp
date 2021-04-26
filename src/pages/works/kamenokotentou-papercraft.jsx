import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { kamenokoPapercraft } from "../../components/worksData"
import { KamenokoImg, KamenokoYoutubeFrame } from "../../components/thumbnailImages"


const Description = () => {
  return (
    <p className="main-text">
      日本最大級のテントウムシであるカメノコテントウのオリジナルペーパークラフトです。<br />
      細かいパーツまでリアルな作りになっています。<br />
      切り込みを模様に重ねることで、表面上は継ぎ目のない構造にしています。<br /><br />
      ご購入いただくと、PDFファイルの展開図がダウンロードできます。<br />
      ぜひ手のひらサイズのカメノコテントウを作ってみてくださいね!
    </p>
  )
}

const KamenokoPapercraft = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={kamenokoPapercraft.title + " - てんとうや"} />
      <meta name="twitter:image" content={kamenokoPapercraft.twitterImg} />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={kamenokoPapercraft}>
          <div className="padding-30-0">
            <KamenokoImg />
          </div>
          <div className="buy-button">
            <a href={kamenokoPapercraft.link} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する&nbsp;&#8599;
            </a>
          </div>
          <Description />
          <div className="padding-30-0">
            <KamenokoYoutubeFrame />
          </div>
        </WorksDetail>
      </main>

      <Footer />
    </div>
  )
}

export default KamenokoPapercraft
