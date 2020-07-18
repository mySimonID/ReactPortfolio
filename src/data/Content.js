

export const articles = [
  { id: '001', skillid:'001', title: 'First article', detail: 'This is some detail', link: 'article'},
  { id: '002', skillid:'001', title: 'Second article', detail: 'This is some detail' },
  { id: '003', skillid:'002', title: 'Third article', detail: 'This is some detail' },
  { id: '004', skillid:'002', title: 'Fourth article', detail: 'This is some detail' },
  { id: '005', skillid:'003', title: 'Fifth article', detail: 'This is some detail' },
  { id: '006', skillid:'004', title: 'Sixth article', detail: 'This is some detail' },
];

export const skills = [
  { id: '001', title: 'front end', icon: 'code', link: '', items: ['HTML', 'CSS', 'Javascript', 'React|Redux'] },
  { id: '002', title: 'server', icon: 'share', link: '', items: ['NodeJS', 'Express', '&nbsp', '&nbsp'] },
  { id: '003', title: 'database', icon: 'cloud_queue', link: '', items: ['mySQL', 'MongoDB', 'Firestore', '&nbsp'] },
  { id: '004', title: 'mobile', icon: 'apps', link: '', items: ['Xamarin forms', 'React Native', '&nbsp', '&nbsp'] },
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

