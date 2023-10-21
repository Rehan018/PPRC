// // Task 1: Writing Code as per the YouTube Tutorial



// console.log('person1 shows ticket');

// console.log('person2 shows ticket');



// const preMovie = async () => {

//  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {

//   setTimeout(() => resolve('ticket'), 3000);

//  });

//  const getPopcorn = new Promise((resolve, reject) => {

//   setTimeout(() => resolve('popcorn'), 3000);

//  });

//  const addButter = new Promise((resolve, reject) => {

//   setTimeout(() => resolve('butter'), 3000);

//  });



//  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

//  console.log(`got the ${ticket}`);

//  console.log(`Husband: we should go in now`);

//  console.log(`Wife: "I am hungry"`);



//  let popcorn = await getPopcorn;

//  console.log(`Husband: here is ${popcorn}`);

//  console.log(`Husband: we should go in now`);

//  console.log(`Wife: "I don't like popcorn without butter!"`);



//  let butter = await addButter;

//  console.log(`added ${butter}`);

//  console.log(`Husband: Anything else, darling`);

//  console.log(`Wife: lets go we are going to miss the preview`);

//  console.log(`Husband: thanks for the reminder *grin*`);



//  return ticket;

// };



// preMovie().then((t) => console.log(`person4 shows ${t}`));



// console.log('person4 shows ticket');



// // Task 2: Adding a New Promise for Cold Drinks



// const getColdDrinks = new Promise((resolve, reject) => {

//  setTimeout(() => resolve('cold drinks'), 3000);

// });



// // Add this part to the preMovie function

// let coldDrinks = await getColdDrinks;

// console.log(`Husband: here are the ${coldDrinks}`);



// // Task 3: Handling Promise.all with Async/Await



// const [ticket, popcorn, butter, coldDrinks] = await Promise.all([

//  person3PromiseToShowTicketWhenWifeArrives,

//  getPopcorn,

//  addButter,

//  getColdDrinks

// ]);



// // Task 4: Converting Previous Promises to Async/Await



// fetchData()

//  .then(result => {

//   return processResult(result);

//  })

//  .then(finalResult => {

//   console.log(finalResult);

//  })

//  .catch(error => {

//   console.error(error);

//  });

// // Using Async/Await:



// try {

//  const result = await fetchData();

//  const finalResult = await processResult(result);

//  console.log(finalResult);

// } catch (error) {

//  console.error(error);

// }

