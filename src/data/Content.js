

export const articles = [
  { id: '001', skillid:'001', title: 'ToDo List Server', detail: 'A RESTful API ToDo list server using NodeJS/Express', file: 'article001.txt'},
  { id: '002', skillid:'001', title: 'Calculator', detail: 'Calculator written using React', file:'article002.txt'},
  { id: '003', skillid:'001', title: 'Third article', detail: 'This is some detail', file:'' },
  { id: '004', skillid:'002', title: 'Fourth article', detail: 'This is some detail', file:'' },
  { id: '005', skillid:'003', title: 'Fifth article', detail: 'This is some detail', file:'' },
  { id: '006', skillid:'004', title: 'Sixth article', detail: 'This is some detail', file:''},
];

export const skills = [
  { id: '001', title: 'front end', icon: 'code', file: '', items: ['HTML', 'CSS', 'Javascript', 'React|Redux'] },
  { id: '002', title: 'server', icon: 'share', file: '', items: ['NodeJS', 'Express', '&nbsp', '&nbsp'] },
  { id: '003', title: 'database', icon: 'cloud_queue', file: '', items: ['mySQL', 'MongoDB', 'Firestore', '&nbsp'] },
  { id: '004', title: 'mobile', icon: 'apps', file: '', items: ['Xamarin forms', 'React Native', '&nbsp', '&nbsp'] },
];

export const experience = [
  { id: '001', title: 'MSXi - Jaguar Landrover', role:'Business Project Manager', dates: '2017 - 2020', text: 'Project manager for the replacement of the Global Retailer Portal (GRP). Working with 3rd party suppliers and internal departments, using Agile, to deliver a cloud based system.' },
  { id: '002', title: 'TFL', dates: '2016 - 2020', role:'Trainer',text: 'Delivered training and support for station staff in the use of new mobile Applications.' },
  { id: '003', title: 'Hobbs', dates: '2014 - 2016', role:'Technical Project Manager',text: 'Managed the deliver of a number of inititives to replace the existing Hobbs website.' },
  { id: '004', title: 'Data Lateral', dates: '2013 - 2014',  role:'Project Manager', text: 'Delivered Single Customer View(SCV) systems for Dominoes pizza and Hobbs.' },
  { id: '005', title: 'dunnhumby UK', dates: '2008-2012',  role:'Project Manager', text: 'Managed a range of projects including infrastruture, process change and development.' },
  { id: '006', title: 'TFL', dates: '1994-2008',  role:'Project Manager/Manager/Developer', text: "Managing a team of Developers, Business Analysts and Testers to delivery a number of projects." },
];

export const education = [
  { id: '001', title: 'Agile Project Management - Foundation and Practitioner', role:'', dates: '' },
  { id: '002', title: 'Managing Successful Programmes (MSP) - Foundation and Practitioner', dates: '' },
  { id: '003', title: 'Prince 2 - Foundation and Practitioner', dates: ''},
  { id: '004', title: 'MSc Information Management & Finance @Westminster University', dates: '' },
];


export const getArticle = (id) => {

  const record = articles.find(article => article.id === id);
  return record
}

export const getArticlesForSkill = (id) => {

  //
  // Return all of the articles associated with the skillid(id)
  //
  const articleList = articles.filter(article => article.skillid === id);
  console.log(articleList);
  return articleList

}

export const getSkill = (id) => {

  const record = skills.find(skill => skill.id === id);
  return record
}

export const getExperience = (id) => {

  const data = experience.find(item => item.id === id);
  return data
}

