function validateID(data, id) {
    if (isNaN(id)) {
        return {
            status: "INVALID_ID",
            reason: "ID must be a number",
        };
    } else {
        if (id <= 0) {
            return {
                status: "INVALID_ID",
                reason: "ID must be greater than 0",
            };
        }
        var count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                count = count + 1;
            }
        }
        if (count == 0) {
            return {
                status: "INVALID_ID",
                reason: "ID does not exist",
            };
        }
    }
    return null;
}

function validateAddID(data, id) {
    if (isNaN(id)) {
        return {
            status: "INVALID_ID",
            reason: "ID must be a number",
        };
    } else {
        if (id <= 0) {
            return {
                status: "INVALID_ID",
                reason: "ID must be greater than 0",
            };
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                return {
                    status: "INVALID_ID",
                    reason: "ID already exists",
                };
            }
        }
    }
    return null;
}

function validateAddFirstName(firstName) {
    if (!firstName) {
        return {
            status: "INVALID_ENTRY",
            reason: "Fill in all information",
        };
    } else {
        for (let k = 0; k < firstName.length; k++) {
            if (
                !(
                    (firstName[k].charCodeAt(0) >= 65 &&
                        firstName[k].charCodeAt(0) <= 90) ||
                    (firstName[k].charCodeAt(0) >= 97 &&
                        firstName[k].charCodeAt(0) <= 122)
                )
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Not a valid firstName",
                };
            }
        }
    }
    return null;
}

function validateAddLastName(lastName) {
    if (!lastName) {
        return {
            status: "INVALID_ENTRY",
            reason: "Fill in all information",
        };
    } else {
        for (let k = 0; k < lastName.length; k++) {
            if (
                !(
                    (lastName[k].charCodeAt(0) >= 65 &&
                        lastName[k].charCodeAt(0) <= 90) ||
                    (lastName[k].charCodeAt(0) >= 97 &&
                        lastName[k].charCodeAt(0) <= 122)
                )
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Not a valid lastName",
                };
            }
        }
    }
    return null;
}

function validateAddDateOfBirth(dateOfBirth) {
    if (!dateOfBirth) {
        return {
            status: "INVALID_ENTRY",
            reason: "Fill in all information",
        };
    } else {
        if (dateOfBirth.length != 10) {
            return {
                status: "INVALID_ENTRY",
                reason: "Follow the example date structure: 03/18/2022",
            };
        }
        for (let m = 0; m < dateOfBirth.length; m++) {
            if (
                m != 2 &&
                m != 5 &&
                !(
                    dateOfBirth[m].charCodeAt(0) >= 48 &&
                    dateOfBirth[m].charCodeAt(0) <= 57
                )
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Follow the example date structure: 03/18/2022",
                };
            } else if (
                (m == 2 || m == 5) &&
                dateOfBirth[m].charCodeAt(0) != 47
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Follow the example date structure: 03/18/2022",
                };
            }
        }
    }
    return null;
}

function validateAddFamily(family) {
    if (!family) {
        return {
            status: "INVALID_ENTRY",
            reason: "Fill in all information",
        };
    }
    return null;
}

// validateUpdChar functions
function validateUpdFirstName(firstName, starWarsInfo, i) {
    if (firstName) {
        for (let k = 0; k < firstName.length; k++) {
            if (
                !(
                    (firstName[k].charCodeAt(0) >= 65 &&
                        firstName[k].charCodeAt(0) <= 90) ||
                    (firstName[k].charCodeAt(0) >= 97 &&
                        firstName[k].charCodeAt(0) <= 122)
                )
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Not a valid firstName",
                };
            }
        }
        starWarsInfo.data[i].firstName = firstName;
    }
    return null;
}

function validateUpdLastName(lastName, starWarsInfo, i) {
    if (lastName) {
        for (let k = 0; k < lastName.length; k++) {
            if (
                !(
                    (lastName[k].charCodeAt(0) >= 65 &&
                        lastName[k].charCodeAt(0) <= 90) ||
                    (lastName[k].charCodeAt(0) >= 97 &&
                        lastName[k].charCodeAt(0) <= 122)
                )
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Not a valid lastName",
                };
            }
        }
        starWarsInfo.data[i].lastName = lastName;
    }
    return null;
}

function validateUpdDateOfBirth(dateOfBirth, starWarsInfo, i) {
    if (dateOfBirth) {
        if (dateOfBirth.length != 10) {
            return {
                status: "INVALID_ENTRY",
                reason: "Follow the example date structure: 03/18/2022",
            };
        }
        for (let m = 0; m < dateOfBirth.length; m++) {
            if (
                m != 2 &&
                m != 5 &&
                !(
                    dateOfBirth[m].charCodeAt(0) >= 48 &&
                    dateOfBirth[m].charCodeAt(0) <= 57
                )
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Follow the example date structure: 03/18/2022",
                };
            } else if (
                (m == 2 || m == 5) &&
                dateOfBirth[m].charCodeAt(0) != 47
            ) {
                return {
                    status: "INVALID_ENTRY",
                    reason: "Follow the example date structure: 03/18/2022",
                };
            }
        }
        starWarsInfo.data[i].dateOfBirth = dateOfBirth;
    }
    return null;
}

function validateUpdFamily(family, starWarsInfo, i) {
    if (family) {
        starWarsInfo.data[i].family = family;
    }
    return null;
}

function validateAddChar(newChar, starWarsInfo) {
    error = validateAddID(starWarsInfo.data, newChar.id);
    if (error) {
        return error;
    }
    error = validateAddFirstName(newChar.firstName);
    if (error) {
        return error;
    }
    error = validateAddLastName(newChar.lastName);
    if (error) {
        return error;
    }
    error = validateAddDateOfBirth(newChar.dateOfBirth);
    if (error) {
        return error;
    }
    error = validateAddFamily(newChar.family);
    if (error) {
        return error;
    }
    return null;
}

function validateUpdChar(req, res, starWarsInfo, i) {
    error = validateUpdFirstName(req.query.firstName, starWarsInfo, i);
    if (error) {
        return error;
    }
    error = validateUpdLastName(req.query.lastName, starWarsInfo, i);
    if (error) {
        return error;
    }
    error = validateUpdDateOfBirth(req.query.dateOfBirth, starWarsInfo, i);
    if (error) {
        return error;
    }
    error = validateUpdFamily(req.query.family, starWarsInfo, i);
    if (error) {
        return error;
    }
    return null;
}

module.exports = {
    validateID,
    validateUpdChar,
    validateAddChar,
};
