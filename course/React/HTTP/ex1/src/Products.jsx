import React from "react";
import API from "./api";
import uniqid from "uniqid";

class Products extends React.Component {
  state = { data: [], value: "", isLoading: false };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await API.get("/products");
    const products = response.data;
    this.setState({ data: products, value: "", isLoading: false, error: "" });
  }
  removeProduct = async id => {
    try {
      this.setState({ isLoading: true });
      await API.delete(`/products/${id}`);
      return this.setState(prevState => ({
        data: prevState.data.filter(el => el.id != id),
        isLoading: false
      }));
    } catch (e) {
      console.log(`ERROR:${e}`);
    }
  };

  addProduct = async e => {
    e.preventDefault();
    // const imageVerification = this.state.imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null
    if (this.state.value.length > 5) {
      try {
        this.setState({ isLoading: true });
        const newItem = {
          id: uniqid(),
          name: this.state.value,
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg"
        };
        const { data } = await API.post("products/", newItem);
        console.log(data);
        this.setState(prevState => {
          return {
            data: [data, ...prevState.data],
            value: "",
            error: "",
            isLoading: false
          };
        });
      } catch (e) {
        console.log(`ERROR: ${e}`);
      }
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
    console.log(this.state);

    return (
      <div>
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
          <input type="text" value={value} onChange={this.handleChange} />
          <input type="submit" onClick={this.addProduct} />
        </form>
        {isLoading ? loadingSpinner() : null}
        {error}
      </div>
    );
  }
}
export default Products;
