import React from 'react';
import Button from './Button';

const showImageHandle = (props) => {
    props.toggleListView();
}

const TreeImageView = (props) => {
    return (
        <div className="treeImage-container">
            <div data-test="TreeImageComponent" className="imageContainer">
                <div className="listItem">
                    <h2 className="titles">{props.tree.name}</h2>
                    <h3 className="subTitles">{props.tree.species_name}</h3>
                </div>
                <div>
                    <img className="image" src={props.tree.image} />
                </div>
                <Button onClickHandler={() => { showImageHandle(props) }} buttonText="Hide Image" />
            </div>
        </div>
    );
}

export default TreeImageView;