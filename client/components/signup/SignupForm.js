import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',
            passwordConfirmation: '',
            phoneVerifyCode: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="control-label">手机号码</label>
                    <input
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChange}
                        type="text"
                        name="phone"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">密码</label>
                    <input
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">密码确认</label>
                    <input
                        className="form-control"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        type="password"
                        name="passwordConfirmation"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">验证码</label>
                    <input
                        className="form-control"
                        value={this.state.phoneVerifyCode}
                        onChange={this.onChange}
                        type="text"
                        name="phoneVerifyCode"
                    />
                    <button>
                        发送验证码
                    </button>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        注册
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;