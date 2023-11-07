import React from "react"
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import NavBar from "../../components/NavBar/NavBar"
import "./Help.less"

export default function About(props) {
  return (
    <div className="container nav-padding">
        <NavBar />
      <h1 id="title" class="white-text">HELP CENTER</h1>
    </div>
  )
}