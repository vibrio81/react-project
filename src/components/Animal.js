import React, {Component} from 'react';


class Animal extends Component {
constructor(props){
    super(props);
    this.state={
        petList:[],
        petName:'',
        petBreed: '',
        petAge:0,
    };
}
handleNameInput=(event) =>{
    this.setState({petName: event.target.value});
    console.log("changed", this.state.petName);
};
handleBreedInput=(event) =>{
    this.setState({petBreed: event.target.value});
};

handleAgeInput=(event) =>{
    this.setState({petAge: event.target.value});
};

handleClick = ()=> {
let petObj = {
    petName:this.state.petName, 
    petBreed: this.state.petBreed, 
    PetAge: this.state.petAge
};
this.setState({
    petList:[...this.state.petList, petObj],petName:"", 
    petBreed:"", 
    petAge:0,
});
};

    render(){
        let petArr = this.state.petList.map((animal,index)=>{
        return(
           <div key= {index}>
             <div>Name:{animal.petName}</div>
             <div>Breed:{animal.petBreed}</div>
             <div>Age:{animal.petAge}</div>
           </div>
        );
        });
        return(
            <div>
                <h4>My Pet Store List</h4>
                {petArr}
                <input 
                    value={this.state.petName} onChange={this.handleNameInput} placeholder="pet Name"/>
                <input 
                    value={this.state.petBreed} onChange={this.handleBreedInput} placeholder="pet Breed"/>
                <input 
                    value={this.state.petAge} onChange={this.handleAgeInput} placeholder="pet Age"/>

                <button onClick ={this.handleClick}> add Animal </button>
            </div>
        )

    }
}

export default Animal;