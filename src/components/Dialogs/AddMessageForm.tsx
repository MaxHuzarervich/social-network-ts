import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {TextArea} from "../common/FormControl/FormControls";
import {maxLength50, required} from "../../utils/validators/validators";
import {Button} from "@material-ui/core";

export type AddMessageFormType = {
    newMessage: string
}
//задача этой компоненты собирать данные и отправлять их в handleSubmit из reduxForm

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> =
    (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={TextArea}
                        validate={[required, maxLength50]}
                        name='newMessageBody'
                        placeholder='Enter your message, please'/>
                </div>
                <div>
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        )
    }
//HOC
export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
//оборачиваем AddMessageForm контейнерной компонентой