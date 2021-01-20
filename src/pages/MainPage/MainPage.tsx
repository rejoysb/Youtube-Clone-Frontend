import "./MainPage.css";
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"

const MainPage = () => {
    return (

            <div className="MainPage">
                <div className="top">
                <Navbar/>
                </div>
                <div className="center">
                  <Sidebar/>
                  <div className="videoView"></div>
                </div>


            </div>
    );
};

export default MainPage;