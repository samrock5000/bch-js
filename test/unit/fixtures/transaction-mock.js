/*
  Mocking data used in the transaction-unit.js tests.
*/

const nonSlpTxDetails = {
  txid: '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7',
  hash: '2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7',
  version: 2,
  size: 225,
  locktime: 0,
  vin: [
    {
      txid: '5f09d317e24c5d376f737a2711f3bd1d381abdb41743fff3819b4f76382e1eac',
      vout: 1,
      scriptSig: {
        asm:
          '3044022000dd11c41a472f2e54348db996e60864d489429f12d1e044d49ff600b880c9590220715a926404bb0e2731a3795afb341ec1dad3f84ead7d27cd31fcc59abb14738c[ALL|FORKID] 038476128287ac37c7a3cf7e8625fd5f024db1bc3d8e37395abe7bf42fda78d0d9',
        hex:
          '473044022000dd11c41a472f2e54348db996e60864d489429f12d1e044d49ff600b880c9590220715a926404bb0e2731a3795afb341ec1dad3f84ead7d27cd31fcc59abb14738c4121038476128287ac37c7a3cf7e8625fd5f024db1bc3d8e37395abe7bf42fda78d0d9'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qqxy8hycqe89j7wa79gnggq6z3gaqu2uvqy26xehfe',
      value: 0.00047504
    }
  ],
  vout: [
    {
      value: 0.00001,
      n: 0,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 2fe2c4c5ef359bb2fe1a849f891cecffbcfb4f77 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9142fe2c4c5ef359bb2fe1a849f891cecffbcfb4f7788ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9']
      }
    },
    {
      value: 0.00046256,
      n: 1,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 2dbf5e1804c39a497b908c876097d63210c84902 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9142dbf5e1804c39a497b908c876097d63210c8490288ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqkm7hscqnpe5jtmjzxgwcyh6ceppjzfqg3jdn422e']
      }
    }
  ],
  hex:
    '0200000001ac1e2e38764f9b81f3ff4317b4bd1a381dbdf311277a736f375d4ce217d3095f010000006a473044022000dd11c41a472f2e54348db996e60864d489429f12d1e044d49ff600b880c9590220715a926404bb0e2731a3795afb341ec1dad3f84ead7d27cd31fcc59abb14738c4121038476128287ac37c7a3cf7e8625fd5f024db1bc3d8e37395abe7bf42fda78d0d9ffffffff02e8030000000000001976a9142fe2c4c5ef359bb2fe1a849f891cecffbcfb4f7788acb0b40000000000001976a9142dbf5e1804c39a497b908c876097d63210c8490288ac00000000',
  blockhash: '0000000000000000010903a1fc4274499037c9339be9ec7338ee980331c20ce5',
  confirmations: 77741,
  time: 1569792892,
  blocktime: 1569792892
}

