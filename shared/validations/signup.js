import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if(!Validator.isMobilePhone(data.phone, 'zh-CN')){
        errors.phone = '手机号不合法'
    }

    if(Validator.isEmpty(data.phone)){
        errors.phone = '手机号码不能为空';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = '密码不能为空';
    }

    if(Validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = '密码确认不能为空';
    }

    if(!Validator.equals(data.password, data.passwordConfirmation)){
        errors.passwordConfirmation = '密码不一致';
    }

    if(Validator.isEmpty(data.phoneVerifyCode)){
        errors.phoneVerifyCode = '验证码不能为空';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}