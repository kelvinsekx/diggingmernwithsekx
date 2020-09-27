const blogsDATA = [
  {
    id: 1,
    status: "granteed",
    owner: "kelvin",
    created: new Date(2020 - 20 - 1),
    summary: "Thanks for following love. I am a black man with a black mind",
    title: "This is my first blog",
  },
  {
    id: 2,
    status: "non-granteed",
    owner: "sekx",
    created: new Date(1988 - 20 - 02),
    summary: "Thanks for following love. I am a brown man with a brown mind",
    title: "This is my second blog",
  },
];

class BlogFilter extends React.Component {
  render() {
    return <div>This is a placeholder for filtering our blog.</div>;
  }
}

class BlogPage extends React.Component {
  render() {
    return (
      <div>
        blogsDATA.map((each)=>
        {
          <BlogRow
            summary={each.summary}
            dateTime={each.created}
            title={each.title}
            owner={each.owner}
          />
        }
        )
      </div>
    );
  }
}

class BlogRow extends React.Component {
  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <span>{this.props.dateTime}</span>
        <div>{this.props.summary}</div>
      </section>
    );
  }
}

class BlogAdd extends React.Component {
  render() {
    return <div>This is a placeholder for adding new blog.</div>;
  }
}

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Kelvinsekx Blog</h1>
        <BlogFilter />
        <hr />
        <BlogPage />
        <hr />
        <BlogAdd />
      </div>
    );
  }
}

const Elem = <Blog />;
ReactDOM.render(Elem, document.getElementById("___root"));
