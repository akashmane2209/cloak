"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHander = void 0;
var custom_error_1 = require("../errors/custom-error");
exports.errorHander = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [
            {
                message: err.message,
            },
        ],
    });
};
