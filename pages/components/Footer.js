import Four04 from "../404"
import { url, AdhyayanData, PoojanData } from './Data'

export default function Data() {
  return (<Four04 />)
}

export const Footer = () => {
  let poojan = PoojanData
  let tatt = poojan.slice(0, 3)
  let adhy = AdhyayanData
  let adh = adhy.slice(0, 3)
  return (<footer className="footer">
    <div className="container py-5">
      <div className="row">
        <div className="footer-col">
          <h4>Karmakaand</h4>
          <ul>
            <li><a href={`/${url}/`}>Home</a></li>
            <li><a href={`/${url}/about`}>About Us</a></li>
            <li><a href={`/${url}/contact`}>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Poojan Paddhati</h4>
          <ul>
            {tatt.map((val) => {
              return <li><a href={`/${url}/poojan/${val.id}`}>{val.name}</a></li>
            })}
            {PoojanData.length > 4 ? <li><a href={`/${url}/poojan`}>More...</a></li> : ""}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Adhyayan</h4>
          <ul>
            {adh.map((val) => {
              return <li><a href={`/${url}/adhyayan/${val.id}`}>{val.name}</a></li>
            })}
            {AdhyayanData.length > 4 ? <li><a href={`/${url}/adhyayan`}>More...</a></li> : ""}
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links mb-1">
            <a href={`/${url}/#`}><i className="fab fa-facebook-f" /></a>
            <a href={`/${url}/#`}><i className="fab fa-twitter" /></a>
            <a href={`/${url}/#`}><i className="fab fa-instagram" /></a>
            <a href={`/${url}/#`}><i className="fab fa-linkedin-in" /></a>
          </div>
          <h4>Share On</h4>
          <div className="social-links">
            <a href={`/${url}/#`}><i className="fab fa-facebook-f" /></a>
            <a href={`/${url}/#`}><i className="fab fa-twitter" /></a>
            <a href={`/${url}/#`}><i className="fab fa-instagram" /></a>
            <a href={`/${url}/#`}><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}