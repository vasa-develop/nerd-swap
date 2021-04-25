import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/login";
import { executeFromNftTrade } from "../../redux/actions/trade";

function EthSwap(props) {
  const { user, trx, login, executeFromNftTrade } = props;

  if (user == '') {
    login();
  }

  return (
    <Fragment>
    <center>
    <h3>🧠 Nerd Swap 🔀</h3>
            <hr />
        <p>
          <Link to="/">Markets</Link> {' | '}
          <a target="_blank" href="https://github.com/vasa-develop/cross-asset-swap">GitHub</a>
        </p>
        <hr />
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
                    <option value="0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d">Decentraland</option>
                    <option value="0xbC17cd7f1A58bdA5d6181618090813B3050416b5">FRAMERGENCE</option>
                    <option value="0x05f02507c7134Dbae420AB8C0Ef56E999B59dA03">EDITIONAL</option>
                    <option value="0x876295342f2CdA8d83e05f395063efA676535c43">LEGENDS OF CRYPTONIA</option>
                    <option value="0x2216d47494E516d8206B70FCa8585820eD3C4946">NFT20 WAIFUS</option>
                    <option value="0x09B9905A472Aa1D387c9C1D8D956afF5463837E8">APE ISLAND S1</option>                    
                    <option value="0x929167191ca41a4753eda357bb6e5ad6f15fb89b">TRISM ORIGINALS</option>
                    <option value="0x68289CEfA695b96C61506B590aC18Ce71989B0D0">DEGENARTS</option>
                    <option value="0xdbD4264248e2f814838702E0CB3015AC3a7157a1">TRADE SQUAD</option>
                    <option value="0xc36cF0cFcb5d905B8B513860dB0CFE63F6Cf9F5c">GALA GAMES</option>
                    <option value="0xb80fBF6cdb49c33dC6aE4cA11aF8Ac47b0b4C0f3">BLOCK ART</option>                    
                </select>
              </td>
              <td>
                <label forHtml="nftAddr">Paste address of desired ERC20 (leave the input blank if you want ETH):</label>
                <br />
                <input id="changeIn" name="changeIn" type="text" placeholder="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" />
              </td>
          </tr>
          <tr>
              <td>
                <label forHtml="nftAddr">Tokens ids to sell (comma-separated) <b>[add single id in case of ERC721]:</b></label>
                <br />
                <input type="text" id="fromIds" name="fromIds" placeholder="1,2,3" />
              </td>
              <td>
              </td>
          </tr>
          <tr>
              <td>
                <label forHtml="nftAddr">Tokens amounts to sell (comma-separated):</label>
                <br />
                <input type="text" id="fromAmounts" name="fromAmounts" placeholder="1,2,3" />
              </td>
              <td>
              </td>
          </tr>
        </table>
        <h4>Trade Path</h4>
        <p>
            {'NFT ---> NFT20 ---> '} 
            Uniswap [ERC20 to ETH/ERC20]
        </p>         
        <button
            onClick={
                () => {
                    var fromNft = document.getElementById("fromNft").value;
                    var fromIds = document.getElementById("fromIds").value;
                    var fromAmounts = document.getElementById("fromAmounts").value;
                    var changeIn = document.getElementById("changeIn").value;

                    executeFromNftTrade(
                        {
                            'recipient': user,
                            'fromNft': fromNft,
                            'fromIds': fromIds,
                            'fromAmounts': fromAmounts,
                            'changeIn': changeIn,
                            'sellMarket': 'nft20',
                            'swapExchange': 'uniswap'
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
    executeFromNftTrade: (payload) => dispatch(executeFromNftTrade(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EthSwap);