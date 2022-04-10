import { FC } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import { useEffect } from "react";
import { InitSwAuth } from '@skill-wallet/auth';

const Navbar: FC = () => {
  const { currentAccount, currentBalance, connectMetamask } = useWeb3Context();
  useEffect(() => {
    InitSwAuth();
  }, []);
  // console.log(currentAccount);
  return (
    <nav>
      <div className="anim" onClick={connectMetamask}>
        <sw-auth partner-key="fec88290ffac9ea61dd3b9fbfeabc19ec90977e9"></sw-auth>

      </div>
      {!currentAccount ? (
        <>
          <div></div>
          <button className="anim" onClick={connectMetamask}>
          </button>

        </>
      ) : (
        <>
          <div className="user">
            <p>Welcome {currentAccount}</p>
          </div>
          <div className="eth-info">
            <p>{currentBalance}</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
