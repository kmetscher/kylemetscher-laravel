import React from "react"
import Layout from "./Layout"
import Tagline from "./Tagline"

export default function Contact(props) {
    return (
        <Layout>
            <Tagline taglinetype='contact' />
            <div className="blogpost">
                <p>
                <a href="https://github.com/kmetscher/">GitHub</a></p>
                <p><a href="https://my.indeed.com/p/kylem-7bs7wxv">Résumé</a></p>
                <p>Email</p>
                <div style = {{paddingLeft: '2vw'}}>
                <img src="/storage/images/emailsplit1.png" 
                    alt="howdy@"
                    style = {{height: 'max-content', width: 'max-content'}} />
                <img src="/storage/images/emailsplit2.png" 
                    alt="kylemetscher.com"
                    style = {{height: 'max-content', width: 'max-content'}} />
                </div>
                <p></p>
            </div>
        </Layout>
    )
} 