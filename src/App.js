import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";
import Marketplace from "./abis/Marketplace.json";
import Test from "./components/Test";

import "./App.css";

export const Toastify = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
  }
};

const Team = React.lazy(() => import("./pages/Team"));
const Home = React.lazy(() => import("./pages/Home"));

class App extends Component {
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      owner: "",
      productCount: 0,
      products: [],
      loading: true,
    };
    this.createProduct = this.createProduct.bind(this);
    this.receiveProductAndPay = this.receiveProductAndPay.bind(this);
    this.rewardCoinsToUser = this.rewardCoinsToUser.bind(this);
  }

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    //load smart contract from blockchain
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      console.log(marketplace);
      this.setState({ marketplace });
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });

      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        this.setState({
          products: [...this.state.products, product],
        });
      }

      console.log(this.state.products);
      console.log("Account", this.state.account);
      console.log("Owner", this.state.owner);

      this.setState({ loading: false });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  createProduct(name, price) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .createProduct(name, price)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  receiveProductAndPay(id, price) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .receiveProductAndPay(id)
      .send({ from: this.state.account, value: price })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  //only owner can start this transaction
  rewardCoinsToUser(user, coins) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .rewardCoinsToUser(user)
      .send({ from: this.state.account, value: coins })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route
            exact
            path="/test"
            element={
              <Test
                account={this.state.account}
                products={this.state.products}
                createProduct={this.createProduct}
                receiveProductAndPay={this.receiveProductAndPay}
                rewardCoinsToUser={this.rewardCoinsToUser}
              />
            }
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
