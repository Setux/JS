import React from "react";

const Task = ({label}) => {
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{label}</span>
                </label>
                <button className="icon icon-edit"/>
                <button className="icon icon-destroy"/>
        </div>
    )
}

export default Task;