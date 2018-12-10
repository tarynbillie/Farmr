import React, { Component } from 'react'
import '../profile.scss';


export default class Order extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td className='td-left'>
                        {this.props.leaf}
                    </td>
                    <td>
                        3lbs
                    </td>
                    <td>
                        {this.props.date_created}
                    </td>
                    <td>
                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                    </td>
                </tr>
                <tr>
                    <td className='td-left'>
                        {this.props.root}
                    </td>
                    <td>
                        {this.props.date_created}
                    </td>
                    <td>
                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                    </td>
                </tr>
                <tr>
                    <td className='td-left'>
                        {this.props.legume}
                    </td>
                    <td>
                        {this.props.date_created}
                    </td>
                    <td>
                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                    </td>
                </tr>
                <tr>
                    <td className='td-left'>
                        {this.props.night}

                    </td>
                    <td>
                        {this.props.date_created}
                    </td>
                    <td>
                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                    </td>
                </tr>
            </div>
        )
    }
}
