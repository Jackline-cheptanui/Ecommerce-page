import React, { Component } from "react";
import NarBar from "./NavBar";
// import ShoppingCart from "./ShoppingCart";
import Login from "./Login";


export default class App extends Component{
    render (){
        return(
            <React.Fragment>
                <NarBar/>
                <Login></Login>
            </React.Fragment>

        );
    }

}