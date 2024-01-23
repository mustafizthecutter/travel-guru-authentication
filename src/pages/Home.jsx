import NavBar from "../Components/NavBar/NavBar";
import HomePage from "./HomePage";



const Home = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/wQ0qMM4/istockphoto-1363398400-612x612.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100vw',
            height: '110vh'
        }}>
            <NavBar></NavBar>
            <HomePage></HomePage>
        </div >
    );
};

export default Home;