import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import {LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;
export default function Test() {
    const {connection} = useConnection();
    const wallet = useWallet();


    const createTransaction = async () => {
        const receiver = new PublicKey('3HgbSvYdvVprpsE5n6eBhBAn5Psa3p2GTj4fk2vYj4no');
        const {blockhash, lastValidBlockHeight} = await connection.getLatestBlockhash();

        const instruction = web3.SystemProgram.transfer({
            //@ts-ignore
            fromPubkey: wallet.publicKey,
            toPubkey: receiver,
            lamports: LAMPORTS_PER_SOL
        })

        const tx = new web3.Transaction(
        ).add(instruction);

        tx.lastValidBlockHeight = lastValidBlockHeight;
        tx.recentBlockhash = blockhash;
        //@ts-ignore
        tx.feePayer = wallet.publicKey;

        //@ts-ignore
        const result = await wallet.signTransaction(tx);
        alert('It has sent the transaction');
        return;
    }

    return (
        <>
            <WalletMultiButton />
            <button onClick={createTransaction} style={{display: "block", marginTop: "20px"}}>Make devnet transfer</button>
        </>
    )
}