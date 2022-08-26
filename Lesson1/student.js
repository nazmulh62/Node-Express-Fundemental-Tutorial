
const getName = () =>{
    return "Nazmul Hossain";
}

exports.getName = () => {
    return "Anisul Islam";
}

const getAge = () =>{
    return "27";
}

const cgpa = 3.85;

// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;

module.exports = {
    getName,
    getAge,
    cgpa
}
