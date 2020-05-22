import React, { Component } from 'react';

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log("handlechange", event)
    }
    
    render() {
        return (
            <div>
                <h1>PortfolioForm</h1>

                <form>
                    <div>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Portfolio Item Name" 
                        value={this.state.name} 
                        onChange={this.handleChange}
                        />

                        <input 
                        type="text" 
                        name="url" 
                        placeholder="url" 
                        value={this.state.url} 
                        onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="position" 
                        placeholder="position" 
                        value={this.state.position} 
                        onChange={this.handleChange}
                        />
                        <input 
                        type="text" 
                        name="category" 
                        placeholder="category" 
                        value={this.state.category} 
                        onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <input 
                        type="text" 
                        name="description" 
                        placeholder="description" 
                        value={this.state.description} 
                        onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>

                </form>
            </div>
        )
    }
}