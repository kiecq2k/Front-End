const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female"
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female"
    }
  ]
}
const Item = (props) => (
<div className="userInfo">
<h1>{props.content.name}</h1>
<p>Informacje o użytkowniku</p>
<p>Wiek użytkownika: <strong>{props.content.age}</strong></p>
<p>Płeć użytkownika: {props.content.sex}</p>
</div>
)

class ListItems extends React.Component{
  // state = {
  //   items: ["jabłko", "śliwka","gruszka"]
  // }
  state = {

  }
  usersList = () => {
    let users = this.props.data.users;
    users = users.map((user)=> <Item user={user} key={user.id}/>)
    return users;
  }
  render(){
  
    return (
      <div>
        <button>Wszyscy</button>
        <button>Kobiety</button>
        <button>Mężczyzni</button>
        {this.usersList()}
      </div>
    )
  }
}

ReactDOM.render(<ListItems data={data}/>,document.getElementById('root'));