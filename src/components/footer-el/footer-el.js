import React from "react";

export default class FooterElement extends React.Component {
    render() {
        const {label, active, onFilter} = this.props
        let className
        if (active) {
            className = "selected"
        }
        return (
            <button onClick={onFilter} className={className}>{label}</button>
        )
    }
}