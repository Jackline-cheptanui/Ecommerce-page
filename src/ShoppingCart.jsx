import React,{Component} from "react";
import Product from "./product";
export default class ShoppingCart extends Component{
    //excutes when the component is mounted
    constructor(props){
        console.log("constructor-ShoppingCart")
        super(props);//calling super class constructor
        //initialization of the state

       this.state={products:[
            {id:1,productName:"cabbage",price:1100,quantity:0},
            {id:2,productName:"onion",price:1000,quantity:0},
            {id:3,productName:"soda",price:1000,quantity:0},
            {id:4,productName:"chicken",price:6500,quantity:0},
            {id:5,productName:"meat",price:850,quantity:0},
            {id:6,productName:"cooking oil",price:900,quantity:0},
            {id:7,productName:"green grams",price:900,quantity:0},  
            {id:8,productName:"kales",price:1500,quantity:0}, 

        ]
    };

    }
 
   render(){
    console.log("render-ShoppingCart")

    return(
    <div className="container-fluid">
    <h4>Shopping Cart</h4>

    <div className="row">
        {this.state.products.map((prod)=> {
            console.log(this.props.productName)
            console.log(this.props.price)
            console.log(this.props.quantity)
            return(
            <Product 
            key={prod.id}product={prod}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            >
                <button className="btn btn-primary">Buy Now</button>
                </Product>
            );
        })}
    </div>
    </div>
    );
        
   }


   //render end here
   //Excecute after constructor and render method(include life cycle child components if any of current component)
   componentDidMount(){
    console.log("componentDidMount-ShoppingCart")
   }


   //updating the product
   componentDidUpdate(prevProps,prevState){
    console.log(" componentDidUpdate - ShoppingCart",
    prevProps,
    prevState,
    this.state,
    this.props);

    
    // if(prevProps.y!=this.props.y){
    //     //make http call
    // }


   }
   componentWillUnmount(){
    console.log("componentWillUnmount-ShoppingCart");
   }
   componentDidCatch(erro,info){
   console.log("componentDidCatch-ShoppingCart");
   console.log(erro,info);

   }

      //excute when the user click on + button

   handleIncrement =(product,maxValue)=>{
    //get index of the selected product
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if(allProducts[index].quantity<maxValue){
    allProducts[index].quantity++;

          //update the state of the curent component (parent component)
    this.setState({products:allProducts});


    }
   };
   //excute when the user click on - button
   handleDecrement=(product,minValue)=>{
    //get index of selected product
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if(allProducts[index].quantity>minValue){
        allProducts[index].quantity--;
        //update the state of current component (parent component)
        this.setState({products:allProducts});

    }
   };

//excutes when the user click ob delete (X) button in the product component
   handleDelete=(product)=>{
    let allProducts=[...this.state.products];
    let index=allProducts.indexOf(product);
    if(window.confirm("Are you sure to delete")){
         //delete product based on index
    allProducts.splice(index,1);
    //update the state of current component (parent component)
    this.setState({products:allProducts});


    }
   


   };
}