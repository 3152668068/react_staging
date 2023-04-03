import React from 'react'
import {Route, Routes,Navigate} from 'react-router-dom'
import About from './views/about'
import MyNavLink from './components/MyNavLink/myNavLink';
import Header from './components/Header/index'
import Home from './views/home/home'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*导航路由链接*/}
               <MyNavLink to = "/about" >About</MyNavLink>
               <MyNavLink to = "/home" >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*可切换的路由组件*/}
                <Routes>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/home/*' element={<Home/>}/>
                  <Route path="*" element={<Navigate to={"/about"} replace />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