const slpTxDetails = {
  txid: '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1',
  hash: '266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1',
  version: 2,
  size: 479,
  locktime: 0,
  vin: [
    {
      txid: 'abc685f1f2a95f51e5e05a350f3fb9c74676e9f78c835b2a019c888ac0a2a736',
      vout: 2,
      scriptSig: {
        asm:
          '3045022100e5f0f6f1212fcbb10eedb7fdc38fca6e86629b4e7e8356a3ad7371a109fc37a602204bfff37d1a34d2e2908b81c23677706fb59ff4ab639fa3299da6c303de74e1f7[ALL|FORKID] 0245b9b3586fab3cfd46db6d116c4588004fe7fe9798216ccb8e55a89bcebc07ac',
        hex:
          '483045022100e5f0f6f1212fcbb10eedb7fdc38fca6e86629b4e7e8356a3ad7371a109fc37a602204bfff37d1a34d2e2908b81c23677706fb59ff4ab639fa3299da6c303de74e1f741210245b9b3586fab3cfd46db6d116c4588004fe7fe9798216ccb8e55a89bcebc07ac'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qzv7t2pzn2d0pklnetdjt65crh6fe8vnhuwvhsk2nn',
      value: 0.00000546
    },
    {
      txid: '58c8576404c01c23a224053307399483d3a070599b3e9eb6d45be9714b8d6856',
      vout: 1,
      scriptSig: {
        asm:
          '30430220784f6d81fa8f54db8a4948259e8c15972a0285f8b1640c433d4e9f606dc38f0c021f14eecc2e8af2efede0867ce459c400dde54186a0e64babdbe89f795db12753[ALL|FORKID] 0209ebe6d9da5043945ed1d81bec0fcace299eba05e5f46b72d6838c790d31c505',
        hex:
          '4630430220784f6d81fa8f54db8a4948259e8c15972a0285f8b1640c433d4e9f606dc38f0c021f14eecc2e8af2efede0867ce459c400dde54186a0e64babdbe89f795db1275341210209ebe6d9da5043945ed1d81bec0fcace299eba05e5f46b72d6838c790d31c505'
      },
      sequence: 4294967295,
      address: 'bitcoincash:qppzuxemgqyxf07nz3kan33gmc83mf3z3yz295c4s7',
      value: 0.68369626
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm:
          'OP_RETURN 5262419 1 1145980243 497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7 0000000005f5e100 00005ad7e49d9100',
        hex:
          '6a04534c500001010453454e4420497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7080000000005f5e1000800005ad7e49d9100',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 36be3b7d185a85b6cf6fc61d63c16f2f10e54260 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91436be3b7d185a85b6cf6fc61d63c16f2f10e5426088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qqmtuwmarpdgtdk0dlrp6c7pduh3pe2zvqrkys2ex8']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 99e5a8229a9af0dbf3cadb25ea981df49c9d93bf OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91499e5a8229a9af0dbf3cadb25ea981df49c9d93bf88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qzv7t2pzn2d0pklnetdjt65crh6fe8vnhuwvhsk2nn']
      }
    },
    {
      value: 0.68368564,
      n: 3,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 422e1b3b400864bfd3146dd9c628de0f1da62289 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914422e1b3b400864bfd3146dd9c628de0f1da6228988ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qppzuxemgqyxf07nz3kan33gmc83mf3z3yz295c4s7']
      }
    }
  ],
  hex:
    '020000000236a7a2c08a889c012a5b838cf7e97646c7b93f0f355ae0e5515fa9f2f185c6ab020000006b483045022100e5f0f6f1212fcbb10eedb7fdc38fca6e86629b4e7e8356a3ad7371a109fc37a602204bfff37d1a34d2e2908b81c23677706fb59ff4ab639fa3299da6c303de74e1f741210245b9b3586fab3cfd46db6d116c4588004fe7fe9798216ccb8e55a89bcebc07acffffffff56688d4b71e95bd4b69e3e9b5970a0d383943907330524a2231cc0046457c85801000000694630430220784f6d81fa8f54db8a4948259e8c15972a0285f8b1640c433d4e9f606dc38f0c021f14eecc2e8af2efede0867ce459c400dde54186a0e64babdbe89f795db1275341210209ebe6d9da5043945ed1d81bec0fcace299eba05e5f46b72d6838c790d31c505ffffffff040000000000000000406a04534c500001010453454e4420497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7080000000005f5e1000800005ad7e49d910022020000000000001976a91436be3b7d185a85b6cf6fc61d63c16f2f10e5426088ac22020000000000001976a91499e5a8229a9af0dbf3cadb25ea981df49c9d93bf88acb4381304000000001976a914422e1b3b400864bfd3146dd9c628de0f1da6228988ac00000000',
  blockhash: '0000000000000000015284202422a688554b7fc80c54f18122847a99c4f79607',
  confirmations: 76722,
  time: 1570392893,
  blocktime: 1570392893
}

const mockOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  amounts: ['100000000', '99883300000000']
}

const mockOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'TOK-CH',
  name: 'TokyoCash',
  tokenId: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  documentUri: '',
  documentHash: '',
  decimals: 8,
  mintBatonVout: 0,
  qty: '2100000000000000'
}

const mockOpReturnData03 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7',
  amounts: ['1000000000', '99883400000000']
}

