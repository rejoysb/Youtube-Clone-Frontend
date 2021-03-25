import React from 'react';
import {SidebarData} from "./SidebarData"
import "./Sidebar.css"


const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
       {
           SidebarData.map((ele, index)=>{



            return <div className="sidebarRow" id={ ele.path ===window.location.pathname?"active":""} onClick ={()=>{window.location.pathname=(ele.path)}} key={index}>
                        <div id="iconContainer" className={ ele.path ===window.location.pathname?"active":"sidebarRow"}>
                            {ele.icon}
                        </div>
                        <div id = "titleContainer">
                            <p>{ele.title}</p>
                        </div>

                    </div>

           })


       }
       <hr/>

        </div>
    );
};

export default Sidebar;