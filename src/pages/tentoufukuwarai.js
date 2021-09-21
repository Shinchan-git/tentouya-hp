import * as React from "react"
import "../css/global.css"
import Header from "../components/header"
import SectionLarge from "../components/sectionLarge"
import BackButton from "../components/backButton"
import Footer from "../components/footer"
import Specimen from "../components/specimen"
import { FukuwaraiFutahoshiImg, FukuwaraiNanahoshiImg, FukuwaraiShirotohoshiImg } from "../components/thumbnailImages"

const Fukuwarai = () => {
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
      <BackButton link="/" text="トップ" />

      <SectionLarge title="テントウ福笑い">
        <p class="main-text">
          バラバラになった模様を元の位置に戻してテントウムシを完成させよう！
        </p>

        <div className="specimen-container">
          <Specimen link="/tentoufukuwarai/futahoshi" title="フタホシテントウ">
            <FukuwaraiFutahoshiImg size="small" />
          </Specimen>

          <Specimen link="/tentoufukuwarai/nanahoshi" title="ナナホシテントウ">
            <FukuwaraiNanahoshiImg size="small" />
          </Specimen>

          <Specimen link="/tentoufukuwarai/shirotohoshi" title="シロトホシテントウ">
            <FukuwaraiShirotohoshiImg size="small" />
          </Specimen>
        </div>
      </SectionLarge>

      <Footer />
    </div>
  )
}

export default Fukuwarai
