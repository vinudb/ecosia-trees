import React from 'react';
import EcosiaTrees from "../components/EcosiaTrees";
import { findByTestAtrr } from "./utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<EcosiaTrees />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'EcosiaTreesComponent');
    expect(component.length).toBe(1);
});

test('TreesList component is rendered by default', ()=>{
    const component = findByTestAtrr(wrapper, 'TreesListComponent');
    expect(component.length).toBe(1);
});

test('TreesList component is rendered when state value of isTreesListView is true', ()=>{
    wrapper.setState({ isTreesListView: true});
    const component = findByTestAtrr(wrapper, 'TreesListComponent');
    expect(component.length).toBe(1);
});

test('TreeImageView component is rendered when state value of isTreesListView is false', ()=>{
    wrapper.setState({ isTreesListView: false});
    const component = findByTestAtrr(wrapper, 'TreeImageComponent');
    expect(component.length).toBe(1);
});