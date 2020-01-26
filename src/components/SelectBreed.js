import React, { Component } from "react";
import Axios from 'axios';
 
export default class SelectBreed extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            breedsList: []
        }
    }
 
    async componentDidMount() {
        const response = await Axios.get(`https://dog.ceo/api/breeds/list/all`)
        const breedsArray = Object.keys(response.data.message)
 
        this.setState({
            breedsList: breedsArray
        });
    }


    render() {
        const { breedsList } = this.state
        const { handleSelectBreed } = this.props
 
        const showBreedsList = breedsList.map((breed, index) => {
            return (<option key={index} value={breed} index={index}>{breed}</option>)
        })

        return(
                <select onChange={handleSelectBreed} value="">
                    <option value=""> Choose here dog breed to view</option>
                    {showBreedsList}
                </select>
        )
    } 
}
