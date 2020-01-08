import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import VerticalBarChart from '../VerticalBarChart/VerticalBarChart'
@inject("ClientsStore")
@observer
class SalesByCategory extends Component {
    constructor(){
        super()
        this.state={currentCategory:"Country"}
    }
    handleChange=(e)=>{
        const value=e.target.value
        this.setState({currentCategory:value})
    }
    render() {
        const analytics=this.props.ClientsStore.analytics
        const options = ["Country", "Month", "Owner"]
        const currentCategory=this.state.currentCategory
        const category=[`groupBy${currentCategory}`]
        return (
            <div id-="sales-by-category">
                <span>Sales By</span>
                <select onChange={this.handleChange}>{options.map(o =>  <option>{o}</option> )}</select>
                <VerticalBarChart data={analytics[category]}/>
            </div>
        )

    }

}

export default SalesByCategory