import React from "react"
import "../css/global.css"
import { StaticImage } from "gatsby-plugin-image"

export function KamenokoImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/kamenoko_img.jpg"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/kamenoko_img.jpg"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/kamenoko_img.jpg"
        placeholder="blurred"
      />
    )
  }
}

export function PostcardAImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/tentou_post_card_img.jpg"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/tentou_post_card_img.jpg"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/tentou_post_card_img.jpg"
        placeholder="blurred"
      />
    )
  }
}

export function PostcardBImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/postcard_b_img.jpg"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/postcard_b_img.jpg"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/postcard_b_img.jpg"
        placeholder="blurred"
      />
    )
  }
}

export function YahoshiTShirtImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/yahoshitshirt.png"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/yahoshitshirt.png"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/yahoshitshirt.png"
        placeholder="blurred"
      />
    )
  }
}

export function AmidaTShirtImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/amida_tshirt.png"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/amida_tshirt.png"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/amida_tshirt.png"
        placeholder="blurred"
      />
    )
  }
}

export function PhoneCaseTatesujihimeImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/phone_case_tatesujihime.png"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/phone_case_tatesujihime.png"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/phone_case_tatesujihime.png"
        placeholder="blurred"
      />
    )
  }
}

export function PhoneCasePopImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/smartphone_case_img.png"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/smartphone_case_img.png"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/smartphone_case_img.png"
        placeholder="blurred"
      />
    )
  }
}

export function BlanketPopImg(props) {
  if (props.page === "top") {
    return (
      <StaticImage
        src="../images/thumbnails/tentou_blanket_pop.png"
        placeholder="blurred"
        className="card-img left-border-radius"
      />
    )
  } else if (props.page === "works") {
    return (
      <StaticImage
        src="../images/thumbnails/tentou_blanket_pop.png"
        placeholder="blurred"
        className="works-card-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/thumbnails/tentou_blanket_pop.png"
        placeholder="blurred"
      />
    )
  }
}

export function FukuwaraiImg() {
  return (
    <StaticImage
      src="../images/thumbnails/fukuwarai_thumbnail.jpg"
      placeholder="blurred"
      className="card-img left-border-radius"
    />
  )
}

export function KamenokoYoutubeFrame() {
  return (
    <main className="youtube-frame-container">
      <iframe
        className="youtube-frame"
        src="https://www.youtube.com/embed/esBwF8qbMOo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </main>
  )
}

export function FukuwaraiFutahoshiImg(props) {
  if (props.size === "small") {
    return (
      <StaticImage
        src="../images/fukuwarai/futahoshi/futahoshi_comp.png"
        placeholder="blurred"
        className="small-specimen-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/fukuwarai/futahoshi/futahoshi_comp.png"
        placeholder="blurred"
        className="large-specimen-img"
      />
    )
  }
}

export function FukuwaraiFutahoshiBaseImg() {
  return (
    <StaticImage
      src="../images/fukuwarai/futahoshi/futahoshi_base.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiFutahoshi1Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/futahoshi/futahoshi_1.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiFutahoshi2Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/futahoshi/futahoshi_2.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshiImg(props) {
  if (props.size === "small") {
    return (
      <StaticImage
        src="../images/fukuwarai/nanahoshi/nanahoshi_comp.png"
        placeholder="blurred"
        className="small-specimen-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/fukuwarai/nanahoshi/nanahoshi_comp.png"
        placeholder="blurred"
        className="large-specimen-img"
      />
    )
  }
}

export function FukuwaraiNanahoshiBaseImg() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_base.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi1Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_1.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi2Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_2.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi3Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_3.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi4Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_4.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi5Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_5.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi6Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_6.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiNanahoshi7Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/nanahoshi/nanahoshi_7.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshiImg(props) {
  if (props.size === "small") {
    return (
      <StaticImage
        src="../images/fukuwarai/shirotohoshi/shirotohoshi_comp.png"
        placeholder="blurred"
        className="small-specimen-img"
      />
    )
  } else {
    return (
      <StaticImage
        src="../images/fukuwarai/shirotohoshi/shirotohoshi_comp.png"
        placeholder="blurred"
        className="large-specimen-img"
      />
    )
  }
}

export function FukuwaraiShirotohoshiBaseImg() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_base.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi1Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_1.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi2Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_2.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi3Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_3.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi4Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_4.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi5Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_5.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi6Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_6.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi7Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_7.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi8Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_8.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi9Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_9.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi10Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_10.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi11Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_11.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi12Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_12.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi13Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_13.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi14Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_14.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi15Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_15.png"
      placeholder="blurred"
    />
  )
}

export function FukuwaraiShirotohoshi16Img() {
  return (
    <StaticImage
      src="../images/fukuwarai/shirotohoshi/shirotohoshi_16.png"
      placeholder="blurred"
    />
  )
}