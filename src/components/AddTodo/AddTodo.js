import React, { useState } from "react";

function AddTodo() {

    const [value, setValue] = useState('')
    console.log(value);

    function saveTodo() {

    }

    return (
        <div>
            <input placeholder='Введите задачу' value={value} onChange={ (e) => setValue(e.target.value)} />
            <button onClick={saveTodo}> Сохранить</button>
        </div>
    )
}

export default AddTodo