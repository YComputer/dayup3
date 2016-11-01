import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../shared/validations/signup';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',
            passwordConfirmation: '',
            phoneVerifyCode: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    isValid(){
        const {errors, isValid} = validateInput(this.state);

        if(!isValid) {
            this.setState({errors})
        }

        return isValid;
    }

    onSubmit(e){
        e.preventDefault();
        if (this.isValid()){
            this.setState({errors:{}, isLoading: true});// 每次提交后都要清空errors
            this.props.userSignupRequest(this.state).then(
                ({data}) => {
                    // console.log(data);
                    // 发送登录成功的action
                    this.props.addFlashMessage({
                        type: 'signup_success',
                        text: '注册成功，欢迎你。'
                    });

                    // 两种方法都可以，第二种需要指定SignupForm.contextTypes
                    // browserHistory.push('/');
                    this.context.router.push('/');
                },
                ({data}) => {
                    this.setState({errors: data, isLoading: false})
                }
            );
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>

               <TextFieldGroup
                   error={errors.phone}
                   label="手机号码"
                   onChange={this.onChange}
                   value={this.state.phone}
                   name="phone"
               />

                <TextFieldGroup
                    error={errors.password}
                    label="密码"
                    onChange={this.onChange}
                    value={this.state.password}
                    name="password"
                    type="password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="确认密码"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    name="passwordConfirmation"
                    type="password"
                />

                <TextFieldGroup
                    error={errors.phoneVerifyCode}
                    label="验证码"
                    onChange={this.onChange}
                    value={this.state.phoneVerifyCode}
                    name="phoneVerifyCode"
                />

                <button
                    style={{marginTop: -16, marginBottom: 20}}
                    disabled={this.state.isLoading}
                    className="btn btn-default"
                    type="button" >
                    发送验证码
                </button>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary">
                        注册
                    </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};


SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignupForm;