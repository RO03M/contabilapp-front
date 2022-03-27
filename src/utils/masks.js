export const Text2Cpf = text => {
    text = text.replace(/[-.]/g, "");

    let response = '';
    for (let i = 0; i < text.length && i < 11; i++) {
        if (!isNaN(text[i])) {
            if (i == 3) response += '.' + text[i];
            else if (i == 6) response += '.' + text[i];
            else if (i == 9) response += '-' + text[i];
            else response += text[i] + '';
        }
    }

    return response;
}

export const Text2Cnpj = text => {
    text = text.replace(/[-./]/g, "");

    let response = '';
    for (let i = 0; i < text.length && i < 14; i++) {
        if (!isNaN(text[i])) {
            if (i == 2) response += '.' + text[i];
            else if (i == 5) response += '.' + text[i];
            else if (i == 8) response += '/' + text[i];
            else if (i == 12) response += '-' + text[i];
            else response += text[i] + '';
        }
    }

    return response;
}

export const Text2CpfCnpj = text => {
    text = text.replace(/[-.]/g, "");
    if (text.length <= 11) return Text2Cpf(text);
    else return Text2Cnpj(text);
}

export const Text2Cep = text => {
    text = text.replace("-", "");
    let response = "";

    for (let i = 0; i < text.length && i < 8; i++) {
        if (!isNaN(text[i])) {
            if (i == 5) response += "-" + text[i];
            else response += text[i];
        }
    }
    
    return response;
}

export const Text2Phone = (text) => {
    // text = text.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');
    text = text.replace(/[()-\s]/g, "");
    
    let response = '';
    for (let i = 0; i < text.length && i < 11; i++) {
        if (!isNaN(text[i])) {
            if (i == 0) response += '(' + text[i];
            else if (i == 2) response += ') ' + text[i];
            else if (i == 6 && text.length <= 10) response += '-' + text[i];
            else if (i == 7 && text.length >= 11) response += '-' + text[i];
            else response += text[i] + '';
        }
    }
    return response;
}