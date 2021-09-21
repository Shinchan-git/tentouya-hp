import * as React from "react"
import "../css/global.css"
import Header from "../components/header"
import Footer from "../components/footer"
import WorksCard from "../components/worksCard"
import BackButton from "../components/backButton"
import { tentouPlayingCards, kamenokoPapercraft, horseshoeCrabPapercraft, maimaikaburiPapercraft, tentouPostCardA, tentouPostCardB, kasaiTShirt, amidaTShirt, yahoshiTShirt, beatingNetBandana, phoneCaseTatesujihime, phoneCasePop } from "../components/worksData"
import { TentouPlayingCardsImg, KamenokoImg, HorseshoeCrabImg, MaimaikaburiImg, PostcardAImg, PostcardBImg, KasaiTShirtImg, AmidaTShirtImg, YahoshiTShirtImg, BeatingNetBandanaImg, PhoneCaseTatesujihimeImg, PhoneCasePopImg } from "../components/thumbnailImages"

const Works = () => {
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
      <meta name="theme-color" content="#0B308F" />

      <Header />

      <div className="line-padding-10" />
      <div className="section-large-no-margin">
        <BackButton link="/" text="トップ" />
        <p className="title text-center">グッズ一覧</p>
        <div className="works-card-container">
          <WorksCard link="/works/tentou-playing-cards" title={tentouPlayingCards.title}>
            <TentouPlayingCardsImg page="works" />
          </WorksCard>

          <WorksCard link="/works/horseshoecrab-papercraft" title={horseshoeCrabPapercraft.title}>
            <HorseshoeCrabImg page="works" />
          </WorksCard>

          <WorksCard link="/works/maimaikaburi-papercraft" title={maimaikaburiPapercraft.title}>
            <MaimaikaburiImg page="works" />
          </WorksCard>

          <WorksCard link="/works/kamenokotentou-papercraft" title={kamenokoPapercraft.title}>
            <KamenokoImg page="works" />
          </WorksCard>

          <WorksCard link="/works/tentou-postcard-1" title={tentouPostCardA.title}>
            <PostcardAImg page="works" />
          </WorksCard>

          <WorksCard link="/works/tentou-postcard-2" title={tentouPostCardB.title}>
            <PostcardBImg page="works" />
          </WorksCard>

          <WorksCard link="/works/kasai-tshirt" title={kasaiTShirt.title}>
            <KasaiTShirtImg page="works" />
          </WorksCard>

          <WorksCard link="/works/amida-tshirt" title={amidaTShirt.title}>
            <AmidaTShirtImg page="works" />
          </WorksCard>

          <WorksCard link="/works/yahoshi-tshirt" title={yahoshiTShirt.title}>
            <YahoshiTShirtImg page="works" />
          </WorksCard>

          <WorksCard link="/works/beating-net-bandana" title={beatingNetBandana.title}>
            <BeatingNetBandanaImg page="works" />
          </WorksCard>

          <WorksCard link="/works/phone-case-tatesujihimejinngasahamushi" title={phoneCaseTatesujihime.title}>
            <PhoneCaseTatesujihimeImg page="works" />
          </WorksCard>

          <WorksCard link="/works/phone-case-pop" title={phoneCasePop.title}>
            <PhoneCasePopImg page="works" />
          </WorksCard>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Works
