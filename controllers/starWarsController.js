const starWarsInfo = require("../model/starWarsData.json");
const errorHandling = require("../errorHandling");

const getAllChars = (req, res, next) => res.json(starWarsInfo.data);

const getChar = (req, res, next) => {
    const id = req.query.id;
    error = errorHandling.validateID(starWarsInfo, id);
    if (error) {
        return res.status(400).json(error);
    } else {
        for (let i = 0; i < starWarsInfo.data.length; i++) {
            if (starWarsInfo.data[i].id == id) {
                return res.status(200).json(starWarsInfo.data[i]);
            }
        }
    }
};

const addChar = (req, res, next) => {
    const newChar = {
        id: req.query.id,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        dateOfBirth: req.query.dateOfBirth,
        family: req.query.family,
    };

    error = errorHandling.validateAddChar(newChar, starWarsInfo);
    if (error) {
        return res.status(400).json(error);
    } else {
        starWarsInfo.data.push(newChar);
        res.json(starWarsInfo.data);
    }
};

const updChar = (req, res, next) => {
    const id = req.query.id;
    error = errorHandling.validateID(starWarsInfo, id);
    if (error) {
        return res.status(400).json(error);
    } else {
        for (let i = 0; i < starWarsInfo.data.length; i++) {
            if (starWarsInfo.data[i].id == id) {
                error = errorHandling.validateUpdChar(
                    req,
                    res,
                    starWarsInfo,
                    i
                );
                if (error) {
                    return res.status(400).json(error);
                } else {
                    res.json(starWarsInfo.data);
                }
            }
        }
    }
};

const delChar = (req, res, next) => {
    const id = req.query.id;
    error = errorHandling.validateID(starWarsInfo.data, id);
    if (error) {
        res.status(400).json(error);
    } else {
        for (let i = 0; i < starWarsInfo.data.length; i++) {
            if (starWarsInfo.data[i].id == id) {
                console.log("index:" + i);
                console.log("id:" + id);
                delete starWarsInfo.data.splice(i, 1);
                return res.status(200).json(starWarsInfo.data);
            }
        }
    }
};

module.exports = {
    getAllChars,
    getChar,
    addChar,
    updChar,
    delChar,
};
