import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';




class PurchaseCategory1 extends Component {
    render() {
        return (
            <>
                This will hold category 1 questions
                
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory1));