import React, { useState } from 'react';
import { useEffect } from 'react';
import './styles.css';



export function Home() {

const [user, setUser] = useState({name: '', avatar:'', bio:'',location:'',company:'',user_nickname:'',twitter_username:'',blog:'', email:''});
const [repo, setRepo] = useState({reponame: '',stars:'', forkscount:'', description:''})
const [repo2, setRepo2] = useState({reponame: '',stars:'', forkscount:'', description:''})
useEffect(() => {
   fetch('https://api.github.com/users/mathfrei')
   .then(response => response.json())
   .then(data => {
    setUser({
      avatar: data.avatar_url,
      name:  data.name,
      bio: data.bio,
      location: data.location,
      company: data.company,
      nickname: data.login,
      twitter_username: data.twitter_username,
      blog: data.blog,
      email: data.email,
      
    })
    fetch('https://api.github.com/users/mathfrei/repos')
    .then(response => response.json())
    .then(data2 => {
      setRepo({ 
        reponame: data2[0].name,
        stars: data2[0].stargazers_count,
        forkscount: data2[0].forks_count,
        description: data2[0].description,
        tags: data2[0].topics[0],
      })
      setRepo2(
        {
        reponame: data2[1].name,
        stars: data2[1].stargazers_count,
        forkscount: data2[1].forks_count,
        description: data2[1].description,
        tags: data2[1].topics[0],
        }
      )
    })
   })
}, []) 
  return (
    <>
    <head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;500;600&display=swap');
    </style>
    </head>  
    
<body> 
<div className="Main">
   <section id="section-1">
  
   <div className="portfoliobox">  
     <div id="profile" className="bgcards">
       <div className="profilepic">
       <img src={user.avatar} id="profile-picture" alt="foto de perfil"></img>
       </div>
       <strong id="username">{user.name}</strong>
       <p id="userbio">"{user.bio}"</p>
   </div>
      <div id="information" className="bgcards">
         <div className="location">{user.location}</div>
         <div className="company">{user.company}</div>
         <div className="userNickname">{user.nickname}</div>
         <div className="twitterUserName">{user.twitter_username}</div>
         <div className="blog">{user.blog}</div>
         <div className="email">{user.email}</div>
      </div>
      <div id="technologies" className="bgcards">
        <h1 id="main-titles">Tecnologias</h1>
           <div class="skill-tree">
           <div id="skill-list"><b>Javascript</b></div>
           <div id="skill-list"><b>NodeJS</b></div>
           <div id="skill-list"><b>ReactJS</b></div>
           <div id="skill-list"><b>CSS</b></div>
           <div id="skill-list"><b>Git</b></div>
           <div id="skill-list"><b>HTML</b></div>
           <div id="skill-list"><b>CSS Ani.</b></div>
           <div id="skill-list"><b>DOM</b></div>
           <div id="skill-list"><b>SQL</b></div>
      </div>   
    </div>
       <div id="Experiences" className="bgcards">
         <h1 id="main-titles">Experiências</h1>
         <ul className="experience-list">
           <li>Nenhum</li>
         </ul>
       </div>
       <div id="Education" className="bgcards">
         <h1 id="main-titles">Educação</h1>
         <ul>
           <li>Rocketseat<p><em>2021 - 2022</em></p><p>Fundamentar</p></li>
           <li>Rocketseat<p><em>2021 - 2022</em></p><p>Conectar</p></li>
           <li>Rocketseat<p><em>2021 - 2022</em></p><p>Especializar</p></li>
         </ul>
       </div>
       </div>
   </section>
   <section id="section-2">
    <div id="myprojects" className="bgcards"> 
        <a href="">My Projects</a>
        <a href="">Veja todos</a>
    </div> 
    <div id="proj-container-main" className="bgcards" >
      <div id="projects-container" >
                <div id="projects-info">
                   <p id="project-folder-ico">{repo.reponame}</p>
                   <p id="repo-description">{repo.description}</p>
                </div>
                <div id="rates-container">
                    <div id="rates">   
                       <p id="stars">{repo.stars}</p>
                       <p id="forks">{repo.forkscount}</p>
                    </div>
                    <div>
                        <p>{repo.tags}</p>
                    </div>        
      </div>
      
      </div>
      <div id="projects-container" >
                <div id="projects-info">
                   <p id="project-folder-ico">{repo2.reponame}</p>
                   <p id="repo-description">{repo2.description}</p>
                </div>
                <div id="rates-container">
                     <div id="rates">   
                        <p id="stars">{repo2.stars}</p>
                        <p id="forks">{repo2.forkscount}</p>
                     </div>      
                     <div>
                        <p>{repo2.tags}</p>
                     </div>
                </div>   
      </div>
    
    </div>
    <div id="recentposts" className="bgcards"> 
        <a href="">Recent Posts</a>
    </div>
    <div id="description-main" className="bgcards">
      <section id="image-description">
        <img src={user.avatar} id="project-profile-picture"></img>
      </section>
      <section  id="user-description" className="bgcards">
          <section id="description-project-1" >   
             <h2>Portfólio</h2>
             <em>2 anos atrás</em>
          </section>   
          <section id="description-project-2"> 
              <p>Construindo um portfólio básico na base do React</p>
              <div id='project-hashs'>
                  <p>#Javascript</p> 
                  <p>#NodeJS</p> 
                  <p>#CSS</p>
                  <p>#html</p>
              </div>  
          </section>    
      </section>
    </div>
   </section>   
</div>

</body>

</>  
  )
}


