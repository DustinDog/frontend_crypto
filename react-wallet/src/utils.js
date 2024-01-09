import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

const get_balance = async (publicKey, connection) => {
  const balance = (await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL;
  alert(`${balance} sol`);
};

const send_solana = async (publicKey, sendTransaction, connection) => {
  if (!publicKey) {
    alert("Connect wallet first");
    return;
  }
  const toPubkey = new PublicKey(
    "5ig6k4bEhypSjZDTzwzosZn2Mm1jUtWARDELHMN9eZrQ"
  );
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: toPubkey,
      lamports: 1_000_000,
    })
  );
  const signature = await sendTransaction(transaction, connection);
  alert(`successfully send ${signature}`);
};

export { send_solana, get_balance };
