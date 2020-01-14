import React from "react";
import API from "./api";
import axios from "axios";
import uniqid from "uniqid";
import SearchBox from "./SearchBox";
const CancelToken = axios.CancelToken;

let cancel;

class Products extends React.Component {
  state = { data: [], value: "", isLoading: false };
  async componentDidMount() {
    const response = await API.get("/products");
    const products = response.data;
    this.setState({ data: products, value: "", isLoading: false, error: "" });
  }
  removeProduct = async id => {
    try {
      this.setState({ isLoading: true });
      await API.delete(`/products/${id}`, {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        })
      });
      return this.setState(prevState => ({
        data: prevState.data.filter(el => el.id != id),
        isLoading: false
      }));
    } catch (e) {}
  };

  addProduct = async e => {
    e.preventDefault();
    // const imageVerification = this.state.imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null
    if (this.state.value.length > 5) {
      try {
        console.log("im trying");

        this.setState({ isLoading: true });
        const newItem = {
          id: uniqid(),
          name: this.state.value,
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg"
        };
        const { data } = await API.post("products/", newItem);

        this.setState(prevState => {
          return {
            data: [data, ...prevState.data],
            value: "",
            error: "",
            isLoading: false
          };
        });
      } catch (e) {}
    } else {
      this.setState({
        value: "",
        error: "Must be at least 6 characters long!"
      });
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { data, value, isLoading, error } = this.state;
    const loadingSpinner = () => (
      <div>
        <i className="fa fa-spinner fa-spin" /> Loading...
      </div>
    );

    return (
      <div>
        <h1>{value}</h1>
        {data.map(item => {
          return (
            <div className="item" key={item.id}>
              <div>{item.id}</div>
              {item.name} <img src={item.avatar} alt="" />
              <button onClick={() => this.removeProduct(item.id)}>
                Delete
              </button>
            </div>
          );
        })}
        <form action="#">
          <label htmlFor="name"> Name</label>
          {/* <input
            placeholder="Add Products"
            type="text"
            value={value}
            onChange={this.handleChange}
          /> */}
          <SearchBox
            placeholder={"add products"}
            value={value}
            handleChange={this.handleChange}
          ></SearchBox>
          <input disabled={isLoading} type="submit" onClick={this.addProduct} />
        </form>
        {isLoading ? loadingSpinner() : null}
        {error}
      </div>
    );
  }
}
export default Products;
