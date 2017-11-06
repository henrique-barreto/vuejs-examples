
export const placaFilter = function (value) {
    if(!value) return value;
    return value.slice(0, 3) + "-" + value.slice(3);
};

export const horaFilter = function (value) {
    if(!value) return value;
    if (value.length === 6)
        value = value.substring(0, 4);
    return value.slice(0, 2) + ":" + value.slice(2);
};

export const cpfFilter = function (value) {
    if (!value || value.length !== 11) return value;
    value = [value.slice(0, 3), '.', value.slice(3)].join('');
    value = [value.slice(0, 7), '.', value.slice(7)].join('');
    return [value.slice(0, 11), '-', value.slice(11)].join('');
};

export const yyyymmddFilter = function (value) {
    if(!value) return value;
    if (!value || value.length !== 8) return value;
    let year = value.substring(0, 4);
    let month = value.substring(4, 6);
    let day = value.substring(6, 8);
    return day + '/' + month + '/' + year;
};
