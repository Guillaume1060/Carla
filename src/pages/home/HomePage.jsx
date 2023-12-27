import Home from "../../containers/home/Home";
import About from "../../containers/about/About"
import Suscribe from "../../containers/suscribe/Suscribe"
import Photo from "../../containers/photos/Photo";
import Press from "../../containers/press/Press";

const HomePage = () => {
    return (
        < >
            <Home/>
            <About/>
            <Photo/>
            <Press/>
            {/* <Video/>
            <Concert/>
            <Store/> */}
            <Suscribe/>
        </>
    )
}

export default HomePage