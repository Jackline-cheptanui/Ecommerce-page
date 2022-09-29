import React, { Component } from "react";
import NarBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";


export default class App extends Component{
    render (){
        return(
            <React.Fragment>
                <NarBar/>
                <ShoppingCart y="20"/>
            </React.Fragment>

        );
    }

}