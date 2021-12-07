
const jobsUrl = './assets/json/data.json';

/* fetch(jobsUrl)
    .then( resp => resp.json())
    .then(data => ); */
const jobs = async ( API ) => {

    try{
        const response = await fetch( API );
        const data = await response.json();
        return data;
    }catch(err){
        throw Error(err)
    }
    
} 

jobs(jobsUrl).then(data => {

    const cardsContainer = document.querySelector('.job__cards__container');
    
    const cartas = data.map( job => {

         return `<div class="card">
                    <div class="container-left">
                                
                        <div class="card__left">
                            <img src="${job.logo}" alt="${job.company}">
                        </div>
                    
                        <div class="card__center">
                            <div class="company">
                                <p>${job.company}</p>
                                ${job.new ? `<button class="new">NEW!</button>` : ``}
                                ${job.featured ? `<button class="featured">FEATURED</button>` : ``}

                            </div>
                            <h4>${job.position}</h4>
                            <ul>
                                <li class="first-li">${job.postedAt}</li>
                                <li>${job.contract}</li>
                                <li>${job.location}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <hr>
                    
                    <div class="card__right">
                        <button data-role>${job.role}</button>
                        <button data-level>${job.level}</button>
                        ${job.languages.map((item) => {
                            return `<button data-language>${item}</button>`
                        }).join(' ')}
                        ${job.tools.map((item) => {
                            return `<button data-tool>${item}</button>`
                        }).join(' ')}
                    </div>
                </div>`;
         
    }).join('');
    
    cardsContainer.innerHTML = cartas

    const botones = document.querySelectorAll('button')

    botones.forEach(boton => {

        boton.addEventListener('click', function(e){

            
            const printJobCards = ( data ) => {

                const cartas = data.map( job => {

                    return `<div class="card">
                               <div class="container-left">
                                           
                                   <div class="card__left">
                                       <img src="${job.logo}" alt="${job.company}">
                                   </div>
                               
                                   <div class="card__center">
                                       <div class="company">
                                           <p>${job.company}</p>
                                           ${job.new ? `<button class="new">NEW!</button>` : ``}
                                           ${job.featured ? `<button class="featured">FEATURED</button>` : ``}
           
                                       </div>
                                       <h4>${job.position}</h4>
                                       <ul>
                                           <li class="first-li">${job.postedAt}</li>
                                           <li>${job.contract}</li>
                                           <li>${job.location}</li>
                                       </ul>
                                   </div>
                               </div>
                               
                               <hr>
                               
                               <div class="card__right">
                                   <button data-role>${job.role}</button>
                                   <button data-level>${job.level}</button>
                                   ${job.languages.map((item) => {
                                       return `<button data-language>${item}</button>`
                                   }).join(' ')}
                                   ${job.tools.map((item) => {
                                       return `<button data-tool>${item}</button>`
                                   }).join(' ')}
                               </div>
                           </div>`;
                    
               }).join('');
               
               cardsContainer.innerHTML = cartas

            }

            const texto = e.target

            const isRole = texto.hasAttribute('data-role');
            const isLevel = texto.hasAttribute('data-level');
            const isLanguage = texto.hasAttribute('data-language');
            const isTool = texto.hasAttribute('data-tool');

            if(isRole) {

                const jobsFiltered = data.filter(job => {
                    return job.role === texto.textContent
                })
                printJobCards(jobsFiltered)

            }else if(isLevel){

                const jobsFiltered = data.filter(job => {
                    return job.level === texto.textContent
                })
                printJobCards(jobsFiltered)

            }else if(isLanguage){
                
                /* const languages = data.map( job =>{
                   return job.languages
                } ).flat()
                
                const jobsFiltered = languages.filter(job => {
                    return job === texto.textContent
                })
                printJobCards(jobsFiltered)
                */


                /* const languages = data.map( job =>{
                    return job.languages
                 } ).filter(job => {
                    return job === texto.textContent
                }) */

                /* const languages = data.forEach( job => {

                    job.languages.filter(language => {
                        return language === texto.textContent
                    })
                }) */
                /* let jobsFiltered;
                for (let i = 0; i < data.length; i++) {
                    jobsFiltered = data[i].languages.filter(language=>{
                        if (language === texto.textContent) {
                            return language
                        }
                    });
                }
                printJobCards(jobsFiltered)
                console.log(jobsFiltered) */

                /* let programmingLanguages;
                for (const job of data) {
                    programmingLanguages += job.languages.filter(language=>{
                        return  language === texto.textContent
                    })
                }

                console.log(programmingLanguages) */
                
                /* const jobLanguages = data.map( job =>{
                    job.languages.some( language => (language === texto.textContent) ? job : '') 
                 } ).join('') */
                 
                 /* const jobsFiltered = languages.filter(job => {
                     return job === texto.textContent
                 }) */
                 /* printJobCards(jobLanguages) */

                 let jobsLanguages = [];
                for (let i = 0; i < data.length; i++) {
                    const element = data[i].languages;
                    for (const language of element) {
                        if (language === texto.textContent ) {
                            jobsLanguages.push(data[i])
                        }
                    }
                }
                printJobCards(jobsLanguages)

            }else if(isTool){

                let jobsTools = [];
                for (let i = 0; i < data.length; i++) {
                    const element = data[i].tools;
                    for (const tool of element) {
                        if (tool === texto.textContent ) {
                            jobsTools.push(data[i])
                        }
                    }
                }
                printJobCards(jobsTools)

            }
            


        

        })
    })






});

// This was my First way to do it

 /* const othersButtons = () => {

        const contenedor = document.querySelectorAll('.company');
        for (let i = 0; i < contenedor.length; i++) {

            if (data[i].new === true) {
                let Button = document.createElement('button');
                Button.textContent = `NEW!`
                Button.classList.add('new')
                contenedor[i].append(Button)
            }
            
            if (data[i].featured === true) {
                let feat = document.createElement('button');
                feat.textContent = `FEATURED`
                Button.classList.add('featured')
                contenedor[i].append(feat)
            }
        }
    } */


    /* const createButtons = () => {

        const buttonsContainer = document.querySelectorAll('.card__right');

        for (let i = 0; i < buttonsContainer.length; i++) {

            let roleButton = document.createElement('button');
            roleButton.textContent = `${data[i].role}`;
            buttonsContainer[i].append(roleButton);

            let levelButton = document.createElement('button');
            levelButton.textContent = `${data[i].level}`;
            buttonsContainer[i].append(levelButton);
            
            for (let j = 0; j < data[i].languages.length; j++) {
                let languageButton = document.createElement('button');
                languageButton.textContent = `${data[i].languages[j]}`;
                buttonsContainer[i].append(languageButton);
            }
            for (let j = 0; j < data[i].tools.length; j++) {
                let toolButton = document.createElement('button');
                toolButton.textContent = `${data[i].tools[j]}`;
                buttonsContainer[i].append(toolButton);
            }

        }

    }
    
    createButtons()
    othersButtons() */










