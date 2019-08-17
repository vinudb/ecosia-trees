import React from 'react';
import TreesList from './TreesList';
import TreeImageView from './TreeImageView';

export default class EcosiaTrees extends React.Component {
    state = {
        isTreesListView: true,
        treeSelected: {}
    }

    toggleListView = (treeSelected) =>
        this.setState({
            isTreesListView: !this.state.isTreesListView,
            treeSelected: !!treeSelected ? treeSelected : {}
        });

    render() {
        return (
            <div data-test="EcosiaTreesComponent" className="">
                {this.state.isTreesListView ?
                    <TreesList data-test="TreesListComponent" toggleListView={this.toggleListView} />
                    :
                    <TreeImageView
                        data-test="TreeImageComponent"
                        toggleListView={this.toggleListView}
                        tree={this.state.treeSelected} />
                }
            </div>
        );
    }
}

