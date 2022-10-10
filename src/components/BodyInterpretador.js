import Tradutor from "./Tradutor"
import React from 'react';
class BodyInterpretador extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            codigo:""
        
        }
    }
    
updateName = (name) => {

        this.setState({codigo: name});
    
}
render(){

    return(
        <div>
           <form>
            <div>
            <input type="text" id="caixaDeTextoIn" placeholder="Insira palavra por palavra, sem espaços!"/>
            <a id="seta"> ⇉ </a>  
            <input type="text" id="caixaDeTextoOut" value={this.state.codigo} placeholder="Sua tradução virá aqui" disabled/>
            <br/>
            
            <input type="button" id="btnTra" onClick={() => Tradutor(this.updateName)} value="Traduzir"/>
            
            </div>
           </form>
        </div>        
        )
}
}

export default BodyInterpretador