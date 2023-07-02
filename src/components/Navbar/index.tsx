import Link from "next/link";

import styles from './NavbarComponent.module.css'


const Navbar = () => {
    console.log("navbar loaded")

    return (
        <div className={styles.Navbar}>
            <Link href="/vcard/view">View</Link>
            <Link href="/vcard/edit">Edit</Link>
        </div>
    )
}

export default Navbar;