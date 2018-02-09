import React from "react";

const Search = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onChange, children, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">{children}</button>
      </form>
    );
  }
};

export default Search;
