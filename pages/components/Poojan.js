import Image from "next/image"
import styles from '../../styles/Home.module.css'
import Four04 from "../404"
import { AdhyayanData, PoojanData } from "./Data"

export default function Data() {
  return (<Four04 />)
}

export const Pooja = () => {
  const data = PoojanData
  if (data.length === 0) {
    return (<>Error</>)
  }
  else {
    return (<><h1 style={{ textAlign: "center", marginTop: "20px" }}>Poojan Paddhati</h1>
      <div className={styles.grid}>
        {data.map((val) => {
          return <a href={`/poojan/${val.id}`} className={styles.card}>
            <div style={{ margin: "10px 0" }}>
              <Image src="/yajna.png" width={100} height={100} />
            </div>
            <h2>{val.name}</h2>
          </a>
        })}
      </div></>)
  }
}

export const Adhyayan = () => {
  const data = AdhyayanData
  if (data.length === 0) {
    return (<>Error</>)
  }
  else {
    return (<><h1 style={{ textAlign: "center", marginTop: "20px" }}>Adhyayan</h1>
      <div className={styles.grid}>
        {data.map((val) => {
          return <a href={`/adhyayan/${val.id}`} className={styles.card}>
            <div style={{ margin: "10px 0" }}>
              <Image src="/book.svg" width={100} height={100} />
            </div>
            <h2>{val.name}</h2>
          </a>
        })}
      </div></>)
  }
}