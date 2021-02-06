import React from "react"
import PropTypes from "prop-types"

export default class EditItem extends React.Component {
    static defaultProps = {
        label: "Editing task",
    }
    static propTypes = {
        label: PropTypes.string
    }

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onChange(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        const { label } = this.props
        return(
            <form onSubmit={this.onSubmit}>
                <input className="edit" defaultValue={label} onChange={this.onLabelChange}/>
            </form>
        )
    }
}
