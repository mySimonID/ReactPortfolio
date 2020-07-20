import React from 'react'
import Tags from './Tags'

class ArticleReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount = () => {
    // this.readTextFile(this.props.txt);
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

  getLinkName = (row) => {
    const pos = row.indexOf("]");
    var text = row;
    if (pos > 0) {
      text = row.slice(1, pos);
    }
    return text;
  }

  getLink = (row) => {
    const pos = row.indexOf("]");
    var text = row;
    if (pos > 0) {
      text = row.slice(pos + 2); // take into account the (
      text = text.slice(0, text.length - 1);
    }
    return text;
  }

  renderText = (key, prefix, text) => {
    switch (prefix.toUpperCase()) {
      case 'B': // Blank Row
        return (<div>{'\u00A0'}</div>)
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
      case 'I1':
        const src = "../img/" + text.trim();
        return (<div className="row center"><img className="image001" src={src} alt="image" /></div>)
      case 'I2':

        var src2 = "";

        const images = text.split(",");

        const result = images.map(image => {
          src2 = "../img/" + image.trim();
          return (<img className="image002" src={src2} alt="image" />)
        })
        console.log(images);
        return (<div className="row center">{result}</div>)

      case 'I3':

        var src3 = "";

        const images3 = text.split(",");

        const result3 = images3.map(image => {
          src3 = "../img/" + image.trim();
          return (<img className="image003" src={src3} alt="image" />)
        })
        return (<div className="row center">{result3}</div>)

      case 'L':
        const name = this.getLinkName(text);
        const link = this.getLink(text);
        return (<a className="normal-a" rel="noopener noreferrer" target='_blank' href={link}>{name}</a>)
      case 'T':
        return (<Tags tagList={text} />);
      case '*':
        return <span className='bullet'>{text}<br /></span>
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


