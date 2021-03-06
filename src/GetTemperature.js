import React, { Component } from 'react';
import {BASE_URL} from './config/endpoints'
import ENDPOINTS from './config/endpoints'

export class GetTemperature extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperatures: [],
            loading: true,
            error: null,
        };
    }
    componentDidMount(){
        this.loadData();
    }
    loadData=()=>{
        let url=BASE_URL+ENDPOINTS.GET_TEMPERATURES;
        //let url='http://localhost:12972/weatherforecast';

        fetch(url)
        .then(response => response.json())
        .then(
            (data) => {
            this.setState({ temperatures: data, loading: false });
            },
            (error)=>{
                this.setState({
                    loading: true,
                    error
                })                    
            }
            
        );
    }
    render(){
        const {error, loading, temperatures} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {temperatures.map((item,index)=>
                         <li key={index}>
                             {item.summary}
                         </li>
                    )

                    }
                </ul>
            )
        }

    }
}