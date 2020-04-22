import React, { useState, useEffect } from "react";
import { getDataApi, postDataAPI } from "../Actions/PostActions";
import { connect } from "react-redux";

function Post(props) {
  console.log("props", props);
  const [name, setName] = useState(1);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const getApi = props.getDataApi;

  useEffect(() => {
    getApi();
  }, [getApi]);
  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
    };
    props.postDataAPI(obj);
  };
  return (
    <div>
      <h1>POST</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      {props.name.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("INI STATE PROPS", props);
  return {
    name: props.Post.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDataApi: () => dispatch(getDataApi()),

    postDataAPI: (obj) => dispatch(postDataAPI(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
