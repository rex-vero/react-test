import styles from './Login.module.css';
const Login = () => {
    return (
        <div className={`container-fluid ${styles.margin}`}>
            <div className='row justify-content-center align-items-center vh-100 pb-5'>
                <div className='col col-lg-5'>
                    <div className={`${styles.card} rounded-5 p-5`}>
                        <div className='card-body'>
                            <form className='d-flex flex-column'>
                                <div className="mb-3 d-flex flex-column">
                                    <label for="email" className="form-label text-white">Email</label>
                                    <input type="email" className={`rounded-pill ${styles.input}`} id="email" />
                                </div>
                                <div className="mb-3 d-flex flex-column">
                                    <label for="password" className="form-label text-white">Password</label>
                                    <input type="password" className={`rounded-pill ${styles.input}`} id="password" />
                                </div>
                                <div className="mb-3 d-flex form-check">
                                    <input type="checkbox" className={`me-2 ${styles.check}`} id="Check" />
                                    <label className="form-check-label align-self-center text-white" for="Check">Check me out</label>
                                </div>
                                <button type="submit" class={styles.btn}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;