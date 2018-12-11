import React, { Component } from 'react'
import '../profile.scss';

// const baseUrl = 'http://localhost:8080';

export default class Order extends Component {



   

    render() {
        return (
            <tr>
                <td className='td-left'>
                    {this.props.name}
                </td>
                <td>
                    {this.props.amount}
                </td>
                <td>
                    {this.props.units}
                </td>
                <td>
                    {this.props.date_created}
                </td>
                <td>
                    <div className='orders__delete-icon' onClick={()=>this.props.deleteItem(this.props.id)}></div>
                </td>
            </tr>
        )
    }
}
