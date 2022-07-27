import React from "react";
import SidebarTags from "./SidebarTags";
import SidebarArchive from "./SidebarArchive";
import Lightswitch from "./Lightswitch";
import Languages from "./Languages";

export default function Sidebar(props) {
    return(
        <div className="sidebarflex">
            <Lightswitch />
            <SidebarTags />
            <SidebarArchive />
            <Languages />
        </div>
    );
}