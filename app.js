const NameForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = React.useState('');
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [phone, setPhone] = React.useState('');    
    return (
        <form
            autoComplete="off"
            onSubmit={event => {
                event.preventDefault();
                onSubmit({ firstName: firstName, name: name, age: age, phone: phone })
            }}
        >
            <div>
                <span>First Name</span>
            <input
                name="firstName"
                value={firstName}
                onChange={event => {
                    setFirstName(event.target.value)
                }}
            />
            </div>
            <div>
                <span>Name</span>
            <input
                name="name"
                value={name}
                onChange={event => {
                    setName(event.target.value)
                }}
            />
            </div>
            <div>
                <span>Age</span>
            <input
                name="age"
                value={age}
                onChange={event => {
                    setAge(event.target.value)
                }}
            />
            </div>
            <div>
                <span>Phone</span>
            <input
                name="phone"
                value={phone}
                onChange={event => {
                    setPhone(event.target.value)
                }}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

let items = [];
function CreateTable (params)
{  
    let arrParamsValues = params.values;    
    let rows = [];
    if(arrParamsValues.length > 0 && arrParamsValues[0] != null)
    {
        for( let j = 0; j < arrParamsValues.length; j++)
            items.push(arrParamsValues[j]);

        let i = 0;
        for(let r = 0; r < Math.ceil(items.length / 4); r++)
        {
            let cell = [];
            while(i < items.length)
            {
                cell.push(<td key={'td-key'+i} id={'td-id'+i}>{items[i]}</td>);
                i++;
                if(i % 4 == 0)
                    break;
            }
            rows.push(<tr key={'cell'+r} id={'cell-id'+r}>{cell}</tr>);
        }
    }

    return (
        <table className="table" colSpan="0" rowSpan="0">
            <tbody className='table-body'>
                <tr key='header-row' id='header'>
                    <td key='First Name' id='First Name'>First Name</td>
                    <td key='Name' id='Name'>Name</td>
                    <td key='Age' id='Age'>Age</td>
                    <td key='Phone' id='Phone'>Phone</td>
                </tr>
                {rows}
            </tbody>
        </table>
    );
};

function Greeting ({ name })  {
   return <p>{name == null ? 'Hello, User' : 'Welcome aboard: '+name}</p>
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            name: null,            
            age: null,
            phone: null,
        }        
    }
    render(){
        return (
            <div>
                <h3>Enter your data, please</h3>
                <NameForm onSubmit={ (values) => {
                    this.setState({
                        firstName: values.firstName,
                        name: values.name,            
                        age: values.age,
                        phone: values.phone,
                    })
                }} />                
                <h3>Users Data</h3>
                <CreateTable values={[this.state.firstName, this.state.name, this.state.age, this.state.phone]} />
                <p>&nbsp;</p>
                <Greeting name={this.state.name} />                
            </div>
        );
    
    }
}

ReactDOM.render(<App />, document.getElementById('react-root'));
