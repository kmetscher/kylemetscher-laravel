import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Login(props) {
    const [fields, setField] = useState({
        email: '',
        password: '',
        remember: true,
    });

    function handleChange(e) {
        const field = e.target.id;
        const value = e.target.value;
        setField({
            ...fields,
            [field]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post('/login', fields);
    }

    return(
        <div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"><h2>Email</h2></label>
                <input type="text" id="email" name="email" required="required" 
                value={fields.email} onChange={handleChange}/>
                <label htmlFor="password"><h2>Password</h2></label>
                <input type="text" id="password" name="password" required="required" 
                value={fields.password} onChange={handleChange}/>
                <br></br>
                <button type="submit">Let me in</button>
            </form>
        </div>
    )
}