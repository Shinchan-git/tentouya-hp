import * as React from "react"
import "../css/global.css"
import Header from "../components/header"
import Footer from "../components/footer"
import WorksCard from "../components/worksCard"
import BackButton from "../components/backButton"
import { kamenokoPapercraft, tentouPostCardA, tentouPostCardB, yahoshiTShirt, amidaTShirt, phoneCaseTatesujihime, phoneCasePop, blanketPop } from "../components/worksData"
import { KamenokoImg, PostcardAImg, PostcardBImg, YahoshiTShirtImg, AmidaTShirtImg, PhoneCaseTatesujihimeImg, PhoneCasePopImg, BlanketPopImg } from "../components/thumbnailImages"

const Works = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />

      <Header />

      <div className="line-padding-10" />
      <div className="section-large-no-margin">
        <BackButton link="/" text="トップ" />
        <p className="title text-center">グッズ一覧</p>
        <div className="works-card-container">
          <WorksCard link="/works/kamenokotentou-papercraft" title={kamenokoPapercraft.title}>
            <KamenokoImg page="works" />
          </WorksCard>

          <WorksCard link="/works/tentou-postcard-1" title={tentouPostCardA.title}>
            <PostcardAImg page="works" />
          </WorksCard>

          <WorksCard link="/works/tentou-postcard-2" title={tentouPostCardB.title}>
            <PostcardBImg page="works" />
          </WorksCard>

          <WorksCard link="/works/yahoshi-tshirt" title={yahoshiTShirt.title}>
            <YahoshiTShirtImg page="works" />
          </WorksCard>

          <WorksCard link="/works/amida-tshirt" title={amidaTShirt.title}>
            <AmidaTShirtImg page="works" />
          </WorksCard>

          <WorksCard link="/works/phone-case-tatesujihimejinngasahamushi" title={phoneCaseTatesujihime.title}>
            <PhoneCaseTatesujihimeImg page="works" />
          </WorksCard>

          <WorksCard link="/works/phone-case-pop" title={phoneCasePop.title}>
            <PhoneCasePopImg page="works" />
          </WorksCard>

          <WorksCard link="/works/blanket-pop" title={blanketPop.title}>
            <BlanketPopImg page="works" />
          </WorksCard>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Works
