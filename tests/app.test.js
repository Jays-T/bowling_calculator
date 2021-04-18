// import Vue from 'vue.global.prod.js';
global.Vue = require('../vue.global.prod');

const { test, expect } = require("@jest/globals");
const bowlingApp = require("../app");
const { describe } = require("yargs");

describe("Bowling calculator", () => {
    describe("Bowl function", () => {
        test("It should return zero", () => {
            expect(bowlMany(0, 20).toBe(0));
        });
    });
});
