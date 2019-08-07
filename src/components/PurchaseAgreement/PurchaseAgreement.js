import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
// import {withRouter} from 'react-router';
import '../PurchaseAgreement/PurchaseAgreement.css';
// import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';





//Material UI
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import ListingCategory1 from "../ListingQuestions/ListingCategory1";

const styles = {
    title: {
        // textAlign: 'center',
        // fontSize: '20px',
        margin: '25px 0px 25px 40px',
        // marginTop: '40px',
    },
};


class PurchaseAgreement extends Component {

    handleClick = (propertyName) => (event) => {
        this.props.history.push(`${[propertyName]}`);
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseAgreementReview');
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <center>
                        <h4>Please answer the following questions pertaining to the Purchase Agreement.</h4>
                    </center>

                    <Card id="generalInfo" onClick={this.handleClick('/PurchaseCategory1')} value="/PurchaseCategory1" >
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>General Information</h5>
                                </div>
                            </Grid>
                            <Grid id="generalInfoCard"
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>

                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory2')} value="/PurchaseCategory2">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Purchase Price</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory3')} value="PurchaseCategory3">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Closing Date</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory4')} value="PurchaseCategory4">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Mortgage Financing</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory5')} value="PurchaseCategory5">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Seller's Contribution to Buyer's Cost</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory6')} value="PurchaseCategory6">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Inspections</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory7')} value="PurchaseCategory7">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Sale of Buyer's Property</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory8')} value="PurchaseCategory8">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Real Estate Taxes/Special Assessments</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card onClick={this.handleClick('/PurchaseCategory9')} value="PurchaseCategory9">
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Additional Provisions</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
                <br />
                <Container>
                    <Grid item xs={12} sm={2}>
                        <div align="right">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleClickNext}>
                                Next
                            </Button>
                        </div>
                    </Grid>
                    <br />
                </Container>
            </div>
        )
    }
}


const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreement));