const genesisTestInputTx = {
  txid: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  hash: '874306bda204d3a5dd15e03ea5732cccdca4c33a52df35162cdd64e30ea7f04e',
  version: 1,
  size: 480,
  locktime: 543408,
  vin: [
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 1,
      scriptSig: {
        asm:
          '30440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f55[ALL|FORKID] 028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11',
        hex:
          '4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qp2jesd06k8ycj4wvkpl9lcwaemtr04f5yphjsa07v',
      value: 0.00000546
    },
    {
      txid: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
      vout: 3,
      scriptSig: {
        asm:
          '3045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519[ALL|FORKID] 02cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bc',
        hex:
          '483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bc'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qppj3euc36x5u6twr5cxrrea2rca53vsfu3dxwr86j',
      value: 0.00172192
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm:
          'OP_RETURN 5262419 1 1145980243 323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35 00000000004c4b40 00000000004c4b40',
        hex:
          '6a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b40',
        type: 'nulldata'
      }
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 0a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e0 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qq98fnuup7eldhtzc067ang76mss29pguqh7qv9eac']
      }
    },
    {
      value: 0.00000546,
      n: 2,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn']
      }
    },
    {
      value: 0.00171165,
      n: 3,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 d4548261e1be0de7e50b7511597799ec4af2b173 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914d4548261e1be0de7e50b7511597799ec4af2b17388ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qr29fqnpuxlqmel9pd63zkthn8ky4u43wv0v7pg5mn']
      }
    }
  ],
  hex:
    '0100000002359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32010000006a4730440220268dacee1117975d904dd0d45ef8de42b86030d825a9522bae196a38bbf6b271022001ae1ce2536ab300040e597bcfaa8ef9fb2beaf702d0842f3161aae8e9867f554121028ff9e32b0dbc82c1d5e0fc945b2537b00420513b10684726f312f1b717c0ae11feffffff359dab0d9c8ddc788b14c0b51493d195c9fbd9f2203d091663350bae351e3a32030000006b483045022100fa241bb2de46f68688451bfcae3f165b724e3ccf13b219e7bf2d8d2df7712ad60220353017d6e581a06efce478adfcd2047cea2f92531e283845f3d0a345ef101519412102cc48ad10516f97e914b8836ff25448d07ad96ebb4704c6a828339880280831bcfeffffff040000000000000000406a04534c500001010453454e4420323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d350800000000004c4b400800000000004c4b4022020000000000001976a9140a74cf9c0fb3f6dd62c3f5eecd1ed6e1051428e088ac22020000000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388ac9d9c0200000000001976a914d4548261e1be0de7e50b7511597799ec4af2b17388acb04a0800',
  blockhash: '000000000000000000292a9c6150fce48e2edd8df346948494fe6249e6e7f63b',
  confirmations: 163095,
  time: 1534271330,
  blocktime: 1534271330
}

