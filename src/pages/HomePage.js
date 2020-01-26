import React from 'react';
import SelectBreed from '../components/SelectBreed'

export default class HomePage extends React.Component {
    render() {
        const { handleSelectBreed } = this.props
        return (
            <div>
                <h1>HomePage</h1>
                <SelectBreed handleSelectBreed={handleSelectBreed} />
            </div>
        )
    }
}
