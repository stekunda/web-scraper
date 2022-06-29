const starWarsInfo = require("../model/starWarsData.json");

const getAllStarWarsChars = (req, res, next) => res.json(starWarsInfo.data);

const getStarWarsChar = (req, res, next) => {
    const id = req.query.id;
    if (isNaN(id)) {
        return res.status(400).json({
            status: "INVALID_ID",
            reason: "ID must be a number",
        });
    } else {
        if (id <= 0) {
            return res.status(400).json({
                status: "INVALID_ID",
                reason: "ID must be greater than 0",
            });
        } else if (id > starWarsInfo.data.length) {
            return res.status(204).send();
        }
        for (let i = 0; i < starWarsInfo.data.length; i++) {
            if (starWarsInfo.data[i].id == id) {
                return res.status(200).json(starWarsInfo.data[i]);
            }
        }
    }
};

const addStarWarsChar = (req, res, next) => {
    const newChar = {
        id: req.query.id,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        dateOfBirth: req.query.dateOfBirth,
        family: req.query.family,
    };

    // ID error handling
    if (newChar.id <= 0 || isNaN(newChar.id)) {
        return res.status(400).json({
            status: "INVALID_ENTRY",
            reason: "ID must be a positive number",
        });
    }

    for (let j = 0; j < starWarsInfo.data.length; j++) {
        if (starWarsInfo.data[j].id == newChar.id) {
            return res.status(400).json({
                status: "INVALID_ENTRY",
                reason: "ID already exists",
            });
            break;
        }
    }

    // firstName error handling
    for (let k = 0; k < newChar.firstName.length; k++) {
        if (
            !(
                (newChar.firstName[k].charCodeAt(0) >= 65 &&
                    newChar.firstName[k].charCodeAt(0) <= 90) ||
                (newChar.firstName[k].charCodeAt(0) >= 97 &&
                    newChar.firstName[k].charCodeAt(0) <= 122)
            )
        ) {
            return res.status(400).json({
                status: "INVALID_ENTRY",
                reason: "Not a valid firstName",
            });
            break;
        }
    }

    // lastName error handling
    for (let k = 0; k < newChar.lastName.length; k++) {
        if (
            !(
                (newChar.lastName[k].charCodeAt(0) >= 65 &&
                    newChar.lastName[k].charCodeAt(0) <= 90) ||
                (newChar.lastName[k].charCodeAt(0) >= 97 &&
                    newChar.lastName[k].charCodeAt(0) <= 122)
            )
        ) {
            return res.status(400).json({
                status: "INVALID_ENTRY",
                reason: "Not a valid lastName",
            });
            break;
        }
    }

    // dateOfBirth error handling
    if (newChar.dateOfBirth.length != 10) {
        return res.status(400).json({
            status: "INVALID_ENTRY",
            reason: "Follow the example date structure: 03/18/2022",
        });
    }
    for (let m = 0; m < newChar.dateOfBirth.length; m++) {
        if (
            (m != 2 || 5) &&
            !(
                newChar.dateOfBirth[m].charCodeAt(0) >= 30 &&
                newChar.dateOfBirth[m].charCodeAt(0) <= 39
            )
        ) {
            return res.status(400).json({
                status: "INVALID_ENTRY",
                reason: "Follow the example date structure: 03/18/2022",
            });
            break;
        } else if ((m == 2 || 5) && newChar.dateOfBirt[m].charCodeAt(0) != 47) {
            return res.status(400).json({
                status: "INVALID_ENTRY",
                reason: "Follow the example date structure: 03/18/2022",
            });
            break;
        }
    }

    if (
        !newChar.id ||
        !newChar.firstName ||
        !newChar.lastName ||
        !newChar.dateOfBirth ||
        !newChar.family
    ) {
        return res.status(400).json({
            status: "INVALID_ENTRY",
            reason: "Fill in all information",
        });
    } else {
        starWarsInfo.data.push(newChar);
        res.json(starWarsInfo.data);
    }
};

