import styles from '../assets/styles/Home.module.css';

const Layout = ({children}: any) => {
    return (
        <>
            <main className={styles.main}>{children}</main>
        </>
    )
}
export default Layout;