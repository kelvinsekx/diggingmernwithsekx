class BlogFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for filtering our blog.");
  }

}

class BlogPage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for displaying our blog.");
  }

}

class BlogAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for adding new blog.");
  }

}

class Blog extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Kelvinsekx Blog"), /*#__PURE__*/React.createElement(BlogFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BlogPage, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BlogAdd, null));
  }

}

const Elem = /*#__PURE__*/React.createElement(Blog, null);
ReactDOM.render(Elem, document.getElementById("___root"));