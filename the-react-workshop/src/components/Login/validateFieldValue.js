
const validateFieldIsNotEmpty = (fieldName, value) => {
    if (!value.length){
        return `${fieldName} is empty`
    };
};

const validateEmailFormat = (value) => {
    let emailParts = value.split('@');
    if (emailParts.length !== 2) {
        return `Email must be in a standard format`;
    };
};

export{
    validateFieldIsNotEmpty,
    validateEmailFormat
} ;