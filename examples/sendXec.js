/*
  Send 1000 satoshis to RECV_ADDR.
*/

let log = console.log;
// set satoshi amount to send
const SATOSHIS_TO_SEND = 1000;

// REST API servers.
// Only works with forked copy of bch-api: https://github.com/samrock5000/bch-api
//TEMP SERVER, may go down frequently, best to run your own instance of forked bch-api
const ECASH_MAINNET = "https://ecash.loca.lt/v5/";

// bch-js-examples require code from the main bch-js repo
const BCHJS = require("../src/bch-js");

// Instantiate bch-js based on the network.
const bchjs = new BCHJS({ restURL: ECASH_MAINNET });


//use a string address with ecash prefix: 'ecash:qzgpwcvkrnwtzep2m28rmlcy2x2hauypmshy5amknn'
const SEND_ADDR = "ecash:......."; //<------the address sending
//use a string mnemonic to create a KeyPair for signing your Transaction
const SEND_MNEMONIC = "ENTER MNEMONIC FROM SENDING ADDRESS HERE";
// Replace the address below with the address you want to send the XEC to.
const RECV_ADDR = "ecash:qzgpwcvkrnwtzep2m28rmlcy2x2hauypmshy5amknn"; //<--the address recieving (this is samrock5000's address 😊😊😊)

async function sendXec() {
  try {
    // Get the balance of the sending address.
    const balance = await getXecBalance(SEND_ADDR, false);
    log(`balance: ${JSON.stringify(balance, null, 2)}`);
    log(`Balance of sending address ${SEND_ADDR} is ${balance} XEC.`);

    // Exit if the balance is zero.
    if (balance <= 0.0) {
      log("Balance of sending address is zero. Exiting.");
      process.exit(0);
    }

    // If the user fails to specify a reciever address, just send the XEC back
    // to the origination address, so the example doesn't fail.
    if (RECV_ADDR === "") RECV_ADDR = SEND_ADDR;

    // Get UTXOs held by the address.
    const utxos = await bchjs.Electrumx.utxo(SEND_ADDR);
    log(`utxos: ${JSON.stringify(utxos, null, 2)}`);

    if (utxos.utxos.length === 0) throw new Error("No UTXOs found.");

    const utxo = await findBiggestUtxo(utxos.utxos);
    // console.log(`utxo: ${JSON.stringify(utxo, null, 2)}`);

    // instance of transaction builder
    const transactionBuilder = new bchjs.TransactionBuilder();

    // Essential variables of a transaction.
    const satoshisToSend = SATOSHIS_TO_SEND;
    const originalAmount = utxo.value;
    const vout = utxo.tx_pos;
    const txid = utxo.tx_hash;

    //     // add input with txid and index of vout
    transactionBuilder.addInput(txid, vout);

    //     // get byte count to calculate fee. paying 1.2 sat/byte
    const byteCount = bchjs.BitcoinCash.getByteCount(
      { P2PKH: 1 },
      { P2PKH: 2 }
    );
    log(`Transaction byte count: ${byteCount}`);
    const satoshisPerByte = 1.2;
    const txFee = Math.floor(satoshisPerByte * byteCount);
    log(`Transaction fee: ${txFee}`);

    //     // amount to send back to the sending address.
    // It's the original amount - 1 sat/byte for tx size
    const remainder = originalAmount - satoshisToSend - txFee;

    if (remainder < 0) {
      throw new Error("Not enough XEC to complete transaction!");
    }

    // add output w/ address and amount to send
    transactionBuilder.addOutput(RECV_ADDR, satoshisToSend);
    transactionBuilder.addOutput(SEND_ADDR, remainder);
  
    // Generate a change address from a Mnemonic of a private key.
    const keyPair = await keyPairFromMnemonic(SEND_MNEMONIC);
    // Generate a keypair from the change address.
    // Sign the transaction with the HD node.
    let redeemScript;
    transactionBuilder.sign(
      0,
      keyPair,
      redeemScript,
      transactionBuilder.hashTypes.SIGHASH_ALL,
      originalAmount
    );

    // build tx
    const tx = transactionBuilder.build();
    // output rawhex

    const hex = tx.toHex();
    //  log(`TX hex: ${hex}`);
    // log(tx)
    // Broadcast transation to the network
    const txidStr = await bchjs.RawTransactions.sendRawTransaction([hex]);

    log(`Transaction ID: ${txidStr}`);
    
  } catch (err) {
    log("error: ", err);
  }
}
sendXec();

// Generate a change address from a Mnemonic of a private key.
async function keyPairFromMnemonic(mnemonic) {
  // root seed buffer
  const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic);
  // master HDNode
  const masterHDNode = bchjs.HDNode.fromSeed(rootSeed);

  // HDNode of BIP44 account
  const account = bchjs.HDNode.derivePath(masterHDNode, "m/44'/1899'/0'/0/0");

  // derive the first external change address HDNode which is going to spend utxo
  // const change = bchjs.HDNode.derivePath(account, '0/0')
  // log(change)
  return account;
}

// Get the balance in BCH of a BCH address.
async function getXecBalance(addr, verbose) {
  try {
    const result = await bchjs.Electrumx.balance(addr);

    if (verbose) log(result);

    // The total balance is the sum of the confirmed and unconfirmed balances.
    const satBalance =
      Number(result.balance.confirmed) + Number(result.balance.unconfirmed);

    // Convert the satoshi balance to a BCH balance
    const bchBalance = bchjs.BitcoinCash.toBitcoinCash(satBalance);

    return bchBalance;
  } catch (err) {
    console.error("Error in getXecBalance: ", err);
    log(`addr: ${addr}`);
    throw err;
  }
}

// Returns the utxo with the biggest balance from an array of utxos.
async function findBiggestUtxo(utxos) {
  let largestAmount = 0;
  let largestIndex = 0;

  for (let i = 0; i < utxos.length; i++) {
    const thisUtxo = utxos[i];
    // console.log(`thisUTXO: ${JSON.stringify(thisUtxo, null, 2)}`);

    // Validate the UTXO data with the full node.
    const txout = await bchjs.Blockchain.getTxOut(
      thisUtxo.tx_hash,
      thisUtxo.tx_pos
    );
    if (txout === null) {
      // If the UTXO has already been spent, the full node will respond with null.
      log(
        "Stale UTXO found. You may need to wait for the indexer to catch up."
      );
      continue;
    }

    if (thisUtxo.value > largestAmount) {
      largestAmount = thisUtxo.value;
      largestIndex = i;
    }
  }

  return utxos[largestIndex];
}
