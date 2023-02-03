const Validator = require('validator');
const isEmpty = require('./isEmpty.js');

module.exports = function validateSprintInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';

    if(!Validator.isLength(data.name, {min: 2, max: 15})){
        errors.name = 'Name mos be between 2 and 15 character';
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

 

    return {
        errors,
        isValid: isEmpty(errors)
    }
}