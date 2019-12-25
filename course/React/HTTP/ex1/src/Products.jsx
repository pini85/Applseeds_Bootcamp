import React from "react";
import { allProducts } from "./api";

class Products extends React.Component {
  state = { data: [] };
  async componentDidMount() {
    const response = await allProducts();
    const products = response.data;
    this.setState({ data: products });
  }
  removeProduct(id) {
    return this.setState(prevState => ({
      data: prevState.data.filter(el => el.id != id)
    }));
  }
  //   delete(id){
  //     this.setState(prevState => ({
  //         data: prevState.data.filter(el => el != id )
  //     }));
  // }
  render() {
    const { data } = this.state;

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
      </div>
    );
  }
}
export default Products;
