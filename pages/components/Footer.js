import styles from '/styles/Home.module.css'

function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
              <div className="footer-wrapper text-center font-light font-sans space-y-5">
              <p>
              ifrzky  ©   2022
              </p>
              <p className="foot-footer text-xs">
                aurora sauce theme by ifrzky
              </p>
              </div>
            </footer>
       </div>
    )  
}

export default Footer
