import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './photo.module.scss'

const Photo = () => {
    return (
        <div id='photo' className={classes.ctn}>
                <ArrowUpIcon/>
            <div className={classes.photo}>
                    <h2>PHOTOS</h2>
            </div>
            <div className={classes.photo_item_right}>
                    {/* <img src="../src/assets/img/7Y0A9409.JPG" alt="carla" className={classes.img}/> */}
            </div>
        </div>
    )
    
}

export default Photo