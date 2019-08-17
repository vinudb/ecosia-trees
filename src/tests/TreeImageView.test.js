import React from 'react';
import TreeImageView from "../components/TreeImageView";
import { findByTestAtrr, trees } from "./utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

const setUp = () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<TreeImageView tree={trees[0]} />);
    return wrapper;
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

test('render without error', () => {
    const component = findByTestAtrr(wrapper, 'TreeImageComponent');
    expect(component.length).toBe(1);
});