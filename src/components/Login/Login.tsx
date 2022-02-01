import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/FormControl/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../common/FormControl/FormControls.module.css'
import {LoginThunk} from "../../redux/auth-reducer";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {

    return ( //когда форма засабмитится, выполнится спец метод handleSubmit из контейнерной
        // компоненты которая получается после оборачивания хоком
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type={'password'}
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type={'checkbox'}/>
                remember me
            </div>
            {error && <div className={s.form_summary_error}>{error}</div>}
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({ //a unique name for the form
    form: 'login'
})
(LoginForm) //передаем ту форму вокруг которой нужно создать эту reduxForm

type LoginPropsType = {
    login: any
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
//в этой точке login является thunkCreator
export default connect(mapStateToProps, {login: LoginThunk})(Login)