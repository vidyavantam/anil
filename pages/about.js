import Image from "next/image"

const About = () => {
  return (<div style={{ padding: "40px" }}>
    <h1 style={{ textAlign: "center" }}>Hamse mile</h1>
    <div className='container mt-2'>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}><div className='anil-image' style={{ margin: "10px 0", borderRadius: "10%", border: "5px #ddd solid" }}><Image src="/anil-01.jpeg" width={10000} height={10000} style={{ borderRadius: "10%", width: "100%", height: "100%" }} /></div></div>
        <h2 style={{ textAlign: "center" }}>Pandit Anil Kumar Jha</h2>
        <h2 style={{ textAlign: "end" }}>- Varanasi</h2>
      </div>
    </div>
  </div>)
}

export default About