import types from '../constants';
import Web3 from 'web3';
import { isInputERC1155, isEthBasedMarket, getErc20FromNft, getMarketId, getExchangeId, getABI, getNftAddress, getErc20Address, getMarketAddress } from '../../utils/helper';
const web3 = new Web3(window.web3.currentProvider)

const CAS = "0x95470F8E330d20788e76e8Da3063C9a19555aC0C"

const getBuySignature = (market, toNft, toIds, toAmounts) => { 
    switch (market) {
        case 'nft20':
            return {
                "sig": [
                    
                ],
                "params": [

                ]
            }
        case 'axie':
            return {
                "sig": [
                    'address[]',
                    'uint256[]'
                ],
                "params": [
                    [toNft],
                    toIds
                ]
            }
        case 'cryptokitty':
            return {
                "sig": [
                    'uint256[]'                    
                ],
                "params": [
                    toIds
                ]
            }
        case 'cryptopunk':
            return {
                "sig": [
                    'uint256[]'
                ],
                "params": [
                    toIds
                ]
            }
        case 'decentraland':
            return {
                "sig": [
                    'address[]',
                    'uint256[]'
                ],
                "params": [
                    [toNft],
                    toIds
                ]
            }
        case 'eulerbeats':
            return {
                "sig": [
                    'uint256[]'
                ],
                "params": [
                    toIds
                ]
            }
        case 'knownorigin':
            return {
                "sig": [
                    'uint256[]'
                ],
                "params": [
                    toIds
                ]
            }
        case 'mooncats':
            return {
                "sig": [
                    'bytes5[]'
                ],
                "params": [
                    toIds
                ]
            }
        case 'superrare':
            return {
                "sig": [
                    'uint256[]'
                ],
                "params": [
                    toIds
                ]
            }
        case 'defiville':
            return {
                "sig": [
                    'uint256[]',
                    'uint256[]'
                ],
                "params": [
                    toIds,
                    toAmounts
                ]
            }
        case 'rarible':
            return {
                "sig": [
                    
                ],
                "params": [

                ]
            }
        case 'makersplace':
            return {
                "sig": [
                    
                ],
                "params": [

                ]
            }
        case 'uniqueone':
            return {
                "sig": [
                    
                ],
                "params": [

                ]
            }
        case 'opensea':
            return {
                "sig": [
                    
                ],
                "params": [

                ]
            }
        case 'asyncart':
            return {
                "sig": [
                    'uint256[]'
                ],
                "params": [
                    toIds
                ]
            }
    }
}

const getBuyMethod = (buyMarket) => { 
    return isEthBasedMarket(buyMarket) ? 'buyAssetsForEth' : 'buyAssetsForErc20';
}

const getTotalPriceEstimate = async (buyMarket, buyData) => { 
    const market = new web3.eth.Contract(getABI("market"), getMarketAddress(buyMarket))
    return isEthBasedMarket(buyMarket)    
    ? await market.methods.estimateBatchAssetPriceInEth(buyData).call()
    : await market.methods.estimateBatchAssetPriceInErc20(buyData).call()
}

const getSwapParameters = async (buyMarket, sellMarket, fromNft, buyData) => { 
    if (isEthBasedMarket(buyMarket)) {
        return [getErc20FromNft(fromNft), CAS, "0x"+parseInt(await getTotalPriceEstimate(buyMarket, buyData)).toString(16)]
    }
    else {
        var estimateDetails = await getTotalPriceEstimate(buyMarket, buyData);
        var totalEstimate = 0;
        for (var i = 0; i < estimateDetails[0]; i++) {
            totalEstimate += estimateDetails[0][i]
        }
        return [getErc20FromNft(fromNft), getErc20Address(sellMarket), CAS, "0x"+totalEstimate.toString(16)]
    }
}


var generateSellDetails = (isInputERC1155, sellParameters) => {
    var sellParams;
    if (isInputERC1155) {
        sellParams = web3.eth.abi.encodeParameters(
            [
                'address',
                'uint256[]',
                'uint256[]'
            ],
            sellParameters
        );
    }
    else {
        sellParams = web3.eth.abi.encodeParameters(
            [
                'address',
                'uint256[]'
            ],
            sellParameters
        );
    }

    return web3.eth.abi.encodeFunctionCall({
        name: isInputERC1155 ? 'sellERC1155BatchForERC20Equivalent' : 'sellERC721ForERC20Equivalent',
        type: 'function',
        inputs: [{
            type: 'bytes',
            name: 'data'
        }]
    }, [sellParams]);
}

