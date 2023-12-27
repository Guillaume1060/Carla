import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './press.module.scss'

const Press = () => {
    return (
        <div id='press' className={classes.ctn}>
                <ArrowUpIcon/>
            <div className={classes.press}>
                <div className={classes.press_item_left}>
                    <h2>PRESS</h2>
                </div>
                <div className={classes.press_item_right}>
                    <img src="../src/assets/img/page_press.jpg" alt="carla" className={classes.img}/>
                </div>
            </div>
        </div>
    )
    
}



export default Press