import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// Material UI
import { TextField, Checkbox, FormControlLabel, RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';

class ListingCategory3 extends Component {

  state = {
    id: this.props.match.params.id,
    answers: {
      L72: (typeof this.props.listingAnswers.L72 === 'undefined') ? null : this.props.listingAnswers.L72,
      L7: (typeof this.props.listingAnswers.L7 === 'undefined') ? "" : this.props.listingAnswers.L7,
      L73: (typeof this.props.listingAnswers.L73 === 'undefined') ? null : this.props.listingAnswers.L73,
    }
  }

  handleChangeForInputs = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers, [propertyName]: event.target.value,
      }
    })
  }

  handleClick = () => {
    this.props.history.push(`/ListingContract/${this.state.id}`)
  }

  handleClickNext = () => {
    console.log("payload", this.state)
    this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
    this.props.history.push(`/ListingCategory4/${this.state.id}`)
  }

  render() {
    return (
      <div>
        <Container component="main">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <center>
                <h2>Listed for Lease</h2>
              </center>
              <h4>The property is currently listed for lease?</h4>
              <RadioGroup
                value={this.state.answers.L72}
                onChange={this.handleChangeForInputs('L72')}>
                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                <FormControlLabel value='false' control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <h4>If yes, who is the listing broker?</h4>
            <Grid item xs={12}>
              <TextField
                id="listing_broker"
                fullWidth
                variant="outlined"
                value={this.state.answers.L7}
                onChange={this.handleChangeForInputs('L7')}
              />
            </Grid>
            <h4>If no, the property can be listed for lease during the terms of this contract with another broker.</h4>
            <Grid item xs={12}>
              <RadioGroup
                value={this.state.answers.L73}
                onChange={this.handleChangeForInputs('L73')}>
                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                <FormControlLabel value='false' control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <Container component="main">
          <Grid container spacing={2}>
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));