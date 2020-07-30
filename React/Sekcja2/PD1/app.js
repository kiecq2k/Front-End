const wrozby = ["Pierwsza wrozba","Druga wrozba","Trzecia wrozba"];

class App extends React.Component{
   
    handleShowClick = () => {
        const random = Math.floor(Math.random() * wrozby.length);
        this.setState({
            text: wrozby[random],
        })
    }

    handleAddClick = () => {
        const value = this.state.value;
        if(value){
            wrozby.push(value);
        }
        this.setState({
            value: "",
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
   
    state = {
        text: "",
        value: "",
    }
    
   
    render(){
        return(
            <div>
                <button onClick={this.handleShowClick}>Zobacz wróżbę</button>
                <br/>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button onClick={this.handleAddClick}>Dodaj wróżbę</button>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));