import React from "react";
import API from "./api";
import uniqid from "uniqid";
import SearchBox from "./SearchBox";

class Products extends React.Component {
  state = {
    data: [],
    value: "",
    isLoading: false,
    error: "",
    isDisabled: false
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await API.get("/products");
    const products = await response.data;
    this.setState({ data: products, isLoading: false });
    console.log(this.state.data);
  }
  removeProduct = async id => {
    try {
      this.setState({ isLoading: true, isDisabled: true });
      await API.delete(`/products/${id}`);
      return this.setState({
        data: [...this.state.data].filter(el => el.id != id),
        isLoading: false,
        isDisabled: false
      });
      return this.setState(prevState => ({
        data: prevState.data.filter(el => el.id != id),
        isLoading: false,
        isDisabled: false
      }));
    } catch (e) {
      console.log(e);
    }
  };

  addProduct = async e => {
    e.preventDefault();
    if (this.state.value.length > 5) {
      try {
        this.setState({ isLoading: true, isDisabled: true });
        const newItem = {
          id: uniqid(),
          name: this.state.value,
          avatar:
            "https://freenews.live/wp-content/uploads/2020/03/Chuck-Norris-is-80-years-old.jpg"
        };
        const { data } = await API.post("products/", newItem);
        console.log("data", data);

        this.setState(prevState => {
          return {
            data: [...prevState.data, data],
            value: "",
            error: "",
            isLoading: false,
            isDisabled: false
          };
        });
        console.log(this.state.data);
      } catch (e) {
        console.log(e);
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
    const { data, value, isLoading, error, isDisabled } = this.state;

    const loadingSpinner = () => (
      <div>
        <h2>LOADING!!!!PATIENTS!</h2>
      </div>
    );

    return (
      <div>
        <h1>{value}</h1>
        {data.map(item => {
          return (
            <div className="item" key={item.id}>
              <div>{item.name}</div>{" "}
              <div>
                <img src={item.avatar} alt={item.name} />
              </div>
              <button
                disabled={isDisabled}
                onClick={() => this.removeProduct(item.id)}
              >
                Delete
              </button>
            </div>
          );
        })}

        <SearchBox
          label="name"
          placeholder="add products"
          value={value}
          handleChange={this.handleChange}
          isDisabled={isDisabled}
          addProduct={this.addProduct}
          error={error}
        ></SearchBox>

        {isLoading ? loadingSpinner() : null}
      </div>
    );
  }
}
export default Products;
