
import React from "react";
import { connect } from "react-redux";
import {buyIcecream} from '../redux'
function IcecreamContainer(props) {
  return (
    <div>
         <h2>Num of Icecream : {props.numOfIcecream}</h2>
            <button onClick={props.buyIcecream}>Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecream: state. iceCream. numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
