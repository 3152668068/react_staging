//创建外壳组件APP
import React,{Component} from 'react'
import Serach from './components/Serach/index';
import List from './components/List/index'

class App extends Component{
    
    state = {
        Users:[],
        isFrist:true,
        isLoad:false,
        isError:''
    }

    // gitHub = (value) =>{
    //     this.setState({Git:value}) 
    // }

    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }
    
    render(){
        //通过 ...将状态中的全部赋值过去
        return ( 
            <div className="container">
                <Serach updateAppState = {this.updateAppState} />
                
                <List {...this.state} />
            </div>    
            
        )
    }
}

export default App  