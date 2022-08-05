import React, {useContext} from "react";
import Layout from "./Layout";
import ErrorMessage from "./ErrorMessage";
import Site from "./Site";

export default function Error(props) {
    function getRandomDoge() {
        const number = 
        Math.floor(Math.random() * 10);
        return '/storage/images/404doge' + number + '.png';
    }

    let errorDoge;
    switch (props.status) {

    }
    return (
        <Layout>
            <Site title={props.status} />
            <div className="blogpost">
                <img src={getRandomDoge()} alt='404: Not Found' className="blogpost"/>
                <ErrorMessage />
            </div>
        </Layout>
    )
}