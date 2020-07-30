
function Person (props) {
    const tab = props.content;

    return (
        tab.map((item)=>{
        return <li>{item}<button>Usuń</button></li> 
        })
    )
}


class List extends React.Component{
    
   state = {
       content: ["Jan K.","Piotr C.","Marysia W.","John S."],
   }

    render(){
        return(
            <ul>
                <Person content={this.state.content}/>
            </ul>
        )
    }
}

ReactDOM.render(<List/>,document.getElementById('root'));