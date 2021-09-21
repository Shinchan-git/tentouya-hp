import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import SectionLarge from "../../components/sectionLarge"
import BackButton from "../../components/backButton"
import FukuwaraiParts from "../../components/fukuwaraiParts"
import Footer from "../../components/footer"
import { FukuwaraiNanahoshiBaseImg, FukuwaraiNanahoshi1Img, FukuwaraiNanahoshi2Img, FukuwaraiNanahoshi3Img, FukuwaraiNanahoshi4Img, FukuwaraiNanahoshi5Img, FukuwaraiNanahoshi6Img, FukuwaraiNanahoshi7Img, FukuwaraiNanahoshiImg } from "../../components/thumbnailImages"

const FukuwaraiNanahoshi = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content="テントウ福笑い - てんとうや" />
      <meta name="twitter:image" content="https://tentouya.netlify.app/static/c3f6b5af837cd036b174925c47d0c1f6/9e5f6/fukuwarai_thumbnail.jpg" />
      <meta name="theme-color" content="#f3f4f7" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/tentoufukuwarai" text="テントウ福笑い" />

      <SectionLarge title="ナナホシテントウを作ってみよう！">
        <p class="main-text">
          パーツをドラッグすることでイラストに重ねられます。出来上がったら下の完成図と照らし合わせてみましょう！
        </p>

        <div className="fukuwarai-container">
          <div className="fukuwarai-base">
            <FukuwaraiNanahoshiBaseImg />
          </div>

          <div className="fukuwarai-parts-container">
            <FukuwaraiParts>
              <FukuwaraiNanahoshi1Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiNanahoshi2Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiNanahoshi3Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiNanahoshi4Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiNanahoshi5Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiNanahoshi6Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiNanahoshi7Img />
            </FukuwaraiParts>
          </div>

          <details className="fukuwarai-details">
            <summary className="fukuwarai-summary">完成図</summary>
            <FukuwaraiNanahoshiImg />
          </details>
        </div>
      </SectionLarge>

      <Footer />
    </div>
  )
}

export default FukuwaraiNanahoshi
