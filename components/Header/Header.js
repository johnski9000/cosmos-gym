import React, {useEffect} from 'react'
import styles from "./Header.module.css"
import Menu from './Menu'
import Aos from "aos"
import "aos/dist/aos.css"

function Header() {
    useEffect(() => {
        Aos.init();
    }, [])
    
    const original = "https://static.wixstatic.com/media/f13c9c_88af1eba0d054e288572c25d306ba004~mv2.png/v1/fill/w_717,h_242,al_c,lg_1,q_85,enc_auto/sale_weights_logo1.png"
    const logoBlack = "https://i8.amplience.net/i/jpl/screenshot-2023-04-08-at-112752-removebg-preview-789b65de3853dfae7249f5ac906b1339"
    const logoWhite = "https://i8.amplience.net/i/jpl/screenshot-2023-04-08-at-113540-647ad6f90e3935f886456fad07decea0"
    const logoBlue = "https://i8.amplience.net/i/jpl/screenshot-2023-04-12-at-140954-removebg-preview-f08f675adb4759062c14463c17214c3f"
    const newLogo = "https://i8.amplience.net/i/jpl/screenshot-2023-04-12-at-220339-removebg-preview-c0823396395aa214fe857b3fb2968373"
    const newNew = "https://i8.amplience.net/i/jpl/screenshot-2023-04-13-at-123504-removebg-preview-609e7d9015549b6933c386493c041e2b"
    const newnew = "https://i8.amplience.net/i/jpl/screenshot-2023-04-13-at-124904-removebg-preview-a45ecd377cca424d1a58d2b8a3daea79"
    return (
    <nav className={styles.header}>
        <div className={styles.headerWrapper}>
 <div className={styles.logo}>
            <img src={newNew} alt='sale weightlifting club banner' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
        </div>
        <Menu/>
        
        </div>
    </nav>
  )
}

export default Header
