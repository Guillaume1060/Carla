import classes from './nav.module.scss'
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div className={classes.nav_box}>
            <div className={classes.nav_box__list}>
                <HashLink smooth to={'/#about'} className={classes.nav_box__list__title}>ABOUT</HashLink>
                {/* <HashLink smooth to={'/#video'} className={classes.nav_box__list__title}>VIDEOS</HashLink>
                <HashLink smooth to={'/#concert'} className={classes.nav_box__list__title}>CONCERTS</HashLink>
                <HashLink smooth to={'/#store'} className={classes.nav_box__list__title}>STORE</HashLink> */}
                <HashLink smooth to={'/#footer'} className={classes.nav_box__list__title}>SUSCRIBE</HashLink>
            </div >
        </div>
    )
}



export default NavBar