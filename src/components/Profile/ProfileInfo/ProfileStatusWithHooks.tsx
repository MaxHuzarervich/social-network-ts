import React, {useEffect, useState} from "react";

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)

    let [status, setStatus] = useState(props.status)

    useEffect( () => {        //запускает ф-цию после того, когда все отрисуется и покажется на экране
        setStatus(props.status)
    },[props.status])

    const activateMode = () => setEditMode(true)

    const deactivateActiveMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
            <div>
                <b>Status</b>:<span onDoubleClick={activateMode}>{props.status || '-----'}</span>
            </div>}
            {editMode &&
            <div>
                <input
                    value={status}
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateActiveMode}/>
            </div>}
        </>
    )
}