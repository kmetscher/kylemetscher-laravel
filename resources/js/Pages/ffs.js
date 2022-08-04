import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
export default function Ffs(props) {
    const [form, setForm] = useState({
        test: '',
    })
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            Inertia.post('/ffs', form);
        }}>
            {props.values && <h1>{values}</h1>}
            <input type="text" name="test" id="test" value={form.test} 
            onChange={(e) => setForm({
                test: e.target.value
            })}/>
            <input type="submit" value="submit" />
        </form>
    );
}