import React from 'react'
import Tags from './Tags'
import { Link } from 'react-router-dom'
import ImageView from './ImageView'

import '../ArticleReader.css'

class ArticleReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    // console.log("ArticleReader-constructor:" + this.props.filename);
  }

  // componentDidMount = () => {
  //   // this.readTextFile(this.props.txt);
  // }

  componentDidMount = () => {
    this.readTextFile(this.props.filename);
  }

  componentDidUpdate = (prevProps) => {
    // console.log("componentDidUpdate: " + this.props.filename);

    if (this.props.filename !== prevProps.filename) {
      this.readTextFile(this.props.filename);
    }
  }

  readTextFile = file => {
    // console.log("readTextFile: " + file)
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText;
          // console.log("readTextFile(2)-Found)");
          this.setState({
            text: allText
          });
        }
      }
    };
    // console.log("readTextFile(3)-NOTFound)");
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
    // console.log("renderText:" + prefix);

    switch (prefix.toUpperCase()) {
      case 'A':
        return (<div><Link className="article-link underline" to={`article/${text}`}>Link to main article</Link></div>);
      case 'B': // Blank Row
        return (<div>{'\u00A0'}</div>)
      case 'NF':
        return (<div key={key}>{text}</div>)
      case 'H1':
        return (<h1 key={key}>{text}</h1>)
      case 'H2':
        return (<h2 key={key}>{text}</h2>)
      case 'H2U':
        return (<h2 className="underline" key={key}>{text}</h2>)
      case 'H3':
        return (<h3 key={key}>{text}</h3>)
      case 'H3U':
        return (<h3 className="underline" key={key}>{text}</h3>)
      case 'H4':
        return (<h4 key={key}>{text}</h4>)
      case 'H4U':
        return (<h4 className="underline" key={key}>{text}</h4>)
      case 'HL':
        return (<div className="horizontal-line"></div>)
      case 'P':
        return (<p key={key}>{text}</p>)
      case 'C':
        return (<span className="code" key={key}>{text}</span>)
      case 'I':
      case 'I1':

        const filename = text.trim();
        const src = `${process.env.PUBLIC_URL}/img/${filename}`;
        return (<div className="row center">
          <ImageView css={"image001 shadow"} src={src} />
       
        </div>)
      case 'I2':

        var src2 = "";

        const images = text.split(",");

        const result = images.map(image => {
          const filename = image.trim();
          src2 = `${process.env.PUBLIC_URL}/img/${filename}`;
          return(<ImageView css={"image002 shadow"} src={src2} />);
          // return (<img className="image002 shadow" src={src2} alt="" />)
        })
        // console.log(images);
        return (<div className="row center">{result}</div>)

      case 'I3':

        var src3 = "";

        const images3 = text.split(",");

        const result3 = images3.map(image => {
          const filename = image.trim();
          src3 = `${process.env.PUBLIC_URL}/img/${filename}`;
          return(<ImageView css={"image003 shadow"} src={src3} />);
          // return (<img className="image003 shadow" src={src3} alt="" />)
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
    //console.log("ArticleReader - render" + this.state.filename);
    var prefix = "";
    var text = "";

    return (
      <div className="article">
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


