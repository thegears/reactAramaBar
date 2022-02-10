import './App.css';
import React from "react";


function Element(props){
  return (
    <div>
      {props.element}
    </div>
  );
};

function SearchBar(props){
  return (
    <input onChange={(e) => {
      props.func(e.target.value);
    }}/>
  );
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      elements : ["Ankara","Adana","Urfa","Bursa","Bolu","Antalya","İzmir","İstanbul"],
      filteredElements : []
    };
    
    this.filterElements = (n) => {
      this.setState((state,props) => (
        {
          filteredElements : state.elements.filter(a => a.toLowerCase().startsWith(n.toLowerCase()))
        }
      ));
    };
  };

  componentDidMount(){
    this.setState({
      filteredElements : this.state.elements
    });
  };

  render(){
    return(
      <div>
        <SearchBar func={(n) => {
          this.filterElements(n);
        }}/>
        {this.state.filteredElements.map((e,i) => {
          return (
            <Element key={e+i} element = {e}/>
          );
        })}
      </div>
    );
  };
};

export default App;
