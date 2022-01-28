import React, {useState} from "react";

type ProfileStatusType = {
    status: string,
    updateStatus: (status:string) => void
}

export const ProfileStatusWithHooks = (props:ProfileStatusType) => {

        let StateWithSetState = useState(false)
        let editMode = StateWithSetState[0]
        let setEditMode = StateWithSetState[1]

        return (
            <>
                {!editMode &&
                <div>
                    <span>{props.status || '-----'}</span>
                </div>}
                {editMode &&
                <div>
                    <input autoFocus={true}/>
                </div>}
            </>
        )
}