import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { saveLifePoint } from '../redux/actions';

class LifePointForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //lifePoint: {},
      name: '',
      description: '',
      category: null,
      points: 1
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleTextChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelectChange = (selectedOption) => {
    this.setState({ category: selectedOption.value });
  };

  handleSubmit = () => {
    const data = {
        name: this.state.name,
        description: this.state.description,
        category: this.state.category,
        points: this.state.points
    };
    this.props.saveLifePoint(data);
    this.setState({ name: '', description: '', category: null, points: 1 });
  };

  render = () => {
    return (
      <div>
        <div>
          <label>
            Name:
            <input name='name' type='text' value={this.state.name} onChange={this.handleTextChange} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input name='description' type='text' value={this.state.description} onChange={this.handleTextChange} />
          </label>
        </div>
        <div>
          <label>
            Category:
            <Select 
              onChange={this.handleSelectChange}
              options={[
                { value: 'EXERCISE', label: 'Exercise' },
                { value: 'HOUSEHOLD', label: 'Household' },
                { value: 'SOCIAL', label: 'Social' },
                { value: 'PERSONAL_DEVELOPMENT', label: 'Personal Development' },
                { value: 'RELATIONSHIP', label: 'Relationship' },
              ]}
            />
          </label>
        </div>
        <div>
          <label>
            Points:
            <input name='points' type='number' value={this.state.points} onChange={this.handleTextChange} />
          </label>
        </div>
        <button onClick={this.handleSubmit}>
          Save LifePoint
        </button>
      </div>
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
