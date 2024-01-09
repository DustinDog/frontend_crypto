import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

const BalanceButton = ({
  publicKey,
  connection,
}: {
  publicKey: PublicKey;
  connection: Connection;
}) => {
  const getBalance = async () => {
    if (!publicKey) {
      alert("Connect wallet first");
      return;
    }
    const balance = (await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL;
    alert(`${balance} sol`);
  };

  return (
    <button onClick={getBalance} style={{ cursor: "pointer" }}>
      GET BALANCE
    </button>
  );
};

export default BalanceButton;
