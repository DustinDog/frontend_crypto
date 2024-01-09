import { Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import { Transaction } from "@solana/web3.js";

function AirDropButton({
    publicKey,
    connection,
    }: {
    publicKey: PublicKey;
    connection: Connection;
    }) {
    const send_airdrop = async () => {
        const signature = await connection.requestAirdrop(publicKey, 1_000_000);
        alert(`successfully send ${signature}`);
    };
    
    return (
        <button
        onClick={send_airdrop}
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
        Airdrop 1 SOL
        </button>
    );
    }

export default AirDropButton;