"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect(process.env.MONGODB_URI).then(function () { return console.log('mongodb connected...'); });
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
