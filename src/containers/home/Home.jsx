import classes from './home.module.scss'
import ListIcons from '../../composants/listIcons/ListIcons';
import NavBar from '../nav/NavBar';

const Home = () => {

    return (
        <div id='home' className={classes.ctn} >
            <NavBar/>
                <h1 className={classes.title}>CARLA BREYER</h1>
                <div>
                
                    <div className={classes.footer}>
                    <h3 className={classes.heading}>
                        <span className={classes.heading_main}>TALES OF THE BORDERS</span>
                        <span className={classes.heading_sub}>DEBUT ALBUM</span>
                        <span className={classes.heading_sub}>OUT NOW</span>  
                    </h3>
                        {/* <Button text={'LISTEN'}  /> */}
                        <ListIcons color={'#b80032'} />
                    </div>
                </div>
        </div>

    )
}


export default Home