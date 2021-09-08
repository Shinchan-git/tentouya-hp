import React from "react"
import "../css/global.css"

export default function TopNews() {
  return (
    <div className="top-news">
      <p className="main-text">
        <span className="inline-block">2021年９月11(土)~12(日)、</span>
        <span className="inline-block">
          <a href="https://www.hakubutufes.info/" target="_blank" rel="noopener noreferrer" className="in-text-link">
            博物ふぇすてぃばる！
          </a>
        </span>
        <span className="inline-block">に出展します！！</span>
        <span className="inline-block">ブースはB-22です。</span>
      </p>
    </div>
  )
}
