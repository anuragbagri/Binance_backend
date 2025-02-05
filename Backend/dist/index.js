"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ethers_1 = require("ethers");
const config_1 = require("./config");
const bip39_1 = require("bip39");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const seed = (0, bip39_1.mnemonicToSeedSync)(config_1.MNUENOMICS);
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const Userid = 1;
    const hdNode = ethers_1.HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(`m/44'/60'/${Userid}'/0/0`);
    console.log("2");
    console.log(child);
    console.log("1");
    res.json({
        Userid
    });
});
app.get("/depositAddress/:Userid", (req, res) => {
});
app.listen(3000);
