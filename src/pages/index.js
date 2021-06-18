import * as React from "react"
import { Link } from "gatsby"
import "../css/global.css"
import Header from "../components/header"
import PageTopSentence from "../components/pageTopSentence"
import TopNews from "../components/topNews"
import SectionLarge from "../components/sectionLarge"
import ShopLink from "../components/shopLink"
import Card from "../components/card"
import Footer from "../components/footer"
import { tentouPlayingCards, kamenokoPapercraft, tentouPostCardA, kasaiTShirt, fukuwarai } from "../components/worksData"
import { TentouPlayingCardsImg, KamenokoImg, PostcardAImg, KasaiTShirtImg, FukuwaraiImg } from "../components/thumbnailImages"

const IndexPage = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content="てんとうや" />
      <meta name="twitter:image" content="https://tentouya.netlify.app/static/twitter_card_img.png" />

      <Header />

      <PageTopSentence>
        <p className="medium main-text">
          テントウムシを中心に昆虫グッズを作っています。
        </p>
        <ShopLink title="Twitter" link="https://twitter.com/tentouya64?lang=ja">
          <span className="link highlight">@tentouya64&nbsp;&#8599;</span>
        </ShopLink>
      </PageTopSentence>

      <div className="top-news-container">
        <TopNews />
      </div>

      <SectionLarge title="グッズ" id="works">
        <Link to={"/works"} className="link highlight">すべてみる&nbsp;&gt;</Link>

        <Card title={tentouPlayingCards.title} description={tentouPlayingCards.description} link={tentouPlayingCards.link} toLink="detail" detailLink={tentouPlayingCards.detailLink}>
          <TentouPlayingCardsImg page="top" />
        </Card>
        <Card title={kamenokoPapercraft.title} description={kamenokoPapercraft.description} link={kamenokoPapercraft.link} toLink="detail" detailLink={kamenokoPapercraft.detailLink}>
          <KamenokoImg page="top" />
        </Card>
        <Card title={tentouPostCardA.title} description={tentouPostCardA.description} link={tentouPostCardA.link}>
          <PostcardAImg page="top" />
        </Card>
        <Card title={kasaiTShirt.title} description={kasaiTShirt.description} link={kasaiTShirt.link}>
          <KasaiTShirtImg page="top" />
        </Card>

        <Link to={"/works"} className="link highlight">もっとみる&nbsp;&gt;</Link>
      </SectionLarge>

      <SectionLarge title="テントウ福笑い" id="fukuwarai">
        <p class="main-text">
          Web上で遊べるテントウムシの福笑いを作ってみました。
        </p>
        <Card description={fukuwarai.description} link={fukuwarai.link} toLink="fukuwarai">
          <FukuwaraiImg />
        </Card>
      </SectionLarge>

      <Footer />
    </div>
  )
}

export default IndexPage
