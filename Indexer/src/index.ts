import { JsonRpcProvider } from "ethers";
import prisma from "../../Backend/src/db";
import axios from "axios";
const provider =new JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/L2WQTcjS6zJZkKWzL2eneaAuJ1-OrYbs');

async function main(){
    // current block number 
    const CURRENT_BLOCK_NUMBER = await provider.getBlockNumber(); 

    // user address
    const user = await axios.get("http://localhost:3000/signup");
    const userName = user.data.username;

    // find in db 
    const findUser = await prisma.binanceUser.findUnique({
        where : {username : userName }
    })
    if(!findUser){
        console.log("user not found")
        return ;
    }
    const walletAddress = findUser.depositAddress;

    const transactions = await getTransactionReceipt(CURRENT_BLOCK_NUMBER ,true)

    const interestedTransactions = transactions?.result.filter(txn => txn.to === walletAddress);

    const fullTxns = await Promise.all(
        interestedTransactions.map(async ({ transactionHash }) => {
            return await provider.getTransaction(transactionHash);
        })
    );
    console.log(fullTxns);
}

interface TransactionReceipt {
    transactionHash: string;
    from: string;
    to: string;
}

interface TransactionReceiptResponse {
    result: TransactionReceipt[];
}


async function getTransactionReceipt(blockNumber: string): Promise<TransactionReceiptResponse> {
    let data = JSON.stringify({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getBlockReceipts",
        "params": ["0x" + parseInt(blockNumber).toString(16)]
    });
    
    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://eth-mainnet.g.alchemy.com/v2/e3fUoPqdyoLlCGWNHdY2lEOaovOsKddu",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        data: data
    };
    
    const response = await axios.request(config);
    return response.data;
}