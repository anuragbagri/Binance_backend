# Binance Wallet Backend 🚀

This project consists of two main components:

## 📂 Backend Folder

- Handles **user signup** via an API.
- Generates a **wallet address** using an HD Wallet seed phrase.
- Stores user credentials and wallet info in **Prisma DB**.

### 🔹 How Wallet is Created:

- A **random seed phrase** is generated.
- The **first derived address** from the HD wallet is used as the user’s wallet.
- Both the **address and encrypted seed** are stored securely in the database.

## 📂 Indexer Folder

- Fetches **the latest block number** from the blockchain.
- Retrieves **all transactions** involving user wallets.
- Separates **incoming and outgoing transactions**.
- Computes the **final balance** and stores it in the database.

### 🔹 How Transactions Are Indexed:

- The latest block is fetched using an **RPC provider**.
- Transactions are filtered based on **wallet addresses in the database**.
- Each transaction's **value and direction (incoming/outgoing)** are recorded.
- The net balance change is **updated** in the database.

### 🔧 Setup

1. Install dependencies:

   ```bash
   npm install

   ```

2. Run Backend

````bash
cd Backend && npm run dev
```bash

3. Run Indexer
```bash
cd Indexer && npm run dev
````

- i have used my own rpc server for the sepolia network(eth layer 2 blockchain)...if expires,use your own sepolia network.
- this repo only contains the internal functionality of binance. so frontend is not yet made...may be LATER
