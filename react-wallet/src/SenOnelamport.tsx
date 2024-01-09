import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import SendButton from "./SendButton";
import BalanceButton from "./BalanceButton";
import AirDropButton from "./AirDropButton";

function SenOnelamport() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      {!publicKey ? (
        <div>connect wallet</div>
      ) : (
        <>
          <BalanceButton publicKey={publicKey} connection={connection} />
          <SendButton
            publicKey={publicKey}
            sendTransaction={sendTransaction}
            connection={connection}
          />
          <AirDropButton publicKey={publicKey} connection={connection} />
        </>
      )}
    </div>
  );
}

export default SenOnelamport;
