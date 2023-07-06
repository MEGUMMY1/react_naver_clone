import styled from "styled-components";
import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.social}>
                    <a className={styles.a} href="https://www.facebook.com/naverengineering"><img src="https://naver.github.io/assets/images/layout/common/ico-facebook.png"/></a>
                    <a className={styles.a} href="mailto://opensource@navercorp.com"><img src="https://naver.github.io/assets/images/layout/common/ico-mail-black.png"/></a>
                </div>
                <div className={styles.links}>
                    <a className={styles.a} href="https://developers.naver.com/main/"><img src="https://naver.github.io/assets/images/layout/common/naver-developers-ico.png"/></a>
                    <a className={styles.a} href="https://d2.naver.com/home"><img src="https://naver.github.io/assets/images/layout/common/naver-d-2-ico.png"/></a>
                </div>
                <p className={styles.copy}>© NAVER Corp.</p>
            </div>
        </div>
    )
}

export default Footer;