import React, { Fragment } from "react";
import Nav from "../Nav";

function Home() {
  return (
      <Fragment>
        <center>
        <h3>🔀 Swap Gallery | Markets 🖼️</h3>
        <Nav />
        <h3>Supported Markets</h3>
        <table className="table">
          <tr>
            <th>Market</th>
            <th>Type</th>
            <th>Status</th>
            <th>Address</th>
            <th>MarketId</th>  
          </tr>
          <tr>
            <td>NFT20</td>
            <td>BUY/SELL</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x064C9c5Fe72ab6acdc0d220050d519AfAa59B9bB">0x064C9c5Fe72ab6acdc0d220050d519AfAa59B9bB</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>AxieInfinity</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xdCAEE44ED2965d5615a9A206f6f3ab8fb90Fcd62">0xdCAEE44ED2965d5615a9A206f6f3ab8fb90Fcd62</a></td>
            <td>1</td>
          </tr>
          <tr>
            <td>CryptoKitties</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x7207d099EBAb7cF9DE49A29739Dd0C628dDCf48D">0x7207d099EBAb7cF9DE49A29739Dd0C628dDCf48D</a></td>
            <td>2</td>
          </tr>
          <tr>
            <td>CryptoPunks</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x03DcA7d783175Ba9D97cc41D20e4c266C7abb881">0x03DcA7d783175Ba9D97cc41D20e4c266C7abb881</a></td>
            <td>3</td>
          </tr>
          <tr>
            <td>Decentraland</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x0545405a2c208d3E2c50c71cF0B6B9a72A021b49">0x0545405a2c208d3E2c50c71cF0B6B9a72A021b49</a></td>
            <td>4</td>
          </tr>
          <tr>
            <td>EulerBeats</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x2428aE09b453692A667b8A8dee1Fc4082f44Ad05">0x2428aE09b453692A667b8A8dee1Fc4082f44Ad05</a></td>
            <td>5</td>
          </tr>
          <tr>
            <td>KnownOrigin</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xCBc360534370F1d5465e531236027f0610E067bf">0xCBc360534370F1d5465e531236027f0610E067bf</a></td>
            <td>6</td>
          </tr>
          <tr>
            <td>MoonCatsMarket</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xdAD871D701Da0D98993Eaa27Ce9c2e51D8912B87">0xdAD871D701Da0D98993Eaa27Ce9c2e51D8912B87</a></td>
            <td>7</td>
          </tr>
          <tr>
            <td>SuperRare</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x99f2B1FF838dA5Ee5062358b4Fa2c763C93Fe474">0x99f2B1FF838dA5Ee5062358b4Fa2c763C93Fe474</a></td>
            <td>8</td>
          </tr>
          <tr>
            <td>DeFiVille</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xE43C045bb9BC0793b384B3517239937b4eD7746C">0xE43C045bb9BC0793b384B3517239937b4eD7746C</a></td>
            <td>9</td>
          </tr>
          <tr>
            <td>Rarible</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xa695C98cfD621FF2a50233eFE9Eed5D5bde1Fc78">0xa695C98cfD621FF2a50233eFE9Eed5D5bde1Fc78</a></td>
            <td>10</td>
          </tr>
          <tr>
            <td>MakersPlace</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xc4B3a11f29971e757b1627586fa8C5fFE7bCC660">0xc4B3a11f29971e757b1627586fa8C5fFE7bCC660</a></td>
            <td>11</td>
          </tr>
          <tr>
            <td>UniqueOne</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xf28CdFB8d7De08A4C51C7D2171122ccDaAE37DaF">0xf28CdFB8d7De08A4C51C7D2171122ccDaAE37DaF</a></td>
            <td>12</td>
          </tr>
          <tr>
            <td>OpenSea</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0xB32EaF1153a0f0b12361f0A9563B0178e98935E4">0xB32EaF1153a0f0b12361f0A9563B0178e98935E4</a></td>
            <td>13</td>
          </tr>
          <tr>
            <td>AsyncArt</td>
            <td>BUY</td>
            <td className="active">ACTIVE</td>
            <td><a href="https://etherscan.io/address/0x827839e1cd15ec75a1adcea0d1dcc49d3f3c8cd0">0x827839e1cd15ec75a1adcea0d1dcc49d3f3c8cd0</a></td>
            <td>14</td>
          </tr>
          <tr>
            <td>NFTX</td>
            <td>BUY/SELL</td>
            <td>wait till v2</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Apymon</td>
            <td>BUY</td>
            <td className="wip">WIP</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Synther</td>
            <td>BUY/SELL</td>
            <td className="wip">WIP</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Drops</td>
            <td>BUY/SELL</td>
            <td className="wip">WIP</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>0xProject</td>
            <td>BUY/SELL</td>
            <td className="help">HELP</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>Sorare</td>
            <td>BUY</td>
            <td className="help">HELP</td>
            <td>X</td>
            <td>X</td>
          </tr>
          <tr>
            <td>SandboxGame</td>
            <td>BUY</td>
            <td className="wip">WIP</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </table>
    </center>
    <hr />
    </Fragment>
  );
}

export default Home;
