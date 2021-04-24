import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import SectionLarge from "../../components/sectionLarge"
import BackButton from "../../components/backButton"
import FukuwaraiParts from "../../components/fukuwaraiParts"
import Footer from "../../components/footer"
import { FukuwaraiShirotohoshiBaseImg, FukuwaraiShirotohoshi1Img, FukuwaraiShirotohoshi2Img, FukuwaraiShirotohoshi3Img, FukuwaraiShirotohoshi4Img, FukuwaraiShirotohoshi5Img, FukuwaraiShirotohoshi6Img, FukuwaraiShirotohoshi7Img, FukuwaraiShirotohoshi8Img, FukuwaraiShirotohoshi9Img, FukuwaraiShirotohoshi10Img, FukuwaraiShirotohoshi11Img, FukuwaraiShirotohoshi12Img, FukuwaraiShirotohoshi13Img, FukuwaraiShirotohoshi14Img, FukuwaraiShirotohoshi15Img, FukuwaraiShirotohoshi16Img, FukuwaraiShirotohoshiImg } from "../../components/thumbnailImages"

const FukuwaraiShirotohoshi = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/tentoufukuwarai" text="テントウ福笑い" />

      <SectionLarge title="フタホシテントウを作ってみよう！">
        <p class="main-text">
          パーツをドラッグすることでイラストに重ねられます。出来上がったら下の完成図と照らし合わせてみましょう！
        </p>

        <div className="fukuwarai-container">
          <div className="fukuwarai-base">
            <FukuwaraiShirotohoshiBaseImg />
          </div>

          <div className="fukuwarai-parts-container">
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi1Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi2Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi3Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi4Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi5Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi6Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi7Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi8Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi9Img />
            </FukuwaraiParts>
            <FukuwaraiParts>
              <FukuwaraiShirotohoshi10Img />
            </FukuwaraiParts>

            <FukuwaraiParts size="100">
              <FukuwaraiShirotohoshi11Img />
            </FukuwaraiParts>
            <FukuwaraiParts size="100">
              <FukuwaraiShirotohoshi12Img />
            </FukuwaraiParts>
            <FukuwaraiParts size="100">
              <FukuwaraiShirotohoshi13Img />
            </FukuwaraiParts>
            <FukuwaraiParts size="100">
              <FukuwaraiShirotohoshi14Img />
            </FukuwaraiParts>
            <FukuwaraiParts size="100">
              <FukuwaraiShirotohoshi15Img />
            </FukuwaraiParts>
            <FukuwaraiParts size="100">
              <FukuwaraiShirotohoshi16Img />
            </FukuwaraiParts>
          </div>

          <details className="fukuwarai-details">
            <summary className="fukuwarai-summary">完成図</summary>
            <FukuwaraiShirotohoshiImg />
          </details>
        </div>
      </SectionLarge>

      <Footer />
    </div>
  )
}

export default FukuwaraiShirotohoshi
