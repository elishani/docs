import React, { Component } from "react";
import Axios from 'axios';

export default class ImageOfAllBreeds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breedsList: []
        }
    }

    async componentDidMount() {
        var srcOfRandomDog = []
        const res = await Axios.get('https://dog.ceo/api/breeds/list/all')
        const breedNameArray = Object.keys(res.data.message)

        for (let i = 0; i < breedNameArray.length; i++) {

            const newRandom = await Axios.get('https://dog.ceo/api/breed/' + breedNameArray[i] + '/images/random')

            srcOfRandomDog.push(newRandom);
        }

        this.setState({
            breedsList: breedNameArray,
            imagesList: srcOfRandomDog
        });
    }


    render() {
        const { breedsList, imagesList } = this.state

        const listofdogsImage = imagesList.map((dogtype, index) => {
            return (<div key={index} className="col-md-2 m-2 textalign">
                <h4 className="text-center">{breedsList[index]}</h4>
                <img src={dogtype.data.message} value={index} />
            </div>
            );
        })

        // return {listofdogsImage}
        return <h1>kuku</h1>
    }
}
