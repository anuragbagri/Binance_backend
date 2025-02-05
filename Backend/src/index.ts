import express from "express";
import prisma from "./db";
import { HDNodeWallet , Wallet } from "ethers";
import { MNUENOMICS } from "./config";
import {mnemonicToSeedSync , validateMnemonic} from "bip39";


const app= express();
app.use(express.json());

const seed = mnemonicToSeedSync(MNUENOMICS);

app.post("/signup" , (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   const Userid = 1;
   const hdNode = HDNodeWallet.fromSeed(seed);
   const child = hdNode.derivePath(`m/44'/60'/${Userid}'/0/0`);
   console.log("2");
   console.log(child);
   console.log("1");

   res.json({
      Userid
   })
})

app.get("/depositAddress/:Userid" , (req,res) => {

})

app.listen(3000);
