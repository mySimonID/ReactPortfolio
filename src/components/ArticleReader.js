import React from 'react'

class ArticleReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount = () => {

  }

  componentWillReceiveProps = (prevState) => {
    this.readTextFile(prevState.txt);
  }

  readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          this.setState({
            text: allText
          });
        }
      }
    };
    rawFile.send(null);
  };

  getPrefix = (row) => {

    const pos = row.indexOf(":");
    var prefix = "NF";

    if (pos > 0) {
      prefix = row.slice(0, pos);
    }

    // console.log(prefix);
    return prefix;
  }

  getText = (row) => {
    const pos = row.indexOf(":");
    var text = row;
    if (pos > 0) {
      text = row.slice(pos + 1);
    }
    return text;
  }

  renderText = (key, prefix, text) => {
    switch (prefix.toUpperCase()) {
      case 'NF':
        return (<div key={key}>{text}</div>)
      case 'H1':
        return (<h1 key={key}>{text}</h1>)
      case 'H2':
        return (<h2 key={key}>{text}</h2>)
      case 'H3':
        return (<h3 key={key}>{text}</h3>)
      case 'P':
        return (<p key={key}>{text}</p>)
      case 'C':
        return (<span className="code" key={key}>{text}</span>)
      case 'I':
        const src = "../img/" + text.trim();
        return (<img src={src} alt="image" />)
      default:
        return <span key={key}>{text}<br /></span>
    }
  }

  render() {

    var prefix = "";
    var text = "";

    return (
      <div>
        {this.state.text.split("\n").map((item, key) => {

          prefix = this.getPrefix(item);
          text = this.getText(item);

          return (
            <div key={key}>{this.renderText(key, prefix, text)}</div>
          )
        })}
      </div>
    )
  }

}

export default ArticleReader;


