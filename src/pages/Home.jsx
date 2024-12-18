import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import baseURL from "../../baseURL";

export default function Home({setModalData}) {
  const api = baseURL();
  
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const getdata = async () => {
      const response = await api.get("/find/3pm-client-MECAZON/products");
      let data = response.data;
      console.log(data);
      setProducts(data);
      return response.data;
    }
    getdata();
  },[]);

  return <>
    <Carousel count={Math.ceil(self.innerWidth/200)<10?Math.ceil(self.innerWidth/200):10} setModalData={setModalData} data={products}/>
    <div className={styles.banner}>
        <img
          className={styles.image}
          src="/homeAd.PNG"
          alt="Black Man"
          draggable="false"
        />
        <div className={styles.column}>
          <h1 className={styles.title}>Mecazon TitanX Pro 9000 Deluxe 2.0</h1>
          <p className={styles.text}>
            Experience cutting-edge technology with the Mecazon TitanX Pro 9000
            Deluxe 2.0, designed with a Radeon RTX 4090 TI, 256gb DDR5 RAM,
            Ryzen Core I9 12th Generation CPU, 10000 watt power bank, 16
            terabytes NVME 3.0 storage, and water-cooled. Crafted with precision
            and love, the TitanX Pro delivers unmatched speed, performance, and
            reliability. Your Roblox experience.
          </p>
          <p className={styles.text2}>*May blow up</p>
        </div>
      </div>
  </>;
}
