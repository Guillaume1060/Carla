import Home from "../../containers/home/Home";
import About from "../../containers/about/About"
import Suscribe from "../../containers/suscribe/Suscribe"

const HomePage = () => {
    return (
        < >
            <Home/>
            <About/>
            {/* <Video/>
            <Concert/>
            <Store/> */}
            <Suscribe/>
        </>
    )
}

export default HomePage