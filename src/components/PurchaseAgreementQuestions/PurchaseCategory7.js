import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class PurchaseCategory7 extends Component {
    render() {
        return (
            <>
                This will hold category 7 questions
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory7));