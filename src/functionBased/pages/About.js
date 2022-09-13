import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SinglePage from './SinglePage';

// In react-router-dom v6 the useMatch hook takes a required pattern value
// that is either a string representing a path or a PathPattern object.
// https://stackoverflow.com/questions/70447957/why-is-usematch
// -not-working-in-react-router
const About = () => (
  <div className="about__content">
    <ul className="about__list">
      <li>
        <Link to="about-app">About App</Link>
      </li>
      <li>
        <Link to="about-author">About Author</Link>
      </li>
    </ul>
    {/*  A <Route> is only ever to be used as the child of <Routes> element,
      never rendered directly. Please wrap your <Route> in a <Routes>
      Add "element={<SinglePage/>}" to Route ==> [SinglePage] is not a <Route> component.
      All component children of <Routes> must be a <Route> or <React.Fragment>
      https://stackoverflow.com/questions/70074873/reactjs-home-is-not-a-route-component
      -all-component-children-of-routes-m
      */}
    <Routes>
      <Route path=":slug" element={<SinglePage />} />
    </Routes>
  </div>
);
export default About;
