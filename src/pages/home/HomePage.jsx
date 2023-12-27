import Home from "../../containers/home/Home";
import About from "../../containers/about/About"
import Suscribe from "../../containers/suscribe/Suscribe"
import Photo from "../../containers/photos/Photo";

const HomePage = () => {
    return (
        < >
            <Home/>
            <About/>
            <Photo/>
            {/* <Video/>
            <Concert/>
            <Store/> */}
            <Suscribe/>
        </>
    )
}

export default HomePage