import Script from "next/script"
import Four04 from "../404"
import { AdhyayanData, PoojanData } from './Data'

export default function Data() {
  return (<Four04 />)
}

export const Navbar = () => {
  let poojan = PoojanData
  let tatt = poojan.slice(0, 10)
  let adhy = AdhyayanData
  let adh = adhy.slice(0, 10)
  return (<>
    <Script src="/script.js"></Script>
    <nav>
      <div className="navbar">
        <a style={{ textAlign: 'center' }} className="logo" href="/"><p style={{ fontSize: 30 }}>Karmakaand</p>
          {/* <p style={{ fontSize: 17 }}>विद्याधनं सर्वधनेषु प्रधानम्</p> */}
        </a>
        <div className="nav_links">
          <div className="less-option">
            <a className="navbar-link" href="/">Home</a>
            <a className="navbar-link" href="/about">About</a>
            <div className="dropdown dropdown-hide">
              <a href="/poojan" style={{ fontSize: '1rem', display: 'flex', borderBottom: '2px solid rgba(0, 0, 0, 0)' }} className="more navbar-link dropbtn-hide">Poojan Paddhati
                <svg fill="none" style={{ width: 15, marginLeft: 5 }} viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="ml-2 h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7">
                  </path>
                </svg></a>
              <div className="dropdown-content dropdown-content-hide">
                {tatt.map((val) => {
                  return <a className="normal" href={`/poojan/${val.id}`} style={{ display: 'flex', alignItems: 'center' }}>{val.name}</a>
                })}
                {PoojanData.length > 10 ? <a href={`/poojan`} style={{ display: 'flex', color: "inherit", alignItems: 'center', textAlign: "end" }}>Aadi</a> : ""}
              </div>
            </div>
            <div className="dropdown dropdown-hide">
              <a href="/adhyayan" style={{ fontSize: '1rem', display: 'flex', borderBottom: '2px solid rgba(0, 0, 0, 0)' }} className="more navbar-link dropbtn-hide">Adhyayan
                <svg fill="none" style={{ width: 15, marginLeft: 5 }} viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="ml-2 h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7">
                  </path>
                </svg></a>
              <div className="dropdown-content dropdown-content-hide">
                {adh.map((val) => {
                  return <a className="normal" href={`/adhyayan/${val.id}`} style={{ display: 'flex', alignItems: 'center' }}>{val.name}</a>
                })}
                {AdhyayanData.length > 10 ? <a href={`/adhyayan`} style={{ display: 'flex', color: "inherit", alignItems: 'center', textAlign: "end" }}>Aadi</a> : ""}
              </div>
            </div>
            <a className="navbar-link" href="/contact">Contact</a>
          </div>
          <button id="more" className="more-option">☰</button>
        </div>
      </div>
    </nav>
    <div className="more-menu" id="more-menu">
      <div className="close-menu">
        <button className="close" id="close">🗙</button>
      </div>
      <div className="links">
        <a className="navbar-link" href="/">Home</a>
        <a className="navbar-link" href="/about">About</a>
        <a className="navbar-link" href="/courses">Courses</a>
        <a className="navbar-link" href="/contact">Contact</a>
        <a className="navbar-link" href="/study-material">Study Material</a>
      </div>
    </div>
    <div></div>
  </>)
}