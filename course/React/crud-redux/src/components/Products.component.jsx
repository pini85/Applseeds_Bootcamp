import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../redux/actions/index";
import API from "../api";
import uniqid from "uniqid";
import DisplayProducts from "./DisplayProducts";
import Create from "./Create";

class Products extends React.Component {
  state = {
    data: [],
    value: "",
    updatedValue: "",
    isDisabled: false,
    isLoading: false,
    error: "",
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await API.get("/products");

    const data = response.data;
    this.setState({ data: data, isLoading: false });
  }

  delete = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      this.props.deleteProduct(id);

      // return this.setState({
      //   data: [...this.state.data].filter((el) => el.id != id),
      // });
    } catch (e) {}
  };

  create = async (e) => {
    e.preventDefault();
    if (this.state.value.length > 5) {
      try {
        this.setState({ isDisabled: true, isLoading: true });
        const newItem = {
          id: uniqid(),
          name: this.state.value,
          avatar:
            "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjQ5OTc4ODk1/chuck-norris-15720761-1-402.jpg",
        };
        const { data } = await API.post("/products/", newItem);
        this.props.addProduct(data);

        return this.setState({
          // data: [...this.state.data, data],
          value: "",
          isDisabled: false,
          isLoading: false,
        });
      } catch (err) {}
    } else {
      this.setState({ error: "you need at least 6 characters" });
    }
  };
  update = async (id) => {
    const updatedItem = {
      name: this.state.updatedValue,
    };
    const { data } = await API.put(`/products/${id}`, updatedItem);

    this.props.updateProduct(data);
    // this.setState((prevState) => {
    //   let updatedItem = prevState.data.find((x) => x.id === id);
    //   Object.assign(updatedItem, data);
    //   return { data: prevState.data, updatedValue: "" };
    // });
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleUpdatedOnChange = (e) => {
    this.setState({ updatedValue: e.target.value });
  };

  render() {
    const spinner = () => {
      return (
        <div>
          <h2>LOADING!!!! BE PATIENT!!!!</h2>
        </div>
      );
    };
    const {
      // data,
      value,
      updatedValue,
      isDisabled,
      isLoading,
      error,
    } = this.state;

    return (
      <>
        <div className="container">
          <DisplayProducts
            // data={data}
            updatedValue={updatedValue}
            onChange={this.handleUpdatedOnChange}
            update={this.update}
            deleteItem={this.delete}
          />
          <Create
            isDisabled={isDisabled}
            value={value}
            onChange={this.handleOnChange}
            create={this.create}
          />
          {isLoading && spinner()}
        </div>

        {error}
      </>
    );
  }
}

const mapStateToDispatch = {
  addProduct: (item) => addProduct(item),
  deleteProduct: (id) => deleteProduct(id),
  updateProduct: (item) => updateProduct(item),
};
export default connect(null, mapStateToDispatch)(Products);
