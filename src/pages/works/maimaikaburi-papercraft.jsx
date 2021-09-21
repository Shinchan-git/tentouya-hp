import React from "react"
import "../../css/global.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WorksDetail from "../../components/worksDetail"
import BackButton from "../../components/backButton"
import { maimaikaburiPapercraft } from "../../components/worksData"
import { MaimaikaburiImages, MaimaikaburiYoutubeFrame } from "../../components/thumbnailImages"


const Description = () => {
  return (
    <p className="main-text">
      マイマイカブリ基亜種（ホンマイ）のペーパークラフトです。<br /><br />
      曲線に沿って折ることで立体感を表現しています。<br /><br />
      ご購入いただくと、PDFファイルの展開図がダウンロードできます。<br />
      ぜひ紙で立体作品を作る楽しさを見つけてみてください！
    </p>
  )
}

const MaimaikaburiPapercraft = () => {

  // const colors = [
  //   {
  //     name: "黒",
  //     link: "https://tentouya.base.shop"
  //   },
  //   {
  //     name: "赤",
  //     link: "https://tentouya.base.shop"
  //   },
  //   {
  //     name: "緑",
  //     link: "https://tentouya.base.shop"
  //   },
  //   {
  //     name: "赤紫",
  //     link: "https://tentouya.base.shop"
  //   },
  //   {
  //     name: "青紫",
  //     link: "https://tentouya.base.shop"
  //   },
  // ]

  // const ColorSelection = () => {
  //   return (
  //     <ul className="color-sample-table">
  //       <p className="supporting-text">カラーバリエーション</p>
  //       {colors.map((color, index) => (
  //         <li className="color-sample-cell" key={index}>
  //           <ColorSample index={index} />
  //           <span className="color-sample-element">{color.name}</span>
  //           <span className="color-sample-element inline-block"><BuyButton link={color.link} /></span>
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  // const ColorSample = (props) => {
  //   switch (props.index) {
  //     case 0:
  //       return <div className="maimaikaburi-color-sample maimaikaburi-black" />
  //     case 1:
  //       return <div className="maimaikaburi-color-sample maimaikaburi-red" />
  //     case 2:
  //       return <div className="maimaikaburi-color-sample maimaikaburi-green" />
  //     case 3:
  //       return <div className="maimaikaburi-color-sample maimaikaburi-red-purple" />
  //     case 4:
  //       return <div className="maimaikaburi-color-sample maimaikaburi-blue-purple" />
  //     default:
  //       return <div className="maimaikaburi-color-sample maimaikaburi-black" />
  //   }
  // }

  // const BuyButton = (props) => {
  //   return (
  //     <div className="buy-button">
  //       <a href={props.link} target="_blank" rel="noopener noreferrer" className="in-text-link">
  //         購入する&nbsp;&#8599;
  //       </a>
  //     </div>
  //   )
  // }

  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={maimaikaburiPapercraft.title + " - てんとうや"} />
      <meta name="twitter:image" content={maimaikaburiPapercraft.twitterImg} />
      <meta name="theme-color" content="#f3f4f7" />

      <Header />
      <div className="line-padding-10" />
      <BackButton link="/works" text="グッズ一覧" />

      <main className="works-detail-container">
        <WorksDetail data={maimaikaburiPapercraft}>
          <div className="padding-30-0">
            <MaimaikaburiImages imgNum="1" />
          </div>

          <div className="buy-button">
            <a href={maimaikaburiPapercraft.link} target="_blank" rel="noopener noreferrer" className="link highlight">
              購入する&nbsp;&#8599;
            </a>
          </div>

          <Description />

          <div className="padding-30-0">
            <MaimaikaburiImages imgNum="2" />
          </div>

          <div className="padding-30-0">
            <MaimaikaburiYoutubeFrame />
          </div>

        </WorksDetail>
      </main>

      <Footer />
    </div>
  )
}

export default MaimaikaburiPapercraft
