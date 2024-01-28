import { FaLongArrowAltRight } from "react-icons/fa";



const HomePage = () => {
    return (
        <div>
            <div className="hero min-h-screen" >
                <div className="hero-content flex">
                    <div className="text-white">
                        <h1 className="text-7xl font-bold">COXS BAZAR</h1>
                        <p className="py-6 ">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className="btn bg-[#F9A51A] border-0">
                            <FaLongArrowAltRight /> Booking </button>
                    </div>
                    <div className="flex gap-6 text-white ">
                        <div className="">
                            <img src="/src/assets/Rectangle 1.png" className="max-w-sm rounded-lg shadow-2xl w-[200px] h-[250px]" />
                            <h2 className="text-2xl">COX'S BAZAR</h2>
                        </div>
                        <div>
                            <img src="/src/assets/Sreemongol.png" className="max-w-sm rounded-lg shadow-2xl w-[200px] h-[250px]" />
                            <h2 className="text-2xl">SREEMANGAL</h2>
                        </div>
                        <div>
                            <img src="/src/assets/sundorbon.png" className="max-w-sm rounded-lg shadow-2xl w-[200px] h-[250px]" />
                            <h2 className="text-2xl">SUNDARBANS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;