
import { Component } from 'react';
import {sampleText} from './sampleText'
import marked from 'marked'

class App extends Component {
    state= {
      text : sampleText 
    }


    componentDidMount(){
    const text=  localStorage.getItem('text')
      this.setState({text})
      if(text){
      this.setState({text})

      }else{
      this.setState({text:sampleText})

      }
    }

    componentDidUpdate(){
      const {text}=this.state
      localStorage.setItem('text',text)
    }

    handleChange=(e)=>{
      const text=e.target.value
      this.setState({text})
    }

    renderText=text=>{
      const __html=marked(text,{sanitizer:true})
      return{ __html}
    }
    render(){
        return(
          <div style={{marginTop:40}}>
            <div className="container"> 
              <div className="row">
                <div className="col-md-6">
                  <textarea 
                  className='form-control'
                  rows='35'
                  value={this.state.text}
                  onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-6">
                <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
                </div>
              </div>
            </div>
          </div>
         )  
    }
  

}

export default App;
