import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <Fragment>
        <hr />
        <p>
          <Link to="/">Markets</Link> {' | '}
          <Link to="/nerd-swap">Swap</Link> {' | '}  
          <Link to="/eth-swap">Eth/Erc20/NFT Swap</Link> {' | '}  
          <a target="_blank" href="https://github.com/vasa-develop/cross-asset-swap">GitHub</a>
        </p>
        <hr />
        </Fragment>
    )
}

export default Nav;