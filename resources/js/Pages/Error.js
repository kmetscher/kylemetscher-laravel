import React, {useContext} from "react";
import Layout from "./Layout";
import ErrorMessage from "./ErrorMessage";
import Site from "./Site";

export default function Error(props) {
    let errorDoge;
    switch (props.status) {
        case 401:
            errorDoge = '/storage/images/401.png';
            break;
        case 403:
            errorDoge = '/storage/images/403.png';
            break;
        case 404:
            errorDoge = '/storage/images/404.png';
            break;
        case 405:
            errorDoge = '/storage/images/405.png';
            break;
        case 419:
            errorDoge = '/storage/images/419.png';
            break;
        case 500:
            errorDoge = '/storage/images/500.png';
            break;
        case 503:
            errorDoge = '/storage/images/503.png';
    }
    return (
        <Layout>
            <Site title={props.status} />
            <div className="blogpost">
                <img src={errorDoge} alt={props.status} className="blogpost"/>
                <ErrorMessage />
            </div>
        </Layout>
    )
}