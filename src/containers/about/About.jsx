import ArrowUpIcon from '../../composants/listIcons/icons/Icons/ArrowUpIcon';
import classes from './about.module.scss'

const About = () => {
    return (
        <div id='about' className={classes.ctn}>
                <ArrowUpIcon/>
            <div className={classes.about}>
                <div className={classes.about_item_left}>
                    <h2>ABOUT</h2>
                    <p>CARLA T is a singer-songwriter, guitarist and producer from Sardinia (Italy) based in Brussels. After her studies in Philosophy, Carla decided to dedicate her life to music. 
Carla played in several music projects as a vocalist, guitar player, composer and arranger. She is now launching her first solo project.
                    </p>
                    <p>Her debut album “Tales of the borders” is a collection of songs that tell stories about the physical and metaphysical boundaries between places, emotions, personalities and lives. In this first album, Carla harmoniously combines her sensitivity as a songwriter with her passion for electronic sounds. Her music is a melting pot of influences ranging from Soul and RnB to Trip Hop and Alt Pop. Her songs are a deep trip into emotions and life experiences, colored by atmospheric guitars, enveloping synths, captivating grooves and her soulful voice.
                    </p>
                    <p>Inspired by the nu-soul vague of artists such as Jordan Rakei, Sault, Lianne La Havas, Tom Misch, Little Dragon, in this first album Carla shows a very original universe and unique sound.
                    </p>
                </div>
                <div className={classes.about_item_right}>
                    <img src="/assets/img/page_about.jpg" alt="carla" className={classes.img}/>
                </div>
            </div>
        </div>
    )
    
}



export default About