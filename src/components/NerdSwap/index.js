import React, { Fragment } from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import { login } from "../../redux/actions/login";
import { executeTrade } from "../../redux/actions/trade";

function Login(props) {
  const { user, trx, login, executeTrade } = props;
  console.log("ui: ", trx)
  if (user == '') {
    login();
  }

  return (
    <Fragment>
    <center>
    <h3>🧠 Nerd Swap 🔀</h3>
    <Nav />
    {
        (user == '')
        ? (<p> 🚨 Login via Metamask 🚨 </p>)
        : (<Fragment>
                          <p><b>Current Account: </b>{user}</p>
             <p style={{'color': 'red',  'fontWeight': 'bold'}}>
            This is a test interface. Only use assets that you are willing to lose.
        </p>
        <table className="table">
          <tr>
            <th>SELL</th>
            <th>BUY</th>
          </tr>
          <tr>
              <td>
                <label forHtml="nftAddr">Choose an NFT to sell:</label>
                <select name="nfts" id="fromNft">
                    <option value="0xC2C747E0F7004F9E8817Db2ca4997657a7746928">HashMask</option>
                    <option value="0x7C40c393DC0f283F318791d746d894DdD3693572">Wrapped Moon Cats</option>
                    <option value="0x31385d3520bCED94f77AaE104b406994D8F2168C">GAN Punks</option>
                    <option value="0x274E21d314A915d1504060d4351DdE05d4dC031e">Aah</option>
                    <option value="0xDb68Df0e86Bc7C6176E6a2255a5365f51113BCe8">Rope</option>
                    <option value="0x892555E75350E11f2058d086C72b9C94C9493d72">Nifty Dudes</option>
                    <option value="0xe4605d46Fd0B3f8329d936a8b258D69276cBa264">Meme</option>
                    <option value="0x1DB61FC42a843baD4D91A2D788789ea4055B8613">Chubbies</option>
                    <option value="0x7CdC0421469398e0F3aA8890693d86c840Ac8931">Doki Doki</option>
                    <option value="0x89eE76cC25Fcbf1714ed575FAa6A10202B71c26A">Node Runners</option>
                </select>
              </td>
              <td>
                <label forHtml="nftAddr">Choose an NFT to buy:</label>
                <select name="nfts" id="toNft">
                    <option value="axie_0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d">Axie</option>
                    <option value="cryptokitty_">Crypto Kitties</option>
                    <option value="cryptopunk_">Crypto Punks</option>
                    {/* decentraland can have multiple addresses */}
                    {/* <option value="decentraland_">Land (Decentraland)</option> */}
                    <option value="eulerbeats_">EulerBeats</option>
                    <option value="knownorigin_">KnownOrigin</option>
                    <option value="mooncats_">Moon Cats</option>
                    <option value="superrare_">SuperRare</option>
                    <option value="defiville_">DeFiVille</option>
                    <option value="asyncart_">AsyncArt</option>
                </select>
              </td>
          </tr>
          <tr>
              <td>
                <label forHtml="nftAddr">Tokens ids to sell (comma-separated):</label>
                <input type="text" id="fromIds" name="fromIds" placeholder="1,2,3" />
              </td>
              <td>
                <label forHtml="nftAddr">Tokens ids to buy (comma-separated):</label>
                <input type="text" id="toIds" name="toIds" placeholder="1,2,3" />
              </td>
          </tr>
          <tr>
              <td>
                <label forHtml="nftAddr">Tokens amounts to sell (comma-separated):</label>
                <input type="text" id="fromAmounts" name="fromAmounts" placeholder="1,2,3" />
              </td>
              <td>
                <label forHtml="nftAddr">Tokens amounts to buy (comma-separated):</label>
                <input type="text" id="toAmounts" name="toAmounts" placeholder="1,2,3" />
              </td>
          </tr>
        </table>
        <h4>Trade Path</h4>
        <p>
            {'NFT ---> NFT20 ---> '} 
            Uniswap [ERC20 to ETH]
            {' ---> NFT '} 
        </p>         
        <button
            onClick={
                () => {
                    var fromNft = document.getElementById("fromNft").value;
                    var fromIds = document.getElementById("fromIds").value;
                    var fromAmounts = document.getElementById("fromAmounts").value;
                    var toNft = document.getElementById("toNft").value;
                    var toIds = document.getElementById("toIds").value;
                    var toAmounts = document.getElementById("toAmounts").value;

                    executeTrade(
                        {
                            'recipient': user,
                            'fromNft': fromNft,
                            'fromIds': fromIds,
                            'fromAmounts': fromAmounts,
                            'toNft': toNft.split("_")[1],
                            'toIds': toIds,
                            'toAmounts': toAmounts,
                            'sellMarket': 'nft20',
                            'swapExchange': 'uniswap',
                            'buyMarket': toNft.split("_")[0]
                        }
                    )
                }
            }
        >Execute Trade</button>
        
                          <br />
                          <br />
                          
        {
            (trx.transactionHash 
                ? <font color="blue"><b>Transaction Submitted to ETH Mainnet: 
                    <a href={"https://etherscan.io/tx/"+trx.transactionHash} target="_blank">{trx.transactionHash}</a>               
                    </b></font>
                : null)
        }
        
        </Fragment> 
        )
    }
    </center>
    <hr/>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
    user: state.app.user,
    trx: state.app.trx
});

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login()),
    executeTrade: (payload) => dispatch(executeTrade(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);