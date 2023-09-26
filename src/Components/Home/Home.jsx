
import { useLoaderData } from "react-router-dom";
import Donations from "../Donations/Donations";
import Banner from "../Header/Banner/Banner";



const Home = () => {
    const donations = useLoaderData();
    
    return (
        <div>
            <Banner donations={donations}></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;