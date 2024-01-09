import { SendTransactionOptions } from "@solana/wallet-adapter-base";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionSignature,
} from "@solana/web3.js";

const SendButton = ({
  publicKey,
  sendTransaction,
  connection,
}: {
  publicKey: PublicKey;
  sendTransaction: (
    transaction: Transaction,
    connection: Connection,
    options?: SendTransactionOptions
  ) => Promise<TransactionSignature>;
  connection: Connection;
}) => {
  const send_solana = async () => {
    if (!publicKey) {
      alert("Connect wallet first");
      return;
    }

    let toPubkey: PublicKey;

    if (publicKey.toBase58() === "JBw4MeQVLjcvjcNxcNHNXgAuTqe1gZ6NCgM2b7kaoyHb") {
        toPubkey = new PublicKey("5ig6k4bEhypSjZDTzwzosZn2Mm1jUtWARDELHMN9eZrQ");
    } else {
        toPubkey = new PublicKey("JBw4MeQVLjcvjcNxcNHNXgAuTqe1gZ6NCgM2b7kaoyHb");
    }
    console.log(toPubkey.toString(), "toPubkey");
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

  return (
    <button
      onClick={send_solana}
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
      }}
    >
      Send 1 SOL
    </button>
  );
};

export default SendButton;
