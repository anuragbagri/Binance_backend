import express from "express";
import prisma from "./db";
import { HDNodeWallet , Wallet } from "ethers";
import { MNUENOMICS } from "./config";
import {mnemonicToSeedSync , validateMnemonic} from "bip39";


const app= express();
app.use(express.json());

const seed = mnemonicToSeedSync(MNUENOMICS);

app.post("/signup" , async (req, res) => {
   const {username , password } =req.body;
   try{
      const findUser = await prisma.binanceUser.findUnique({
         where : {
            username : username,
         }
      });
      if(!findUser || password!== findUser.password){
         res.status(401).json({
            message : "password does not match"
         });
      }

      const userId = findUser.id;
      const hdNode = HDNodeWallet.fromSeed(seed);
      const child = hdNode.derivePath(`m/44'/60'/${userId}'/0/0`);

      const insertUser = await prisma.binanceUser.update({
       where : {username : findUser.username},
       data :  {depositAddress : child.address,
                publicKey : child.publicKey,
                privateKey : child.privateKey
       }
      });

      res.json({
         message : {
            id : insertUser.id,
            name : insertUser.username,
            walletAddress : insertUser.address,
            publickey : insertUser.publicKey,
            privatekey : insertUser.privateKey
         }
      });
   }
   catch(error){
      console.log("user does not exist" , error);
      res.status(401).json("user does not exist");
   }
})

app.get("/depositAddress/:Userid" , (req,res) => {

})

app.listen(3000, () => console.log("Server running on port 3000"));
