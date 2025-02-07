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

      const createUser = await prisma.binanceUser.create({
         data : {
            username ,
            password
         } 
      });   // data could be hashed and then stored 
      
      const hdNode = HDNodeWallet.fromSeed(seed);
      const child = hdNode.derivePath(`m/44'/60'/${createUser.id}'/0/0`);


      const insertUser = await prisma.binanceUser.update({
         where : { id : createUser.id},
         data : {
            walletAddress : child.address,
            publicKey : child.publicKey,
            privateKey : child.privateKey
         }
      }) // 

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
      console.log("Error creating user or wallet:" , error);
      res.status(401).json("Error creating user or wallet:");
   }
})

app.get("/depositAddress/:Userid" , (req,res) => {

})

app.listen(3000, () => console.log("Server running on port 3000"));
