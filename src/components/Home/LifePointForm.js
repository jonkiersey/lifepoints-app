import React from 'react';
import { connect } from 'react-redux';

import { AuthUserContext } from '../Session';
import { saveLifePoint } from '../../redux/actions';

class LifePointForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: 'EXERCISE',
      points: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNumberChange = (event) => {
    console.log('handleNumber', event.target.valueAsNumber, event.target.value);
    this.setState({ [event.target.name]: event.target.valueAsNumber || event.target.value });
  };

  handleSubmit = (authUser) => {
    const data = {
      userId: authUser.uid,
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      points: this.state.points
    };
    this.props.saveLifePoint(data);
    this.setState({ name: '', description: '', category: 'EXERCISE', points: 1 });
  };

  render = () => {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="container">
            <h1 className="text-primary mb-4">Record a new LifePoint</h1>
            <div className="row m-2">
              <div className="col">
                Name:
              </div>
              <input name='name' type='text' value={this.state.name} onChange={this.handleChange} className="col-8" />
            </div>
            <div className="row m-2">
              <div className="col">
                Description:
              </div>
              <input name='description' type='text' value={this.state.description} onChange={this.handleChange} className="col-8" />
            </div>
            <div className="row m-2">
              <div className="col">
                Category:
              </div>
              <select name='category' value={this.state.category} onChange={this.handleChange} className="dropdown col-8">
                  <option value="EXERCISE">Exercise</option>
                  <option value="HOUSEHOLD">Household</option>
                  <option value="SOCIAL">Social</option>
                  <option value="PERSONAL_DEVELOPMENT">Personal Development</option>
                  <option value="RELATIONSHIP">Relationship</option>
                </select>
            </div>
            <div className="row m-2">
              <div className="col">
                Points:
              </div>
              <input name='points' type='number' value={this.state.points} onChange={this.handleNumberChange} className="col-8" />
            </div>
            <div className="row mt-4">
              <button onClick={() => this.handleSubmit(authUser)} className="btn btn-primary col-12">
                Save LifePoint
              </button>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const mapStateToProps = (state) => {
  return { store: state.lifepoint };
}

const mapDispatchToProps = {
  saveLifePoint
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LifePointForm);
