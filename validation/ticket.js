const Validator = require('validator');
const isEmpty = require('./isEmpty.js');

module.exports = function validateTicketInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.description = !isEmpty(data.description) ? data.description : '';

    if(!Validator.isLength(data.name, {min: 2, max: 15})){
        errors.name = 'Name mos be between 2 and 15 character';
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    if(!Validator.isLength(data.description, {min: 2, max: 300})){
        errors.description = 'description mos be between 2 and 300 character';
    }

    if(Validator.isEmpty(data.description)){
        errors.description = 'Name field is required';
    }


 

    return {
        errors,
        isValid: isEmpty(errors)
    }
}