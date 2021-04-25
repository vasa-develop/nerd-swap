import aahNFT from './abis/aahNFT.json'
import chubbiesNFT from './abis/chubbiesNFT.json'
import dokiNFT from './abis/dokiNFT.json'
import ganPunksNFT from './abis/ganPunksNFT.json'
import hashmaskNFT from './abis/hashmaskNFT.json'
import memeNFT from './abis/memeNFT.json'
import niftyDudesNFT from './abis/niftyDudesNFT.json'
import nodeRunnersNFT from './abis/nodeRunnersNFT.json'
import ropeNFT from './abis/ropeNFT.json'
import wrapperMoonCatNFT from './abis/wrapperMoonCatNFT.json'
import market from './abis/market.json'
import nft from './abis/nft.json'

export const getABI = (name) => { 
    switch (name) {
        case 'nft':
            return nft;
        case 'market':
            return market;
    }
}

export const getErc20FromNft = (address) => { 
    switch (address) {
        case '0x274E21d314A915d1504060d4351DdE05d4dC031e':
            return "0x7a911C71144f4d5a00E4216b1c5b12D9571E9336";
        case '0x1DB61FC42a843baD4D91A2D788789ea4055B8613':
            return "0x48Bef6bd05bD23b5e6800Cf0406e524b517af250";
        case '0x7CdC0421469398e0F3aA8890693d86c840Ac8931':
            return "0x22C4AD011Cce6a398B15503e0aB64286568933Ed";
        case '0x31385d3520bCED94f77AaE104b406994D8F2168C':
            return "0xcCcBF11AC3030ee8CD7a04CFE15a3718df6dD030";
        case '0xC2C747E0F7004F9E8817Db2ca4997657a7746928':
            return "0xc2BdE1A2fA26890c8E6AcB10C91CC6D9c11F4a73";
        case '0xe4605d46Fd0B3f8329d936a8b258D69276cBa264':
            return "0x60ACD58d00b2BcC9a8924fdaa54A2F7C0793B3b2";
        case '0x892555E75350E11f2058d086C72b9C94C9493d72':
            return "0x2313E39841fb3809dA0Ff6249c2067ca84795846";
        case '0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A':
            return "0x303Af77Cf2774AABff12462C110A0CCf971D7DbE";
        case '0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8':
            return "0xB3CDC594D8C8e8152d99F162cF8f9eDFdc0A80A2";
        case '0x7C40c393DC0f283F318791d746d894DdD3693572':
            return "0xf961A1Fa7C781Ecd23689fE1d0B7f3B6cBB2f972";
    }    
} 

export const getNftAddress = (name) => { 
    switch (name) {
        case 'aah':
            return "0x274E21d314A915d1504060d4351DdE05d4dC031e";
        case 'chubbies':
            return "0x1DB61FC42a843baD4D91A2D788789ea4055B8613";
        case 'doki':
            return "0x7CdC0421469398e0F3aA8890693d86c840Ac8931";
        case 'ganPunks':
            return "0x31385d3520bCED94f77AaE104b406994D8F2168C";
        case 'hashmask':
            return "0xC2C747E0F7004F9E8817Db2ca4997657a7746928";
        case 'meme':
            return "0xe4605d46Fd0B3f8329d936a8b258D69276cBa264";
        case 'niftyDudes':
            return "0x892555E75350E11f2058d086C72b9C94C9493d72";
        case 'nodeRunners':
            return "0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A";
        case 'rope':
            return "0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8";
        case 'mooncats':
            return "0x7C40c393DC0f283F318791d746d894DdD3693572";
    }
}

export const getMarketId = (name) => { 
    let markets = [
        'nft20',
        'axie',
        'cryptokitty',
        'cryptopunk',
        'decentraland',
        'eulerbeats',
        'knownorigin',
        'mooncats',
        'superrare',
        'defiville',
        'rarible',
        'makersplace',
        'uniqueone',
        'opensea',
        'asyncart'
    ]
    return markets.indexOf(name);
}

export const getExchangeId = (name) => { 
    let exchanges = [
        'uniswap'
    ]
    return exchanges.indexOf(name);
}

export const isEthBasedMarket = (name) => { 
    let ethBasedMarkets = ['axie', 'cryptokitty', 'cryptopunk', 'eulerbeats', 'knownorigin', 'mooncats', 'superrare', 'defiville', 'rarible', 'makersplace', 'uniqueone', 'opensea', 'asyncart']
    let erc20BasedMarkets = ['nft20', 'decentraland']
    return ethBasedMarkets.includes(name)
}

