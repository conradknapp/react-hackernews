import React from "react";

class Search extends React.Component {
  componentDidMount() {
    if (this.input) {
      const text = "javascript";
      text.split("").map((el, i) => {
        setTimeout(() => {
          this.input.value = this.input.value + el;
        }, i * 200);
      });
      this.input.focus();
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
}

export default Search;
