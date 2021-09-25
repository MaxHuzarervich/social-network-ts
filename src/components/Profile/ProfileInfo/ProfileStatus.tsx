import React from "react";

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
        editMode: true
        })
    }
    deacivateEditMode = () =>    {
        this.setState(
            {editMode: false}
        )
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deacivateEditMode.bind(this)} value={this.props.status}/>
                </div>}
            </>
        )
    }

}