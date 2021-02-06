import React from "react";
import PropTypes from "prop-types"
import { formatDistanceToNow } from "date-fns"

export default class Task extends React.Component {
    static defaultProps = {
        label: "Unnamed Task"
    }

    static propTypes = {
        label: PropTypes.string,
        time: PropTypes.instanceOf(Date).isRequired,
        checked: PropTypes.bool.isRequired,
        onDeleted: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        onComplete: PropTypes.func.isRequired,
    }

    render() {
        const {label, time, checked, onDeleted, onEdit, onComplete} = this.props;
        const createdTime = formatDistanceToNow(time)
        return (
            <div className="view">
                <input className="toggle" type="checkbox" checked={checked}
                onChange={onComplete}/>
                <label>
                    <span className="description">{label}</span>
                    <span className="created">created {createdTime} ago</span>
                </label>
                <button className="icon icon-edit"
                onClick={onEdit}/>
                <button className="icon icon-destroy"
                onClick={onDeleted}/>
            </div>
        )
    }

}