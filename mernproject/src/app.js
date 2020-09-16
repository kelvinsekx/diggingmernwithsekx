class BlogFilter extends React.Component {
  render(){
    return (
      <div>This is a placeholder for filtering our blog.</div>
    )
  }
}

class BlogPage extends React.Component {
  render(){
    return (
      <div>This is a placeholder for displaying our blog.</div>
    )
  }
}

class BlogAdd extends React.Component {
  render(){
    return (
      <div>This is a placeholder for adding new blog.</div>
    )
  }
}


class Blog extends React.Component {
  render(){
      return (
          <div>
              <h1>Kelvinsekx Blog</h1>
              <BlogFilter />
              <hr />
              <BlogPage />
              <hr />
              <BlogAdd />
          </div>
      )
  }
}

const Elem = <Blog />
ReactDOM.render(Elem, document.getElementById("___root"));
