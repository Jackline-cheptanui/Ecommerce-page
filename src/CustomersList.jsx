import React, { Component } from "react";

export default class CustomersList extends Component{
state ={ pageTitle:"Customers",customersCount:5,

    customers:[

        {id:1,name:"Jackline",phone:"07738737",Address:{city:"Kenya"},photo:"https://picsum.photos/id/1010/60"},
        {id:2,name:"Chepsiror",phone:"07338007",Address:{city:"Uganda"},photo:"https://picsum.photos/id/1011/60"},
        {id:3,name:"Anastacia",phone:"07938147",Address:{city:"Tanzania"},photo:"https://picsum.photos/id/1012/60"},
        {id:4,name:"John",phone:null,Address:{city:"Rwanda"},photo:"https://picsum.photos/id/1013/60"},
        {id:5,name:"Grace",phone:"07438437",Address:{city:"London"},photo:"https://picsum.photos/id/1014/60"},
        {id:6,name:"Linda",phone:"07438117",Address:{city:"Australia"},photo:"https://picsum.photos/id/1020/60"}


    ],
};

    render(){
        return <div>
            <h4 className="  m-1 p-1">
                {this.state.pageTitle}

                <span className="badge badge-secondary
                 m-2">
                {this.state.customersCount}
                </span>

                    <button className="btn btn-info" onClick=
                    {this.onRefreshClick}>
                    Refresh
                    </button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getCustomerRow()}
                </tbody>

            </table>
        
        </div>;
        
    }
    onRefreshClick =()=>{
        this.setState({
            customersCount:7,
    });
    }
    getCustomerRow=()=>{
        {
            return(this.state.customers.map((cust,index)=> {
                return(
                    <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                    <img src={cust.photo} alt ="Customer"/>
                    <div>
                    <button 
                    className="btn btn-sm-btn-secondary"
                    onClick={()=> {
                        this.onChangePictureClick(cust,index);
                        }}
                        >
                        Change Picture
                        </button>
                    </div>
                    </td>

                    <td>{cust.name}</td>
                    <td>{cust.phone?(
                        cust.phone
            ):(
                <div className="bg-warning p-2 text-center">No phone</div>
            )}
            </td> 
                    <td>{cust.Address.city}</td> 
                </tr>

                )  
            })
        )}
    }
    //Excutes when the user clicks on "change picture" button in the grid
    // Received the customer object and index of the current clicked customers
    onChangePictureClick=(cust,index)=>{
        var custArray=this.statecustomers;
        custArray[index].photo="https://picsum.photos/id/104/60";
        //updating customer array in the state
        this.setState({customers:custArray});

        

        // console.log(cust);
        // console.log(index);

    };

}