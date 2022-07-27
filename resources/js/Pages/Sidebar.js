import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import SidebarTags from "./SidebarTags";
import SidebarArchive from "./SidebarArchive";
import Lightswitch from "./Lightswitch";
import Languages from "./Languages";

export default function Sidebar(props) {
    return(
        <div className="sidebar">
            <Lightswitch />
            <SidebarTags />
            <SidebarArchive />
            <Languages />
        </div>
    );
}