var generateSwapDetails = (swapToETH, swapParameters) => {
    if (swapToETH) {
        return web3.eth.abi.encodeFunctionCall({
            name: 'swapERC20ForExactETH',
            type: 'function',
            inputs: [
                {
                    type: 'address',
                    name: 'from'
                },
                {
                    type: 'address',
                    name: 'recipient'
                },
                {
                    type: 'uint256',
                    name: 'amountOut'
                }
            ]
        }, swapParameters);   
    }
    else {
        return web3.eth.abi.encodeFunctionCall({
            name: 'swapERC20ForExactERC20',
            type: 'function',
            inputs: [
                {
                    type: 'address',
                    name: 'from'
                },
                {
                    type: 'address',
                    name: 'to'
                },
                {
                    type: 'address',
                    name: 'recipient'
                },
                {
                    type: 'uint256',
                    name: 'amountOut'
                }
            ]
        }, swapParameters);   
    }
}

var generateEstimateData = (buyMarket, toNft, toIds, toAmounts) => { 
    var details = getBuySignature(buyMarket, toNft, toIds, toAmounts)
    return web3.eth.abi.encodeParameters(
        details.sig,
        details.params
    );
}

var generateBuyDetails = (buyMarket, toNft, toIds, toAmounts, recipient) => { 
    var details = getBuySignature(buyMarket, toNft, toIds, toAmounts)
    let buyParams = web3.eth.abi.encodeParameters(
        details.sig,
        details.params
    );

    return web3.eth.abi.encodeFunctionCall({
        name: getBuyMethod(buyMarket),
        type: 'function',
        inputs: [
            {
                type: 'bytes',
                name: 'data'
            },
            {
                type: 'address',
                name: 'recipient'
            }
        ]
    }, [buyParams, recipient]);
}

export const executeTrade = (payload) => async (dispatch) => {
    var { recipient, fromNft, fromIds, fromAmounts, toNft, toIds, toAmounts, sellMarket, swapExchange, buyMarket } = payload
    
    toIds = toIds.split(",").map(i => parseInt(i))
    toAmounts = toAmounts.split(",").map(i => parseInt(i))
    fromIds = fromIds.split(",").map(i => parseInt(i))
    fromAmounts = fromAmounts.split(",").map(i => parseInt(i))

    var ETH = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
    var changeIn = changeIn || ETH;
    var uniswapExchange = '0xb5C70AC5147eF7DbB060382F7A5C724C2bEF070d'
    var isFromERC1155 = isInputERC1155(fromNft)

    // var fromNft = '0xe4605d46Fd0B3f8329d936a8b258D69276cBa264'
    // var fromIds = [1, 11, 27]
    // var fromAmounts = [6, 4, 1]

    // var toNft = '0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d'
    // var toIds = [212062] 
    
    var sellData = generateSellDetails(isFromERC1155, isFromERC1155 ? [fromNft, fromIds, fromAmounts] : [fromNft, fromIds])
    var buyData = generateBuyDetails(buyMarket, toNft, toIds, toAmounts, recipient)
    var swapData = generateSwapDetails(isEthBasedMarket(buyMarket), await getSwapParameters(buyMarket, sellMarket, fromNft, generateEstimateData(buyMarket, toNft, toIds, toAmounts)))
    let addrs = [changeIn, uniswapExchange, recipient]

    let data = web3.eth.abi.encodeParameters(
        [
            {
                "SellDetails[]": {
            
                    "marketId": 'uint256',
                    "sellData": 'bytes'
                }
            },
            {
                "SwapDetails[]": {
                    "exchangeId": 'uint256',
                    "swapData": 'bytes'
                }
            },
            {
                "BuyDetails[]": {
                    "marketId": 'uint256',
                    "buyData": 'bytes'
            }
            },
            'address[]'
        ],
        [
        [
            {
                "marketId": getMarketId(sellMarket),
                "sellData": sellData
            }
        ],
        [
            {
                "exchangeId": getExchangeId(swapExchange),
                "swapData": swapData
            }
        ],
        [
            {
                "marketId": getMarketId(buyMarket),
                "buyData": buyData
            }
        ],
            addrs
        ]
    );
    
    var nft = new web3.eth.Contract(getABI("nft"), fromNft)
    console.log(data)
    var tx = isFromERC1155
        ? await nft.methods.safeBatchTransferFrom(recipient, CAS, fromIds, fromAmounts, data).send({ 'from': web3.givenProvider.selectedAddress })
        : await nft.methods.safeTransferFrom(recipient, CAS, fromIds[0], data).send({ 'from': web3.givenProvider.selectedAddress })
        
    dispatch({
        type: types.TRADE,
        payload: tx,
    });
};
