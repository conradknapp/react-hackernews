import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import App, { Search, Button, Table } from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Search", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    // renders the search component to the DOM
    ReactDOM.render(<Search>Search</Search>, div);
    // verifies that there is no error during the rendering process
  });

  test("has a valid snapshot", () => {
    // stores a snapshot of the rendered component
    const component = renderer.create(<Search>Search</Search>);
    let tree = component.toJSON();
    // runs it against a previous snapshot
    expect(tree).toMatchSnapshot();
    // fails when the snapshot has changed
  });
});

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button>More</Button>, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Button>More</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Table", () => {
  const props = {
    list: [
      {
        title: "My Title",
        author: "me",
        num_comments: 1,
        points: 2,
        objectID: "a"
      },
      {
        title: "Your Title",
        author: "you",
        num_comments: 2,
        points: 2,
        objectID: "b"
      }
    ]
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Table {...props} />, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
