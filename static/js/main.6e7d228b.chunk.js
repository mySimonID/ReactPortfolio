(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),c=(a(28),a(9)),o=a(4);a(29);var s=function(e){var t=e.skill;return r.a.createElement("div",{className:"col-6 col-md-3"},r.a.createElement(c.c,{to:"/skill/".concat(t.id)},r.a.createElement("div",{className:"skills-card"},r.a.createElement("i",{className:"material-icons skills-card-icon"},t.icon),r.a.createElement("h3",{className:"u-margin-bottom-small"},t.title),r.a.createElement("ul",null,t.items.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("p",null))))};var m=function(e){var t=e.exp;return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-title"},r.a.createElement("h3",null,t.title," - "),r.a.createElement("p",null,t.role," - "),r.a.createElement("p",null,"(",t.dates,")")),r.a.createElement("div",{className:"experience-detail"},r.a.createElement("p",null,t.text)))};var u=function(e){var t=e.exp;return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-title"},r.a.createElement("p",null,t.title)))},d=a(10),p=a(11),f=a(13),v=a(12);var E=function(e){var t=e.tag;return r.a.createElement("div",{className:"tag"},t)};var g=function(e){var t=e.tagList;return r.a.createElement("div",{className:"row tagRow"},t.split(",").map((function(e,t){return r.a.createElement(E,{tag:e,key:t})})))},h=a(15),b=a(16),x=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).toggleImage=function(){console.log("Clicking: ".concat(n.state.showPopUp)),n.setState((function(e){return{showPopUp:!e.showPopUp}}))},n.state={showPopUp:!1},n.toggleImage=n.toggleImage.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:this.props.css,src:this.props.src,alt:"",onClick:this.toggleImage}),this.state.showPopUp?r.a.createElement(b.a,{show:!0,onHide:this.toggleImage,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(b.a.Header,{closeButton:!0}),r.a.createElement(b.a.Body,null,r.a.createElement("img",{className:"image-popup",src:this.props.src,alt:"",onClick:this.toggleImage}))):null)}}]),a}(n.Component),y=(a(36),function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.readTextFile(n.props.filename)},n.componentDidUpdate=function(e){n.props.filename!==e.filename&&n.readTextFile(n.props.filename)},n.readTextFile=function(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.onreadystatechange=function(){if(4===t.readyState&&(200===t.status||0===t.status)){var e=t.responseText;n.setState({text:e})}},t.send(null)},n.getPrefix=function(e){var t=e.indexOf(":"),a="NF";return t>0&&(a=e.slice(0,t)),a},n.getText=function(e){var t=e.indexOf(":"),a=e;return t>0&&(a=e.slice(t+1)),a},n.getLinkName=function(e){var t=e.indexOf("]"),a=e;return t>0&&(a=e.slice(1,t)),a},n.getLink=function(e){var t=e.indexOf("]"),a=e;return t>0&&(a=(a=e.slice(t+2)).slice(0,a.length-1)),a},n.renderText=function(e,t,a){switch(t.toUpperCase()){case"A":return r.a.createElement("div",null,r.a.createElement(c.c,{className:"article-link underline",to:"article/".concat(a)},"Link to main article"));case"B":return r.a.createElement("div",null,"\xa0");case"NF":return r.a.createElement("div",{key:e},a);case"H1":return r.a.createElement("h1",{key:e},a);case"H2":return r.a.createElement("h2",{key:e},a);case"H2U":return r.a.createElement("h2",{className:"underline",key:e},a);case"H3":return r.a.createElement("h3",{key:e},a);case"H3U":return r.a.createElement("h3",{className:"underline",key:e},a);case"H4":return r.a.createElement("h4",{key:e},a);case"H4U":return r.a.createElement("h4",{className:"underline",key:e},a);case"HL":return r.a.createElement("div",{className:"horizontal-line"});case"P":return r.a.createElement("p",{key:e},a);case"C":return r.a.createElement("span",{className:"code",key:e},a);case"I":case"I1":var l=a.trim(),i="".concat("/Portfolio","/img/").concat(l);return r.a.createElement("div",{className:"row center"},r.a.createElement(x,{css:"image001 shadow",src:i}));case"I2":var o="",s=a.split(",").map((function(e){var t=e.trim();return o="".concat("/Portfolio","/img/").concat(t),r.a.createElement(x,{css:"image002 shadow",src:o})}));return r.a.createElement("div",{className:"row center"},s);case"I3":var m="",u=a.split(",").map((function(e){var t=e.trim();return m="".concat("/Portfolio","/img/").concat(t),r.a.createElement(x,{css:"image003 shadow",src:m})}));return r.a.createElement("div",{className:"row center"},u);case"L":var d=n.getLinkName(a),p=n.getLink(a);return r.a.createElement("a",{className:"normal-a",rel:"noopener noreferrer",target:"_blank",href:p},d);case"T":return r.a.createElement(g,{tagList:a});case"*":return r.a.createElement("span",{className:"bullet"},a,r.a.createElement("br",null));default:return r.a.createElement("span",{key:e},a,r.a.createElement("br",null))}},n.state={text:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t="",a="";return r.a.createElement("div",{className:"article"},this.state.text.split("\n").map((function(n,l){return t=e.getPrefix(n),a=e.getText(n),r.a.createElement("div",{key:l},e.renderText(l,t,a))})))}}]),a}(r.a.Component)),k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){},n.state={article:[]},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"article"},r.a.createElement(y,{filename:this.props.filename}))}}]),a}(n.Component),N=[{id:"001",title:"Front end",icon:"code",file:"",items:["HTML","CSS","Javascript","React|Redux"]},{id:"002",title:"Server",icon:"share",file:"",items:["NodeJS","Express","\xa0","\xa0"]},{id:"003",title:"Database",icon:"cloud_queue",file:"",items:["mySQL","MongoDB","Firestore","\xa0"]},{id:"004",title:"Mobile",icon:"apps",file:"",items:["Xamarin forms","React Native","\xa0","\xa0"]}],j=[{id:"001",skillid:"002",title:"ToDo List Server",detail:"A RESTful API ToDo list server using Node.js/ Express",file:"article001.txt"},{id:"002",skillid:"001",title:"React: Calculator",detail:"Calculator developed using React",file:"article002.txt"},{id:"003",skillid:"999",title:"Javascript: ToDo List",detail:"ToDo List using Javascript",file:"JavaScript001.txt"},{id:"004",skillid:"002",title:"NodeJS: ToDo List",detail:"Provides a ToDo List using a ToDoList API Server",file:"NodeJS001.txt"},{id:"005",skillid:"001",title:"CSS: Examples",detail:"Examples of CSS",file:"CSS001.txt"},{id:"006",skillid:"004",title:"Xamarin: ToDoList client",detail:"Example of a ToDo list developed using Xamarin.",file:"xamarin001.txt"},{id:"007",skillid:"004",title:"React Native: ToDoList client",detail:"Example of a ToDo list developed using React Native",file:"ReactNative001.txt"},{id:"008",skillid:"004",title:"Xamarin: tymr247",detail:"A productivity App (Android) developed using Xamarin",file:"xamarin002.txt"},{id:"009",skillid:"001",title:"React/Redux: Sender-Receiver",detail:"Example of using React / Redux",file:"ReactRedux001.txt"},{id:"101",skillid:"001",title:"IssueJ",detail:"An issue manager similar to JIRA",file:"issueJ002.txt"}],w=[{id:"001",title:"MSXi - Jaguar Landrover",role:"Project Manager",dates:"2017 - 2020",text:"Project manager for the replacement of the Global Retailer Portal (GRP). Working with 3rd party suppliers and internal departments, using Agile, to deliver a cloud based global system based on Liferay. In addition, I managed a number of upgrades/fixes on the existing systems."},{id:"002",title:"TFL",dates:"2016 - 2020",role:"Trainer",text:"Delivered training and support for station staff in the use of new mobile Applications."},{id:"003",title:"Hobbs",dates:"2014 - 2016",role:"Technical Project Manager",text:"Managed the delivery of a number of initiatives to replace the existing Hobbs eCommerce platform, which increased revenue in the first year. Also, project managed the delivery of a complex CRM lifecycle programme improving both engagement and revenue across all CRM activity. Improved internal processes to ensure accurate delivery."},{id:"004",title:"Data Lateral",dates:"2013 - 2014",role:"Project Manager",text:"Delivered Single Customer View(SCV) systems for both Dominoes Pizza and Hobbs."},{id:"005",title:"dunnhumby UK",dates:"2008-2012",role:"Project Manager",text:"Managed a range of projects including process change (Increasing Tesco statements from four per year to six) and development (Project Workbench, a performance reporting tool), infrastructure (Embedding teams in South America)."},{id:"006",title:"Transport for London (TfL)",dates:"1994-2008",role:"Project Manager/Manager/Developer",text:"Owner of several products and manager of a team of Developers, Business Analysts and Testers to deliver a number of company wide projects."}],P=[{id:"001",title:"Agile Project Management - Foundation and Practitioner",role:"",dates:""},{id:"002",title:"Managing Successful Programmes (MSP) - Foundation and Practitioner",dates:""},{id:"003",title:"Prince 2 - Foundation and Practitioner",dates:""},{id:"004",title:"MSc Information Management & Finance @Westminster University",dates:""}];a(37),a(38),a(39);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"I am an experienced Business and Technical Project Manager with over 20 years of experience in a variety of industries delivering a range of different infrastructure, process and software projects using both Waterfall and Agile methods."),r.a.createElement("p",null,"Using a flexible approach to my work, I have on occasion filled the roles of Business Analyst, Tester and Developer."),r.a.createElement("p",null,"KPI's:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Successful delivery of a number of projects on time and within budget."),r.a.createElement("li",null,"Managed requirements to ensure accurate project delivery."),r.a.createElement("li",null,"Performed system analysis to aid understanding and system testing."),r.a.createElement("li",null,"Managed multi-disciplined teams, through different phases of projects."),r.a.createElement("li",null,"Offered solutions to management on the best approach for project delivery."),r.a.createElement("li",null,"Able to prioritise and manage several complex projects at one time."),r.a.createElement("li",null,"Able to successfully coordinate third party providers to deliver solutions."),r.a.createElement("li",null,"Innovated a number of solutions, e.g using RPA to deploy users globally.")),r.a.createElement("p",null,"Originally from a developer background, I maintain a firm interest in software development and I continue to develop a number of software projects (see below)."),r.a.createElement("p",null,r.a.createElement("b",null,"Industries:")," Transport, Engineering, Data Insight, Agency, Retail and Automotive.")),r.a.createElement("section",null,r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"Active Projects"),r.a.createElement(k,{filename:"".concat("/Portfolio","/content/issueJ001.txt")}))),r.a.createElement("section",null,r.a.createElement("div",{className:"feature-row shadow"},r.a.createElement("div",{className:"feature-container"},r.a.createElement("div",{className:"feature-title"},r.a.createElement("h2",null,"Example Projects")),r.a.createElement("div",{className:"row"},N.map((function(e){return r.a.createElement(s,{key:e.id,skill:e})})))))),r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"Work Experience"),w.map((function(e){return r.a.createElement(m,{key:e.id,exp:e})}))),r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"Skills & Education"),r.a.createElement("div",{className:"skills-section"},r.a.createElement("p",null,r.a.createElement("b",null,"Skills:")," Project Management, Business Analysis, Programming, Testing/UAT, Innovation"),r.a.createElement("p",null,r.a.createElement("b",null,"Software:")," MS Office, MS Project, JIRA/Confluence, Visual Studio/Code"),r.a.createElement("p",null,r.a.createElement("b",null,"Development:")," Excel VBA, MS Project VBA, SQL, HTML, CSS, Javascript, React, Xamarin, C#, RPA")),r.a.createElement("br",null),r.a.createElement("div",{className:"skills-section"},P.map((function(e){return r.a.createElement(u,{key:e.id,exp:e})})))),r.a.createElement("footer",null,r.a.createElement("div",{className:"footerLink"},r.a.createElement("p",null,"Contact: ",r.a.createElement("a",{href:"mailto:mySimonID@gmail.com"},"mySimonID@gmail.com")))))},T=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat("/Portfolio","/img/HorseGuards.jpg)")}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("a",{className:"links",href:"/Portfolio/"},"Simon Joyce")),r.a.createElement("h2",{className:"lead"},"project manager / software engineer - portfolio")))},M=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e,t=(e=n.state.id,j.find((function(t){return t.id===e})));n.setState({article:t})},n.state={id:e.match.params.id,article:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.article.file?this.state.article.file:"unknown.txt";return e="".concat("/Portfolio","/content/").concat(e),r.a.createElement("div",{className:"col-12 col-sm-12 col-lg-12"},r.a.createElement("div",{className:"article-page article"},r.a.createElement("h1",null,this.state.article.title),r.a.createElement("p",null,this.state.article.detail),r.a.createElement(y,{filename:e})))}}]),a}(n.Component);var I=function(e){var t=e.article;return r.a.createElement("div",{className:"col-6 col-sm-6 col-lg-6"},r.a.createElement("div",{className:"article-card shadow"},r.a.createElement(c.c,{to:{pathname:"/article/"+t.id,article:t}},r.a.createElement("div",{className:"article-card-body"},r.a.createElement("h3",null,t.title),r.a.createElement("p",{className:"card-text"},t.detail)))))},A=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentWillMount=function(){var e,t=(e=n.state.id,N.find((function(t){return t.id===e}))),a=function(e){var t=j.filter((function(t){return t.skillid===e}));return console.log(t),t}(n.state.id);n.setState({skill:t,articles:a})},n.state={id:n.props.match.params.id,skill:[],articles:[]},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 col-sm-12 col-lg-12"},r.a.createElement("div",{className:"article-page"},r.a.createElement("h1",null,this.state.skill.title," projects"),r.a.createElement("div",null,this.state.articles.length>0?r.a.createElement("div",{className:"row"},this.state.articles.map((function(e,t){return r.a.createElement(I,{key:t,article:e})}))):r.a.createElement("div",null,"There are no articles documented yet"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.b,null,r.a.createElement(T,null),r.a.createElement(c.a,{basename:"".concat("/Portfolio","/")},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:S}),r.a.createElement(o.a,{path:"/skill/:id",component:A}),r.a.createElement(o.a,{path:"/article/:id",component:M}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6e7d228b.chunk.js.map