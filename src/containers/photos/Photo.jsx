import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './photo.module.scss'

const Photo = () => {
    return (
        <div id='photo' className={classes.ctn}>
                <ArrowUpIcon/>
            <div className={classes.photo}>
                    <h2>PHOTOS</h2>
            </div>
            <div className={classes.gallery}>
            {/* Ici je peux creer un composant si besoin pour chaque photo */}
                <img src="/assets/img/diapo_1.JPG"></img>
                <img src="/src/assets/img/diapo_2.JPG"></img>
                <img src="/src/assets/img/diapo_3.JPG"></img>
            </div>
        </div>
    )
}

export default Photo