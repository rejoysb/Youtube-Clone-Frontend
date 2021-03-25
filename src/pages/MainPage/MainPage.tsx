import "./MainPage.css";

import Sidebar from "../../components/Sidebar/Sidebar"

const MainPage: React.FC = ()  => {
    return (

            <div className="MainPage">
                <div className="center">
                  <Sidebar/>
                  <div className="videoView"></div>
                </div>


            </div>
    );
};

export default MainPage;