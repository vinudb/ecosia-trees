import React from 'react';
import Button from './Button';

const showImageHandle = (props) => {
    props.toggleListView(props.tree);
}

const TreesListItem = (props) => {
    return (
        <div data-test="treesListItemComponent" className="listItem">
            <h2 className="titles">{props.tree.name}</h2>
            <h3 className="subTitles">{props.tree.species_name}</h3>
            <Button
                onClickHandler={() => { showImageHandle(props) }}
                buttonText="Show Image"
            />
        </div>
    );
}

export default TreesListItem;