import React from "react";
import { connect } from "react-redux";

const Allorder=(props)=>{
    return(
        <>
        <p>{props.order}</p>
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
      order : state.totalOrder
    }
}
export default connect(mapStateToProps)(Allorder);