import React from "react";

export default class Task extends React.Component {
    render() {
        const {label, checked, onDeleted, onEdit, onComplete} = this.props;
        return (
            <div className="view">
                <input className="toggle" type="checkbox" checked={checked}
                onClick={onComplete}/>
                <label>
                    <span className="description">{label}</span>
                </label>
                <button className="icon icon-edit"
                onClick={onEdit}/>
                <button className="icon icon-destroy"
                onClick={onDeleted}/>
            </div>
        )
    }

}