const updateChar = (req, res, next) => {
    const id = req.query.id;
    if (isNaN(id)) {
        return res.status(400).json({
            status: "INVALID_ID",
            reason: "ID must be a number",
        });
    } else {
        if (id <= 0) {
            return res.status(400).json({
                status: "INVALID_ID",
                reason: "ID must be greater than 0",
            });
        } else if (id > starWarsInfo.data.length) {
            return res.status(204).send();
        }
        for (let i = 0; i < starWarsInfo.data.length; i++) {
            if (starWarsInfo.data[i].id == id) {
                if (req.query.firstName) {
                    for (
                        let k = 0;
                        k < starWarsInfo.data[i].firstName.length;
                        k++
                    ) {
                        if (
                            !(
                                (starWarsInfo.data[i].firstName[k].charCodeAt(
                                    0
                                ) >= 65 &&
                                    starWarsInfo.data[i].firstName[
                                        k
                                    ].charCodeAt(0) <= 90) ||
                                (starWarsInfo.data[i].firstName[k].charCodeAt(
                                    0
                                ) >= 97 &&
                                    starWarsInfo.data[i].firstName[
                                        k
                                    ].charCodeAt(0) <= 122)
                            )
                        ) {
                            return res.status(400).json({
                                status: "INVALID_ENTRY",
                                reason: "Not a valid firstName",
                            });
                            break;
                        }
                    }
                } else {
                    starWarsInfo.data[i].firstName = req.query.firstName;
                }
                if (req.query.lastName) {
                    for (
                        let k = 0;
                        k < starWarsInfo.data[i].lastName.length;
                        k++
                    ) {
                        if (
                            !(
                                (starWarsInfo.data[i].lastName[k].charCodeAt(
                                    0
                                ) >= 65 &&
                                    starWarsInfo.data[i].lastName[k].charCodeAt(
                                        0
                                    ) <= 90) ||
                                (starWarsInfo.data[i].lastName[k].charCodeAt(
                                    0
                                ) >= 97 &&
                                    starWarsInfo.data[i].lastName[k].charCodeAt(
                                        0
                                    ) <= 122)
                            )
                        ) {
                            return res.status(400).json({
                                status: "INVALID_ENTRY",
                                reason: "Not a valid lastName",
                            });
                            break;
                        }
                    }
                } else {
                    starWarsInfo.data[i].lastName = req.query.lastName;
                }
                if (req.query.dateOfBirth) {
                    if (starWarsInfo.data[i].dateOfBirth.length != 10) {
                        return res.status(400).json({
                            status: "INVALID_ENTRY",
                            reason: "Follow the example date structure: 03/18/2022",
                        });
                    }
                    for (
                        let m = 0;
                        m < starWarsInfo.data[i].dateOfBirth.length;
                        m++
                    ) {
                        if (
                            (m != 2 || 5) &&
                            !(
                                starWarsInfo.data[i].dateOfBirth[m].charCodeAt(
                                    0
                                ) >= 30 &&
                                starWarsInfo.data[i].dateOfBirth[m].charCodeAt(
                                    0
                                ) <= 39
                            )
                        ) {
                            return res.status(400).json({
                                status: "INVALID_ENTRY",
                                reason: "Follow the example date structure: 03/18/2022",
                            });
                            break;
                        } else if (
                            (m == 2 || 5) &&
                            starWarsInfo.data[i].dateOfBirt[m].charCodeAt(0) !=
                                47
                        ) {
                            return res.status(400).json({
                                status: "INVALID_ENTRY",
                                reason: "Follow the example date structure: 03/18/2022",
                            });
                            break;
                        }
                    }
                } else {
                    starWarsInfo.data[i].dateOfBirth = req.query.dateOfBirth;
                }
                if (req.query.family) {
                    starWarsInfo.data[i].family = req.query.family;
                }
            }
        }
        return res.json(starWarsInfo.data);
    }
};

const deleteChar = (req, res, next) => {
    const id = req.query.id;
    if (isNaN(id)) {
        return res.status(400).json({
            status: "INVALID_ID",
            reason: "ID must be a number",
        });
    } else {
        if (id <= 0) {
            return res.status(400).json({
                status: "INVALID_ID",
                reason: "ID must be greater than 0",
            });
        } else if (id > starWarsInfo.data.length) {
            return res.status(204).send();
        }
        for (let i = 0; i < starWarsInfo.data.length; i++) {
            if (starWarsInfo.data[i].id == id) {
                delete starWarsInfo.data.splice(i, 1);
                return res.status(200).json(starWarsInfo.data);
            }
        }
    }
};

module.exports = {
    getAllStarWarsChars,
    getStarWarsChar,
    addStarWarsChar,
    updateChar,
    deleteChar,
};
