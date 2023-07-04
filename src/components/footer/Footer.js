import styled from "styled-components";
import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footercontainer}>
                <span><a className={styles.links} href="https://naver.github.io/assets/images/layout/common/naver-developers-ico.png"></a></span>
                <span><a className={styles.links} href="https://naver.github.io/assets/images/layout/common/naver-d-2-ico.png"></a></span>
                <span><a className={styles.a} href="https://naver.github.io/assets/images/layout/common/ico-facebook.png"></a></span>
                <span><a className={styles.a} href="https://naver.github.io/assets/images/layout/common/ico-mail-black.png"></a></span>
            </div>
        </div>
    )
}

export default Footer;