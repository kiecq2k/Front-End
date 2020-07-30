import React,{Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    checked: false,

    errors: {
      name: false,
      email: false,
      password: false,
      accept: false,
    }

  }

  messages = {
    name: "Imię powinno zawierać co najmniej 10 znaków i nie posiadać spacji!",
    email: "Email musi posiadac znak @ !",
    password: "Hasło musi posiadać co najmniej 8 znaków!",
    accept: "Nie wyrażono zgody!",
  }
  validateForm = () => {
    const {name,email,password,checked} = this.state;
    if(name.length<10 || name.indexOf(' ')=== -1){
      this.setState({
         errors: {
           name: true,
         }
      })
    }
    if(email.indexOf('@')===-1){
      this.setState({
        errors: {
          email: true,
        }
      })
    }
    if(password.length<8){
      this.setState({
        errors: {
          password: true,
        }
      })
    }
    if(checked === false){
      this.setState({
        errors: {
          accept: true,
        }
      })
    }

  }


  handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if(type === 'text' || type === 'email' || type === 'password'){
      this.setState({
        [name]: e.target.value
      })
    } else{
      this.setState({
        checked: e.target.checked
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
  }

  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="user">Twoje imię:</label>
        <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>
        {this.state.errors.name && <span>{this.messages.name}</span>}
        <label htmlFor="email">Twój email:</label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
        {this.state.errors.email && <span>{this.messages.email}</span>}
        <label htmlFor="password">Twoje hasło:</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        {this.state.errors.password && <span>{this.messages.password}</span>}
        <label htmlFor="checkbox">Wyrażam zgodę</label>
        <input type="checkbox" name="checkbox" checked={this.state.checked} onChange={this.handleChange}></input>
        {this.state.errors.accept && <span>{this.messages.accept}</span>}
        <button>Zapisz się</button>
      </form>
    </div>
  );
  }
}

export default App;
