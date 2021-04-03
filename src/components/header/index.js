import React from 'react'

import styles from '../../styles/pages/header.module.css'
function Header() {
    return(
        <div className={styles.header_container}>
           <div className={styles.header_img}>
            <div className={styles.header_gradient}></div>   
           </div>
        </div>
    )
}

export default Header