/* const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]; */

/*   console.log("original", orders);
 */  /* const rta = orders.map((item) => {

    return {
        ...item,
        tax: 25,
    }
    
  }) */
  
 /*  const entregados = orders.filter( order => order.delivered && order.total > 150)  
 
  console.log("filter", entregados); */


//REDUCE------------------------------------------------------------------
  /* const items = [1, 3, 2, 3, 5,6,7,5,5,5,5];

  const rta = items.reduce((obj, item) => {
      if (!obj[item]) {
          obj[item] = 1;
      } else {
          obj[item] = obj[item] + 1;
      }
      return obj;
  }, {});
  
  console.log(rta); */

/* const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

let niveles = data.map( elem => elem.level)
                  .reduce( (obj, elem) => {

                    if(!obj[elem]){
                        obj[elem] = 1;
                    }else {
                      obj[elem] = obj[elem] + 1;
                    }
                    return obj
                  }, {});

console.log(niveles) */

// EJERCICIO CON REDUCE-------------
/* const items = [1, 3, 2, 3, 5,6,7,5,5,5,5, 10,9,8,7,8,7,9,4,5,6,3,2,1];
let rangos = items.reduce( (obj, elem) => {

  if(elem <= 5){
      obj['1-5'] += 1;
  }else if(elem > 5 && elem <= 8 ) {
    obj['6-8'] += 1;
  }else{
    obj['9-10'] += 1;
  }
    
  return obj
}, {'1-5': 0, '6-8': 0, '9-10': 0});


console.log(rangos) */


//Método SOME----------------------------------------------

//const numbers = [1, 2, 3, 4];

/* let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta); */

/* const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2); */

/* const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3); */

/* const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('../../node_modules/date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment)); */


//    MÉTODO EVERY ----------------------------------------------------------

/* const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const esMenorDeEdad = team.every(({age}) => age < 18 )

console.log(esMenorDeEdad) */


//  Método FIND   y    FINDINDEX   -----------------------------------


/* const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
]; */

/* const burguer = products.findIndex( ({id}) => id === '🍔' ); */

/* let burguer = undefined;
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  if (element.id === '🍔') {
    burguer = i;
    break;
  }
}
console.log(burguer) */


// Método  JOIN + SPLIT

/* const title = 'Curso de manipulación de arrays';

let URL = title.split(' ').join('-').toLowerCase()

console.log(URL) */

// FLAT con recursividad--------------------------------------------------

/* const matriz = [
  [1,2,3],
  [4,5,6, [1,2, [1,2]]],
  [7,8,9]
];

function profundidad (list) {
  let newList = [];
  if (typeof list != "object") return [list];

  list.forEach(element => {
      newList = newList.concat(profundidad(element));
  });
  return newList;
}

const newArray = profundidad(matriz);

console.log(newArray); */


const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

let arreglo1 = [...calendars.primaryCalendar, ...calendars.secondaryCalendar]


console.log(arreglo1.map( element => element.startDate))
 
let arreglo2 = Object.values(calendars)

console.log(arreglo2.flat( ).map(cita => cita.startDate)) 

