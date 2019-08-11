import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { TextField, Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class ListingCategory6 extends Component {
    state = {
            L163: (typeof this.props.listingAnswers.L163 === 'undefined') ? "false" : this.props.listingAnswers.L163,
            L164: (typeof this.props.listingAnswers.L164 === 'undefined') ? "false" : this.props.listingAnswers.L164,
            L165A: (typeof this.props.listingAnswers.L165A === 'undefined') ? null : this.props.listingAnswers.L165A,
    }


    handleChangeForRadioButtons = (propertyName) => (event) => {
        this.setState({
            ...this.state, [propertyName]: event.target.value,
        })
    }

    handleChangeForInitials = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickNext = () => {
        console.log('props', this.props.activeUserReducer)
        const database_payload = {
            id: this.props.activeUserReducer.id,
            answers: this.state
        }
        console.log("payload", database_payload)
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: database_payload })
        this.props.history.push('/ListingCategory7')
    }


    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Closing Services</h2>
                            </center>
                            <h4>Seller wishes to have a Broker arrange for the closing?</h4>
                            <RadioGroup
                                value={this.props.listingAnswers.L72}
                                onChange={this.handleChangeForRadioButtons('L163')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                            <h4>Seller shall arrange for a qualified closing agent or Seller's attorney to conduct the closing?</h4>
                            <RadioGroup
                                value={this.props.listingAnswers.L72}
                                onChange={this.handleChangeForRadioButtons('L164')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <br />
                        <br />
                        <Grid item xs={12}>
                            <TextField
                                label="Seller's Initials"
                                fullWidth
                                variant="outlined"
                                value={this.props.listingAnswers.L165A}
                                onChange={this.handleChangeForInitials('L165A')}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClick}
                                >
                                    Back
                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickNext}
                                >
                                    Next
                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(ListingCategory6));