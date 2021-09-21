import * as React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { kasaiTShirt } from "../../components/worksData"
import { KasaiTShirtImg } from "../../components/thumbnailImages"

const Description = () => {
  return (
    <p className="main-text">
      珍しい、かっこいい、大きいという、珍・美・大を兼ね備えたカサイテントウの模様を抜き出してデザインしました。北海道の一部にしか分布せず、五葉松の仲間につくアブラムシを食べます。日本で似た模様のテントウはおらず、特別感の強い、作者も憧れの種です。
    </p>
  )
}

const KasaiTShirt = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={kasaiTShirt.title + " - てんとうや"} />
      <meta name="twitter:image" content={kasaiTShirt.twitterImg} />
      <meta name="theme-color" content="#f3f4f7" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={kasaiTShirt}>
          <div className="padding-30-0">
            <KasaiTShirtImg />
          </div>
          <div className="buy-button">
            <a href={kasaiTShirt.link} target="_blank" rel="noopener noreferrer" className="link highlight">
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

export default KasaiTShirt
