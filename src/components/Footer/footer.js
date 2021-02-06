import React from "react";
import PropTypes from "prop-types"
import "./footer.css";


export default class Footer extends React.Component {

    static propTypes = {
        buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
        left: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired,
        onFilter: PropTypes.func.isRequired,
    }

    render() {
        const {buttons, left, onDelete, onFilter} = this.props
        const elements = buttons.map((button) => {
            const {id, label, isActive} = button
            const classNames = require('classnames')
            const btnClass = classNames({'selected':isActive})
            return (
                <li key={id}>
                    <button onClick={() => onFilter(id)} className={btnClass}>{label}</button>
                </li>
            )
        })
        return (
            <footer className="footer">
                <span className="todo-count">{left} items left</span>
                <ul className="filters">
                    {elements}
                </ul>
                <button onClick={onDelete} className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}