import React from 'react';
import TreesList from "../components/TreesList";
import { findByTestAtrr, trees } from "./utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<TreesList />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'TreesListComponent');
    expect(component.length).toBe(1);
});

test('should render tree items which is equal to the length of array of trees', () => {
    wrapper.setState({ trees });
    const component = findByTestAtrr(wrapper, 'TreesListItemComponent');
    expect(component.length).toBe(trees.length);
});

test('Should call fetchJsonTrees inside ComponentDidMount', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchJsonTrees');
    instance.componentDidMount();
    expect(instance.fetchJsonTrees).toHaveBeenCalledTimes(1);
});