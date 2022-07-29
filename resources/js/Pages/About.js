import React from "react";
import AboutContent from "./AboutContent";
import Layout from "./Layout";
import Tagline from "./Tagline";

export default function About(props) {

    return(
        <Layout>
            <Tagline taglinetype='about'/>
            <div className="blogpost">
                <img className="blogpost" src="/storage/images/tucson.jpg" />
                <AboutContent />
            </div>
        </Layout>
    )
}