export const getErc20Address = (name) => { 
    switch (name) {
        case 'aah':
            return "0x7a911C71144f4d5a00E4216b1c5b12D9571E9336";
        case 'chubbies':
            return "0x48Bef6bd05bD23b5e6800Cf0406e524b517af250";
        case 'doki':
            return "0x22C4AD011Cce6a398B15503e0aB64286568933Ed";
        case 'ganPunks':
            return "0xcCcBF11AC3030ee8CD7a04CFE15a3718df6dD030";
        case 'hashmask':
            return "0xc2BdE1A2fA26890c8E6AcB10C91CC6D9c11F4a73";
        case 'meme':
            return "0x60ACD58d00b2BcC9a8924fdaa54A2F7C0793B3b2";
        case 'niftyDudes':
            return "0x2313E39841fb3809dA0Ff6249c2067ca84795846";
        case 'nodeRunners':
            return "0x303Af77Cf2774AABff12462C110A0CCf971D7DbE";
        case 'rope':
            return "0xB3CDC594D8C8e8152d99F162cF8f9eDFdc0A80A2";
        case 'mooncats':
            return "0xf961A1Fa7C781Ecd23689fE1d0B7f3B6cBB2f972";
        case 'decentraland':
            return "0x1E0CD9506d465937E9d6754e76Cd389A8bD90FBf";
        case 'FRAMERGENCE':
            return '0x84F830A9203223D672d6592481f4A027e9Cf934E';
        case 'EDITIONAL':
            return '0x34a558Df12aEAc5f5029eECCeFb549368Ce168AF';
    }   
}

export const getMarketAddress = (name) => {
    switch (name) {
        case 'nft20':
            return '0x064C9c5Fe72ab6acdc0d220050d519AfAa59B9bB';
        case 'axie':
            return '0xdCAEE44ED2965d5615a9A206f6f3ab8fb90Fcd62';
        case 'cryptokitty':
            return '0x7207d099EBAb7cF9DE49A29739Dd0C628dDCf48D';
        case 'cryptopunk':
            return '0x03DcA7d783175Ba9D97cc41D20e4c266C7abb881';
        case 'decentraland':
            return '0x0545405a2c208d3E2c50c71cF0B6B9a72A021b49';
        case 'eulerbeats':
            return '0x2428aE09b453692A667b8A8dee1Fc4082f44Ad05';
        case 'knownorigin':
            return '0xCBc360534370F1d5465e531236027f0610E067bf';
        case 'mooncats':
            return '0xdAD871D701Da0D98993Eaa27Ce9c2e51D8912B87';
        case 'superrare':
            return '0x99f2B1FF838dA5Ee5062358b4Fa2c763C93Fe474';
        case 'defiville':
            return '0xE43C045bb9BC0793b384B3517239937b4eD7746C';
        case 'rarible':
            return '0xa695C98cfD621FF2a50233eFE9Eed5D5bde1Fc78';
        case 'makersplace':
            return '0xc4B3a11f29971e757b1627586fa8C5fFE7bCC660';
        case 'uniqueone':
            return '0xf28CdFB8d7De08A4C51C7D2171122ccDaAE37DaF';
        case 'opensea':
            return '0xB32EaF1153a0f0b12361f0A9563B0178e98935E4';
        case 'asyncart':
            return '0x827839e1cd15ec75a1adcea0d1dcc49d3f3c8cd0';
    }
}

export const isInputERC1155 = (fromNft) => { 
    let erc1155s = ["0x274E21d314A915d1504060d4351DdE05d4dC031e", "0x7CdC0421469398e0F3aA8890693d86c840Ac8931", "0xe4605d46Fd0B3f8329d936a8b258D69276cBa264", "0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A", "0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8", "0x876295342f2CdA8d83e05f395063efA676535c43", "0x929167191ca41a4753eda357bb6e5ad6f15fb89b", "0x68289CEfA695b96C61506B590aC18Ce71989B0D0", "0xc36cF0cFcb5d905B8B513860dB0CFE63F6Cf9F5c", "0xb80fBF6cdb49c33dC6aE4cA11aF8Ac47b0b4C0f3"]
    let erc721s = ["0x1DB61FC42a843baD4D91A2D788789ea4055B8613", "0x7C40c393DC0f283F318791d746d894DdD3693572", "0x31385d3520bCED94f77AaE104b406994D8F2168C", "0xC2C747E0F7004F9E8817Db2ca4997657a7746928", "0x892555E75350E11f2058d086C72b9C94C9493d72", "0x05f02507c7134Dbae420AB8C0Ef56E999B59dA03", "0xbC17cd7f1A58bdA5d6181618090813B3050416b5", "0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d", "0x2216d47494E516d8206B70FCa8585820eD3C4946", "0x09B9905A472Aa1D387c9C1D8D956afF5463837E8", "0xdbD4264248e2f814838702E0CB3015AC3a7157a1"]
    return erc1155s.includes(fromNft)
}