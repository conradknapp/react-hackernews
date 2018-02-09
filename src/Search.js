import React from "react";

const Search = class extends React.Component {
  componentDidMount() {
    if (this.input) {
      const text = "javascript";
      text.split("").map((el, i) => {
        setTimeout(() => {
          this.input.value = this.input.value + el;
        }, i * 100);
      });
      this.input.focus();
      // setTimeout(() => this.input.focus(), 2000);
    }
  }

  render() {
    const { value, onChange, children, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          ref={node => {
            this.input = node;
          }}
        />
        <button type="submit">{children}</button>
      </form>
    );
  }
};

export default Search;
