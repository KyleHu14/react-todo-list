import React from "react";

const createTask = () => {};

const Input = () => {
    return (
        <form className="form-style" onSubmit={createTask}>
            <div className="form-elements">
                <input className="input-style" />
                <button className="submit-btn" type="submit">
                    Create a Task
                </button>
            </div>
        </form>
    );
};

export default Input;
