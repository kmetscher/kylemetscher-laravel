import React from "react";
import Layout from "./Layout";
import Tagline from "./Tagline";
import { formatDate } from "./formatDate";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import DateList from "./DateList";

export default function Archive(props) {
    return(
        <Layout>
            <Tagline taglinetype='archive' />
            <div className="archive">
                <ol>
                    <DateList />
                </ol>
            </div>
        </Layout>
    );
}
