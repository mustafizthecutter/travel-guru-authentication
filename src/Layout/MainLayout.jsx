import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;