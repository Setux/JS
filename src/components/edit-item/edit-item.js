import React from "react"

export default class EditItem extends React.Component {
    state = {
        label: this.props.label
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
        return(
            <form onSubmit={this.onSubmit}>
                <input className="edit" defaultValue={this.state.label} onChange={this.onLabelChange}/>
            </form>
        )
    }
}
