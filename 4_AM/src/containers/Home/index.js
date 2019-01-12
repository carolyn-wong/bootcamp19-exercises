import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Name', 
        gender: 'female', 
        pronoun: 'she',
        pronoun1: '',
        pronoun2: '',
        pronoun3: '',
        hometown: 'Hometown',
        food1: 'Food 1',
        food2: 'Food 2',
        food3: 'Food 3',
        birthday: '2019-01-01',
        huid: 0,
        concentration: 'Concentration',
        isSubmit: false,
      };
  }

  handleChange(key, e) {
    this.setState({[key]: e.target.value});
  }

  onSubmit() {
    this.setState({isSubmit: true});
    this.pronounChange(this.state.pronoun);
  }

  pronounChange(pronoun) {
    switch(pronoun)
    {
      case 'she':
        this.setState({pronoun1: 'she is', pronoun2: 'She was', pronoun3: 'her'});
        break;
      case 'he':
        this.setState({pronoun1: 'he is', pronoun2: 'He was', pronoun3: 'his'});
        break;
      case 'they':
        this.setState({pronoun1: 'they are', pronoun2: 'They were', pronoun3: 'their'});
        break;
      default:
        this.setState({pronoun1: '', pronoun2: '', pronoun3: ''})
    }
  }

  render() {
    const isSubmit = this.state.isSubmit;
    return (
      <React.Fragment>
        <div>
          <input type='text' value={this.state.name} onChange={(e)=>this.handleChange("name", e)}/>
        </div>
        <div>
          <input type='radio' value='female' checked={this.state.gender === 'female'} onChange={(e)=>this.handleChange("gender", e)}/> Female
          <input type='radio' value='male' checked={this.state.gender === 'male'} onChange={(e)=>this.handleChange("gender", e)}/> Male
          <input type='radio' value='other' checked={this.state.gender === 'other'} onChange={(e)=>this.handleChange("gender", e)}/> Other
        </div>
        <div>
          <select onChange={(e)=>{this.handleChange("pronoun", e); this.pronounChange("pronoun")}}>
            <option value='she'> She/her/hers </option>
            <option value='he'> He/him/his </option>
            <option value='they'> They/them/theirs </option>
          </select>
        </div>
        <div>
          <input type='text' value={this.state.hometown} onChange={(e)=>this.handleChange("hometown", e)}/>
        </div>
        <div>
          <input type='text' value={this.state.food1} onChange={(e)=>this.handleChange("food1", e)}/>
          <input type='text' value={this.state.food2} onChange={(e)=>this.handleChange("food2", e)}/>
          <input type='text' value={this.state.food3} onChange={(e)=>this.handleChange("food3", e)}/>
        </div>
        <div>
          <input type='date' value={this.state.birthday} onChange={(e)=>this.handleChange("birthday", e)}/>
        </div>
        <div>
          <input type='number' value={this.state.huid} min = '00000000' max = '99999999' onChange={(e)=>this.handleChange("huid", e)}/>
        </div>
        <div>
          <input type='text' value={this.state.concentration} onChange={(e)=>this.handleChange("concentration", e)}/>
        </div>
        <div>
          <button onClick={()=>this.onSubmit()}></button>
        </div>
        <div>
          {(isSubmit && `User's name is ${this.state.name}, and ${this.state.pronoun1} from ${this.state.hometown}. ${this.state.pronoun2} 
          born on ${this.state.birthday}, and ${this.state.pronoun3} favorite foods are ${this.state.food1}, ${this.state.food2}, and 
          ${this.state.food3}. At Harvard, ${this.state.name} studies ${this.state.concentration}.`)}
        </div>
      </React.Fragment>
    );
    
  }
}

export default Home;
