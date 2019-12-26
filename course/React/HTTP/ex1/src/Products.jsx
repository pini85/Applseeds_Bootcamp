import React from "react";
import { allProducts, removeProduct, addProduct } from "./api";
import uniqid from "uniqid";

class Products extends React.Component {
  state = { data: [], value: "" };
  async componentDidMount() {
    const response = await allProducts();
    const products = response.data;
    this.setState({ data: products, value: "" });
  }
  removeProduct = async id => {
    await removeProduct(id);
    return this.setState(prevState => ({
      data: prevState.data.filter(el => el.id != id)
    }));
  };

  addProduct = async e => {
    e.preventDefault();
    const newItem = {
      name: this.state.value,
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg"
    };

    this.setState({ value: "" });
    await addProduct(newItem).then(() => {
      return this.setState(prevState => {
        return {
          data: [newItem, ...prevState.data]
        };
      });
    });

    // this.setState(prevState => {
    //   return {
    //     data: [newItem, ...prevState.data]
    //   };
    // });
  };
  // await addProduct(newItem).then();

  //   try {
  //     const response = await axios.post(
  //       "https://5dd14f8d15bbc2001448d07d.mockapi.io/products/",
  //       {
  //         posted_data: newItem
  //       }
  //     );
  //   } catch (e) {
  //     console.log(`😱 Axios request failed: ${e}`);
  //   }
  // };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { data, value } = this.state;
    console.log(this.state);

    return (
      <div>
        {data.map(item => {
          return (
            <div className="item" key={item.id}>
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
      </div>
    );
  }
}
export default Products;
