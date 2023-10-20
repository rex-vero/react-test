import styles from './Nav.module.css';
const Nav = () => {
    return (
        <nav className={styles.back}>
            <div className="container-fluid d-flex justify-content-between align-items-lg-center align-items-start flex-column flex-lg-row">
                <div className={`d-flex my-3 my-lg-0 ${styles.border}`}>
                    <button className={styles.search}><i class="bi bi-search"></i></button>
                    <input type='search' placeholder='Search' className={` ${styles.input}`} />
                </div>
                <div>
                    <h1 className='text-white'>REACT TEST</h1>
                </div>
                <div className={`nav-item ${styles.dropdown}`}>
                    <a className='nav-link fs-3 text-white' href="#">
                        Who am I?
                    </a>
                    <div className={`${styles.dropdownmenu}`}>
                        <span className={styles.hover}><a className={`text-decoration-none ${styles.link}`} href="https://github.com/rex-vero"><i className={`bi bi-github ${styles.github}`}></i></a></span>
                        <span className={styles.hover}><a className={`text-decoration-none ${styles.link}`} href="https://t.me/words_of_madness"><i className={`bi bi-telegram ${styles.telegram}`}></i></a></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav;