import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";

function AirDropButton({
    publicKey,
    connection,
    }: {
    publicKey: PublicKey;
    connection: Connection;
    }) {
    const send_airdrop = async () => {
        const signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
        const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
        // 3 - Confirm transaction success
        await connection.confirmTransaction({
            blockhash,
            lastValidBlockHeight,
            signature
        },'finalized');
        // 4 - Log results
        console.log(`Tx Complete: https://explorer.solana.com/tx/${signature}?cluster=devnet`)


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