import React from 'react';
import Select from 'react-select';
import './App.css';

class LifePointForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: null,
      points: 1
    };

    this.handleChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  };

  handleTextChange = (event) => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSelectChange = (selectedOption) => {
    console.log('handleSelectChange', this);
    this.setState({ category: selectedOption });
  };

  handleSubmit = (event) => {
    alert('Submitted' + JSON.stringify(this.state));
    event.preventDefault();
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Record a new LifePoint
        </p>
        <LifePointForm />
      </header>
    </div>
  );
}

export default App;
