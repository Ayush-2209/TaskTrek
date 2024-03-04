import React, { useState } from "react";
import axios from "axios";

function Create() {
    const [task, setTask] = useState('');

    const handleAdd = (e) => {
        e.preventDefault(); // Prevent form submission
        axios.post("http://localhost:3001/add", { task: task })
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <form>
            <input type="text" placeholder="Enter Task" className="create_form input" onChange={(e) => setTask(e.target.value)} />
            <button type="submit" className="create_form button" onClick={handleAdd}>Add</button>
        </form>
    );
}

export default Create;
