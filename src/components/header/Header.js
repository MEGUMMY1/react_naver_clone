import styled from "styled-components";
import styles from './Header.module.css'

function Header(){
    return (
        <div className={styles.jumbotron}>
            <div className={styles.jumbocontainer}>
                <div className={styles.navbar}>
                    <div className={styles.container}>                
                        <div className={styles.logo}/>
                        <div className={styles.collapse}>
                            <ul className={styles.ul}>
                                <li className={styles.li}><a className={styles.a} href="https://naver.github.io/OpenSourceGuide/book/">Guide</a></li>
                                <li className={styles.li}><a className={styles.a} href="https://naver.github.io/OpenSourceGuide/book/Seminar/3.html">Seminar</a></li>
                                <li className={styles.li}><a className={styles.a} href="https://github.com/naver">Github</a></li>
                            </ul>
                        </div>
                        <div className={styles.jumbocampaign}>
                            <h2 className={styles.h2}>
                                <span>Open, Share and Enjoy!</span>
                            </h2>
                            <h3 className={styles.h3}>
                                <span>Welcome to our open source community</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;