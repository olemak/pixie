import React, { Component } from "react";

class SubMenuHero extends Component {
    render () {
        return(
            <div className="Model__SubMenu__Hero">
                <h2>{this.props.heroData.title}</h2>   
                <h2>{this.props.heroData.description}</h2>   
            </div>
        )
    }
}



class ModelSubMenu extends Component {
    render() {
        return (
        <div className={this.props.location.state?'Model__SubMenu Model__SubMenu--active':'Model__SubMenu'}>
            <div className="Model__SubMenu__List">
                <ul>
                    {this.props.location.state?this.props.location.state.model.list.map(item=><li>{item}</li>):''}
                </ul>
            </div>

            <div className="Model__SubMen__Hero">
                {this.props.location.state?<SubMenuHero heroData={this.props.location.state.model.hero} />:''}
            </div>
        </div>
        )
    }
}

export default ModelSubMenu