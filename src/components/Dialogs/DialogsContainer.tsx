import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStoreType} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
    store: AppStoreType
}

function DialogsContainer(props: DialogsContainerPropsType) {
    return ( //Мы хотим чтобы наша презентационная компонента имела доступ к store!!! ----->
        <StoreContext.Consumer>
            {(store) => {
                let state = props.store.getState().dialogsPage

                const onSendMessageClick = () => {
                    props.store.dispatch(sendMessageCreator(state.newMessageBody))
                }
                const newMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    props.store.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
                }
                return (
                    <Dialogs
                        sendMessage={onSendMessageClick}
                        updateNewMessageBody={newMessageBody}
                        dialogsPage={state}
                        newMessageBody={state.newMessageBody}
                    />
                )
            }}

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;