const mintTestInputTx = {
  txid: '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
  hash: '4640a734063ea79fa587a3cac38a70a2f6f3db0011e23514024185982110d0fa',
  version: 1,
  size: 585,
  locktime: 543613,
  vin: [
    {
      txid: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
      vout: 1,
      scriptSig: {
        asm: '3045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2[ALL|FORKID] 02056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74',
        hex: '483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qpaf9wltgmpjlg2vxwwu7zdw5y4z7m277ckxn8cufl',
      value: 0.00000546,
      tokenQtyStr: '43545.34534',
      tokenQty: 43545.34534
    },
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 1,
      scriptSig: {
        asm: '3045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a[ALL|FORKID] 024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2',
        hex: '483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqf89zzwd0fqc3npkks997r5l7dpfjf9kgx2rqu500',
      value: 0.00000546,
      tokenQtyStr: '2.34123',
      tokenQty: 2.34123
    },
    {
      txid: 'ee9d3cf5153599c134147e3fac9844c68e216843f4452a1ce15a29452af6db34',
      vout: 3,
      scriptSig: {
        asm: '3044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae[ALL|FORKID] 02eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56',
        hex: '473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56'
      },
      sequence: 4294967294,
      address: 'bitcoincash:qqt30r33k0jx3sxe34tmupaujpaljnglmvqgrrfp2x',
      value: 0.00054848,
      tokenQtyStr: '2.34123',
      tokenQty: 2.34123
    }
  ],
  vout: [
    {
      value: 0,
      n: 0,
      scriptPubKey: {
        asm: 'OP_RETURN 5262419 1 1145980243 938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8 0000000103907f11',
        hex: '6a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f11',
        type: 'nulldata'
      },
      tokenQty: null
    },
    {
      value: 0.00000546,
      n: 1,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 059775ff94f65c04e8a6847e74eb9809d8cd779b OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qqzewa0ljnm9cp8g56z8ua8tnqya3nthnvhv5hpu8y'
        ]
      },
      tokenQtyStr: '43547.68657',
      tokenQty: 43547.68657
    },
    {
      value: 0.00054808,
      n: 2,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 0e330dc9009e1e07831f5a22d4ade8977ab674c8 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: [
          'bitcoincash:qq8rxrwfqz0pupurradz949dazth4dn5eqs3mhrucv'
        ]
      },
      tokenQty: null
    }
  ],
  hex: '0100000003f8cda53b43b0ea49991a9bc6c74eb901d2a8b964bc7b8987d76789618ec18c93010000006b483045022100e3d5f9a48f9aa1cf7e9ed1992e0281e7300b734ba0e4bd5bb9265b2be60bd71002200ccde53ce7ea9da9df3e834f234f3bea65c2e58c96f8436f93333fd8946a1db2412102056220984cc2cf5261a27d4f66d31c9ef601a688ca1a5ab81e55b6f0d311be74feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee010000006b483045022100bb90d52be9b568f643fdb1a302e9f063be27a9f914e2a6b192cbabf2cbdeaf9302203c275fc8d1b82390bc1726390d361c5266056bddd54dec23efa207c79eacea4a4121024146cfcd0c02e99d6451dc48ad0f97114aeda18fe55c52a10bfc0490f314e6a2feffffff34dbf62a45295ae11c2a45f44368218ec64498ac3f7e1434c1993515f53c9dee030000006a473044022029ab770c249f467b40bb90410429f6d657f9be299baa19a6838d04d972436b450220143660297e8e836bc16d317649fad8c310bdadb4fb61d4e9f6ba11203abe5dae412102eed4ac9dda3405d9b1ccbbf09f8056f3e7c615924274bd5643238b543d0a1d56feffffff030000000000000000376a04534c500001010453454e4420938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8080000000103907f1122020000000000001976a914059775ff94f65c04e8a6847e74eb9809d8cd779b88ac18d60000000000001976a9140e330dc9009e1e07831f5a22d4ade8977ab674c888ac7d4b0800',
  blockhash: '00000000000000000140f0d813052da59c811a936494a8d8b2d60b215d19e3dc',
  confirmations: 167007,
  time: 1534391953,
  blocktime: 1534391953,
  isValidSLPTx: true,
  tokenTxType: 'SEND',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  tokenTicker: 'Bubb2',
  tokenName: 'the new bubbles!',
  tokenDecimals: 5,
  tokenUri: '',
  tokenDocHash: ''
}

const genesisTestOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  amounts: ['5000000', '5000000']
}

const genesisTestOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: '',
  name: '',
  tokenId: '323a1e35ae0b356316093d20f2d9fbc995d19314b5c0148b78dc8d9c0dab9d35',
  documentUri: '',
  documentHash: '',
  decimals: 0,
  mintBatonVout: 2,
  qty: '10000000'
}

const mintTestOpReturnData01 = {
  tokenType: 1,
  txType: 'SEND',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  amounts: [
    '4354768657'
  ]
}

const mintTestOpReturnData02 = {
  tokenType: 1,
  txType: 'GENESIS',
  ticker: 'Bubb2',
  name: 'the new bubbles!',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  documentUri: '',
  documentHash: '',
  decimals: 5,
  mintBatonVout: 2,
  qty: '4354534534'
}

const mintTestOpReturnData03 = {
  tokenType: 1,
  txType: 'MINT',
  tokenId: '938cc18e618967d787897bbc64b9a8d201b94ec7c69b1a9949eab0433ba5cdf8',
  mintBatonVout: 2,
  qty: '234123'
}

module.exports = {
  nonSlpTxDetails,
  slpTxDetails,
  mockOpReturnData01,
  mockOpReturnData02,
  mockOpReturnData03,
  genesisTestInputTx,
  mintTestInputTx,
  genesisTestOpReturnData01,
  genesisTestOpReturnData02,
  mintTestOpReturnData01,
  mintTestOpReturnData02,
  mintTestOpReturnData03
}
