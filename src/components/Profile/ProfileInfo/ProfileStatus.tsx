import React from "react";

export class ProfileStatus extends React.Component<any, any> {
    //локальный
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        )
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    //Метод позволяет работать с DOM при обновлении компонента
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.state.status){  //статус в предыдущих пропсах не равен статусу в текущих пропсах
        this.setState({
            status:this.props.status
        })}

    }

    render() {
        console.log('rend')
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>}
            </>
        )
    }

}