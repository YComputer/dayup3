import React from 'react';
import classnames from 'classnames';

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

    onSubmit(e){
        e.preventDefault();
        this.setState({errors:{}, isLoading: true});// 每次提交后都要清空errors
        this.props.userSignupRequest(this.state).then(
            () => {},
            ({data}) => {this.setState({errors: data, isLoading: false})}
        );
    }

    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className={classnames("form-group", {"has-error": errors.phone})}>
                    <label className="control-label">手机号码</label>
                    <input
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChange}
                        type="text"
                        name="phone"
                    />
                    {errors.phone && <span className="help-block">{errors.phone}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.password})}>
                    <label className="control-label">密码</label>
                    <input
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                    />
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.passwordConfirmation})}>
                <label className="control-label">密码确认</label>
                    <input
                        className="form-control"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirmation"
                    />
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>

                <div className={classnames("form-group", {"has-error": errors.phoneVerifyCode})}>
                <label className="control-label">验证码</label>
                    <input
                        className="form-control"
                        value={this.state.phoneVerifyCode}
                        onChange={this.onChange}
                        type="text"
                        name="phoneVerifyCode"
                    />
                    {errors.phoneVerifyCode && <span className="help-block">{errors.phoneVerifyCode}</span>}
                    <button>
                        发送验证码
                    </button>
                </div>

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
    userSignupRequest: React.PropTypes.func.isRequired
};

export default SignupForm;