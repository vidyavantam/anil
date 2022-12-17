import Four04 from "../404"

export default function Data(){
  return(<Four04 />)
}

export const Footer = () => {
  return (<footer className="footer">
    <div className="container py-5">
      <div className="row">
        <div className="footer-col">
          <h4>Karmakaand</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Poojan Paddhati</h4>
          <ul>
            <li><a href="/batches/class-11-batch">Class 11th Batch</a></li>
            <li><a href="/batches/class-12-batch">Class 12th Batch</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Adhyayan</h4>
          <ul>
            <li><a href="/study-material/english-medium-ncert-books">English NCERT Books</a></li>
            <li><a href="/study-material/हिंदी-माध्यम-एन.सी.ई.आर.टी.-पुस्तकें">Hindi NCERT Books</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links mb-1">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
          <h4>Share On</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}