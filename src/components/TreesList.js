import React from 'react';
import TreesListItem from './TreesListItem';

export default class TreesList extends React.Component {
    state = {
        trees: []
    }

    componentDidMount() {
        this.fetchJsonTrees();//fetch json data of trees here.
    }

    fetchJsonTrees = () => {
        const url = "https://cors-anywhere.herokuapp.com";
        fetch(url + "/https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json", {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(data => this.setState({ trees: data.trees }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div data-test="TreesListComponent" className="treeList-container">
                <h1 className="subTitles">Ecosia Trees</h1>
                {this.state.trees.map((tree) => {
                    return (
                        <TreesListItem
                            data-test="TreesListItemComponent"
                            toggleListView={this.props.toggleListView}
                            tree={tree}
                            key={tree.name}
                        />
                    );
                })}
            </div>
        );
    }
}

