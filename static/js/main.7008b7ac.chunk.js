(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),c=(a(25),a(6)),o=a(1);a(26);var s=function(e){var t=e.skill;return r.a.createElement("div",{className:"col-6"},r.a.createElement(c.c,{to:"/skill/".concat(t.id)},r.a.createElement("div",{className:"skills-card"},r.a.createElement("i",{className:"material-icons feature-box-icon"},t.icon),r.a.createElement("h3",{className:"skills-card-heading u-margin-bottom-small"},t.title),r.a.createElement("ul",null,t.items.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("p",null))))};var m=function(e){var t=e.exp;return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-title"},r.a.createElement("h3",null,t.title," - "),r.a.createElement("p",null,t.role," - "),r.a.createElement("p",null,"(",t.dates,")")),r.a.createElement("div",{className:"experience-detail"},r.a.createElement("p",null,t.text)))};var d=function(e){var t=e.exp;return r.a.createElement("div",{className:"experience"},r.a.createElement("div",{className:"experience-title"},r.a.createElement("p",null,t.title)))},u=a(7),f=a(8),p=a(10),v=a(9);var g=function(e){var t=e.tag;return r.a.createElement("div",{className:"tag"},t)};var E=function(e){var t=e.tagList;return r.a.createElement("div",{className:"row tagRow"},t.split(",").map((function(e,t){return r.a.createElement(g,{tag:e,key:t})})))},h=(a(32),function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.readTextFile(n.props.filename)},n.componentDidUpdate=function(e){console.log("componentDidUpdate: "+n.props.filename),n.props.filename!==e.filename&&n.readTextFile(n.props.filename)},n.readTextFile=function(e){console.log("readTextFile: "+e);var t=new XMLHttpRequest;t.open("GET",e,!1),t.onreadystatechange=function(){if(4===t.readyState&&(200===t.status||0===t.status)){var e=t.responseText;console.log("readTextFile(2)-Found)"),n.setState({text:e})}},console.log("readTextFile(3)-NOTFound)"),t.send(null)},n.getPrefix=function(e){var t=e.indexOf(":"),a="NF";return t>0&&(a=e.slice(0,t)),a},n.getText=function(e){var t=e.indexOf(":"),a=e;return t>0&&(a=e.slice(t+1)),a},n.getLinkName=function(e){var t=e.indexOf("]"),a=e;return t>0&&(a=e.slice(1,t)),a},n.getLink=function(e){var t=e.indexOf("]"),a=e;return t>0&&(a=(a=e.slice(t+2)).slice(0,a.length-1)),a},n.renderText=function(e,t,a){switch(console.log("renderText:"+t),t.toUpperCase()){case"A":return r.a.createElement("div",null,r.a.createElement(c.c,{className:"article-link underline",to:"article/".concat(a)},"Link to main article"));case"B":return r.a.createElement("div",null,"\xa0");case"NF":return r.a.createElement("div",{key:e},a);case"H1":return r.a.createElement("h1",{key:e},a);case"H2":return r.a.createElement("h2",{key:e},a);case"H2U":return r.a.createElement("h2",{className:"underline",key:e},a);case"H3":return r.a.createElement("h3",{key:e},a);case"H3U":return r.a.createElement("h3",{className:"underline",key:e},a);case"HL":return r.a.createElement("div",{className:"horizontal-line"});case"P":return r.a.createElement("p",{key:e},a);case"C":return r.a.createElement("span",{className:"code",key:e},a);case"I":case"I1":var l=a.trim(),i="".concat("/Portfolio","/img/").concat(l);return r.a.createElement("div",{className:"row center"},r.a.createElement("img",{className:"image001 shadow",src:i,alt:""}));case"I2":var o="",s=a.split(","),m=s.map((function(e){var t=e.trim();return o="".concat("/Portfolio","/img/").concat(t),r.a.createElement("img",{className:"image002 shadow",src:o,alt:""})}));return console.log(s),r.a.createElement("div",{className:"row center"},m);case"I3":var d="",u=a.split(",").map((function(e){var t=e.trim();return d="".concat("/Portfolio","/img/").concat(t),r.a.createElement("img",{className:"image003 shadow",src:d,alt:""})}));return r.a.createElement("div",{className:"row center"},u);case"L":var f=n.getLinkName(a),p=n.getLink(a);return r.a.createElement("a",{className:"normal-a",rel:"noopener noreferrer",target:"_blank",href:p},f);case"T":return r.a.createElement(E,{tagList:a});case"*":return r.a.createElement("span",{className:"bullet"},a,r.a.createElement("br",null));default:return r.a.createElement("span",{key:e},a,r.a.createElement("br",null))}},n.state={text:""},console.log("ArticleReader-constructor:"+n.props.filename),n}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t="",a="";return r.a.createElement("div",null,this.state.text.split("\n").map((function(n,l){return t=e.getPrefix(n),a=e.getText(n),r.a.createElement("div",{key:l},e.renderText(l,t,a))})))}}]),a}(r.a.Component)),x=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){},n.state={article:[]},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{filename:this.props.filename}))}}]),a}(n.Component),b=[{id:"001",title:"Front end",icon:"code",file:"",items:["HTML","CSS","Javascript","React|Redux"]},{id:"002",title:"Server",icon:"share",file:"",items:["NodeJS","Express","\xa0","\xa0"]},{id:"003",title:"Database",icon:"cloud_queue",file:"",items:["mySQL","MongoDB","Firestore","\xa0"]},{id:"004",title:"Mobile",icon:"apps",file:"",items:["Xamarin forms","React Native","\xa0","\xa0"]}],k=[{id:"001",skillid:"002",title:"ToDo List Server",detail:"A RESTful API ToDo list server using Node.js/ Express",file:"article001.txt"},{id:"002",skillid:"001",title:"React: Calculator",detail:"Calculator developed using React",file:"article002.txt"},{id:"003",skillid:"999",title:"Javascript: ToDo List",detail:"ToDo List using Javascript",file:"JavaScript001.txt"},{id:"004",skillid:"002",title:"NodeJS: ToDo List",detail:"Provides a ToDo List using a ToDoList API Server",file:"NodeJS001.txt"},{id:"005",skillid:"001",title:"CSS: Examples",detail:"Examples of CSS",file:"CSS001.txt"},{id:"006",skillid:"004",title:"Xamarin: ToDoList client",detail:"Example of a ToDo list developed using Xamarin.",file:"xamarin001.txt"},{id:"007",skillid:"004",title:"React Native: ToDoList client",detail:"Example of a ToDo list developed using React Native",file:"ReactNative001.txt"},{id:"008",skillid:"004",title:"Xamarin: tymr247",detail:"A productivity App (Android) developed using Xamarin",file:"xamarin002.txt"},{id:"009",skillid:"001",title:"React/Redux: Sender-Receiver",detail:"Example of using React / Redux",file:"ReactRedux001.txt"},{id:"101",skillid:"001",title:"IssueJ",detail:"An issue manager similar to JIRA",file:"IssueJ002.txt"}],y=[{id:"001",title:"MSXi - Jaguar Landrover",role:"Project Manager",dates:"2017 - 2020",text:"Project manager for the replacement of the Global Retailer Portal (GRP). Working with 3rd party suppliers and internal departments, using Agile, to deliver a cloud based global system based on Liferay. In addition, I managed a number of upgrades/fixes on the existing systems. "},{id:"002",title:"TFL",dates:"2016 - 2020",role:"Trainer",text:"Delivered training and support for station staff in the use of new mobile Applications."},{id:"003",title:"Hobbs",dates:"2014 - 2016",role:"Technical Project Manager",text:"Managed the deliver of a number of initiatives to replace the existing Hobbs eCommerce platform, increasing revenue in the first year. Also, project managed the delivery of a complex CRM lifecycle programme improving both engagement and revenue across all CRM activity. Improved internal processes to ensure correct delivery."},{id:"004",title:"Data Lateral",dates:"2013 - 2014",role:"Project Manager",text:"Delivered Single Customer View(SCV) systems for both Dominoes Pizza and Hobbs."},{id:"005",title:"dunnhumby UK",dates:"2008-2012",role:"Project Manager",text:"Managed a range of projects including process change (Increasing Tesco statements from four per year to six) and development (Project Workbench, a performance reporting tool), infrastructure (Embedding teams in South America). "},{id:"006",title:"Transport for London (TfL)",dates:"1994-2008",role:"Project Manager/Manager/Developer",text:"Owner of several products and managed a team of Developers, Business Analysts and Testers to delivery a number of company wide projects."}],N=[{id:"001",title:"Agile Project Management - Foundation and Practitioner",role:"",dates:""},{id:"002",title:"Managing Successful Programmes (MSP) - Foundation and Practitioner",dates:""},{id:"003",title:"Prince 2 - Foundation and Practitioner",dates:""},{id:"004",title:"MSc Information Management & Finance @Westminster University",dates:""}];a(33),a(34),a(35);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"I am an experienced Business and Technical Project Manager with over 20 years of experience in a number of industries delivering a range of different infrastructure, process and software projects using both Waterfall and Agile methods."),r.a.createElement("p",null,"Using a flexible approach to my work, I have on occasion filled the roles of Business Analyst, Tester and Developer."),r.a.createElement("p",null,"KPI's:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Successful delivery of projects involved on time and budget."),r.a.createElement("li",null,"Managed requirements to ensure correct project delivery."),r.a.createElement("li",null,"Performed system analysis to aid with understanding and system testing."),r.a.createElement("li",null,"Lead, mentored, monitored and managed multi-disciplined teams through different phases of projects."),r.a.createElement("li",null,"Suggested the best course of action to management on project delivery."),r.a.createElement("li",null,"Innovated a number of solutions, including RPA.")),r.a.createElement("p",null,"Originally from a developer background, I maintain a firm interest in software development and I continue to develop a number software projects (see below)."),r.a.createElement("p",null,r.a.createElement("b",null,"Industries:")," Transport, Engineering, Data Insight, Agency, Retail and Automotive.")),r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"Education"),N.map((function(e){return r.a.createElement(d,{key:e.id,exp:e})}))),r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"Work Experience"),y.map((function(e){return r.a.createElement(m,{key:e.id,exp:e})}))),r.a.createElement("section",null,r.a.createElement("div",{className:"aboutme shadow"},r.a.createElement("h1",null,"Active Projects"),r.a.createElement(x,{filename:"".concat("/Portfolio","/content/issueJ001.txt")}))),r.a.createElement("section",null,r.a.createElement("div",{className:"feature-row shadow",style:{backgroundImage:"url(".concat("/Portfolio","/img/background01.jpg)")}},r.a.createElement("div",{className:"feature-container"},r.a.createElement("div",{className:"feature-title"},r.a.createElement("h2",null,"Example Projects")),r.a.createElement("div",{className:"row"},b.map((function(e){return r.a.createElement(s,{key:e.id,skill:e})})))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"footerLink"},r.a.createElement("p",null,"Contact: ",r.a.createElement("a",{href:"mailto:mySimonID@gmail.com"},"mySimonID@gmail.com")))))},w=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat("/Portfolio","/img/HorseGuards.jpg)")}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("a",{className:"links",href:"/Portfolio/"},"Simon Joyce")),r.a.createElement("h2",{className:"lead"},"project manager / software engineer - portfolio")))},T=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=function(e){var t=k.find((function(t){return t.id===e}));return console.log("getArticle: "+t.file),t}(n.state.id);n.setState({article:e})},n.state={id:e.match.params.id,article:[]},n}return Object(f.a)(a,[{key:"render",value:function(){console.log(">>>"+this.state.article.file);var e=this.state.article.file?this.state.article.file:"unknown.txt";return e="".concat("/Portfolio","/content/").concat(e),console.log(e),r.a.createElement("div",{className:"col-12 col-sm-12 col-lg-12"},r.a.createElement("div",{className:"article-page"},r.a.createElement("h1",null,this.state.article.title),r.a.createElement("p",null,this.state.article.detail),r.a.createElement(h,{filename:e})))}}]),a}(n.Component);var P=function(e){var t=e.article;return r.a.createElement("div",{className:"col-6 col-sm-6 col-lg-6"},r.a.createElement("div",{className:"article-card shadow"},r.a.createElement(c.c,{to:{pathname:"/article/"+t.id,article:t}},r.a.createElement("div",{className:"article-card-body"},r.a.createElement("h3",null,t.title),r.a.createElement("p",{className:"card-text"},t.detail)))))},S=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).componentWillMount=function(){var e,t=(e=n.state.id,b.find((function(t){return t.id===e}))),a=function(e){var t=k.filter((function(t){return t.skillid===e}));return console.log(t),t}(n.state.id);n.setState({skill:t,articles:a})},n.state={id:n.props.match.params.id,skill:[],articles:[]},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 col-sm-12 col-lg-12"},r.a.createElement("div",{className:"article-page"},r.a.createElement("h1",null,this.state.skill.title," projects"),r.a.createElement("div",null,this.state.articles.length>0?r.a.createElement("div",{className:"row"},this.state.articles.map((function(e,t){return r.a.createElement(P,{key:t,article:e})}))):r.a.createElement("div",null,"There are not articles"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.b,null,r.a.createElement(w,null),r.a.createElement(c.a,{basename:"".concat("/Portfolio","/")},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:j}),r.a.createElement(o.a,{path:"/skill/:id",component:S}),r.a.createElement(o.a,{path:"/article/:id",component:T}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7008b7ac.chunk.js.map