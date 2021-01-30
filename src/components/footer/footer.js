import React from "react";
import "./footer.css";
import FooterElement from "../footer-el/footer-el";


export default class Footer extends React.Component {
    render() {
        const {buttons, left, onDelete, onFilter} = this.props
        const elements = buttons.map((button) => {
            const {id, ...buttonData} = button

            return (
                <li key={id}>
                    <FooterElement {...buttonData}
                    onFilter={() => onFilter(id)}/>
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