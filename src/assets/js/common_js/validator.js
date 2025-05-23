function Validator(formSelector) {
    var _this = this;

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


    var formRules = {};

    var validatorRules = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regrex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regrex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            }
        }
    };

    var formElement = document.querySelector(formSelector);
    
    if (formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]');
        for(var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules) {
                var ruleInfor;
                var isRuleHashValue = rule.includes(':');

                if (isRuleHashValue) {
                    ruleInfor = rule.split(':');
                    rule = ruleInfor[0];

                }

                var ruleFunc = validatorRules[rule];

                if (isRuleHashValue) {
                    ruleFunc = ruleFunc(ruleInfor[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }


            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;

            for(var rule of rules) {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }

            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if(formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            
            return !errorMessage;
        }

        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
            }
            var formMessage = formGroup.querySelector('.form-message');
            if(formMessage) {
                formMessage.innerText = '';
            }
        }
    }

    formElement.onsubmit = function (event) {
        event.preventDefault();

        console.log(_this);

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for(var input of inputs) {
            if(!handleValidate({target:input})) {
                isValid = false;
            }
        }

        if (isValid) {
            if(typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]');

                     var formValues = Array.from(enableInputs).reduce(function(values, input) {

                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if(! input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                };
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                     }, {});

                     _this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    }
}