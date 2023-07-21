export default function validateInput(input) {
    const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]).{1,35}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,9}$/;

    let errors = {};
    
    if (!emailRegex.test(input.email)) {
        errors.email = 'ingrese un email valido';
    } else if (input.email.length > 35) {
        errors.email = 'ha excedido el limite de caracteres.';
    }

    if(input.password.length >9 && !passwordRegex.test(input.password)) {
        errors.password = 'ingrese un password valido';
    }

    return errors;
}