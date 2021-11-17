
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

    data.forEach( job => {
        cardsContainer.innerHTML += 
            `<div class="card">
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
                    <button>${job.role}</button>
                    <button>${job.level}</button>
                    ${job.languages.map((item) => {
                        return `<button>${item}</button>`
                    }).join(' ')}
                    ${job.tools.map((item) => {
                        return `<button>${item}</button>`
                    }).join(' ')}
                </div>
            </div>`;
    });


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










