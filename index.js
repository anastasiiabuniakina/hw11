//                                                                                                                  Завдання 1
// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved"через msмілісекунд. Значенням промісу, яке виповнилося, має бути та кількість мілісекунд, які передали під час виклику функції delay.
 
// const delay = ms => {
//   return new Promise((resolve)=>{
//    setTimeout(()=>{
//     resolve(ms)
//    }, ms); 
//   })


 
// };
 
 
// const logger = time => console.log(`Вирішено після ${time}ms`);
 
 

 
// delay(2000).then(logger); 
 
// delay(1000).then(logger); 
 
// delay(1500).then(logger); 
 





// Завдання 2
// Перепишіть таку функцію toggleUserState(), щоб вона не використовувала callback-функцію callback, а прийняла два всі параметри allUsersі userNameповернулася проміс.
 
const users = [
 
{ name: 'Mango', active: true },
 
{ name: 'Poly', active: false },
 
{ name: 'Ajax', active: true },
 
{ name: 'Lux', active: false },
 
];

function toggleUserState(allUsers, userName){

    return new Promise((resolve)=>{

        const updatedUsers = allUsers.map(user =>{
            return  user.name === userName ? { ...user, active: !user.active } : user
        });

        resolve(updatedUsers)
    })
};
 
const logger = updatedUsers => console.table(updatedUsers)

toggleUserState(users, 'Mango').then(logger)





// Завдання 3
// Перепишіть функцію makeTransaction()так, щоб вона не використовувала callback-функції onSuccessі onError, а прийняла весь один параметр transactionі повернула проміс.
 
function randomIntegerFromInterval (min, max) {
 
return Math.floor(Math.random() * (max - min + 1) + min);
 
};
 
 
function makeTransaction (transaction) {
 
const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
            resolve({id: transaction.id, time: delay});
            } else {
            reject({id: transaction.id});
            }
             
            }, delay);
        
    })
 
}
 
    const logSuccess = ({id, time}) => {
    console.log(`Транзакція ${id} оброблена за ${time}`);
    };
     
     
    const logError = ({id}) => {
    console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
    };
    
 
makeTransaction({ id: 70, time: 150 })
 
.then(logSuccess)
 
.catch(logError);
 
 

 
 

 
 
// /*
 
// * Працює так
 
// */
 
// makeTransaction({ id: 70, сума: 150 }, logSuccess, logError);
 
// makeTransaction({ id: 71, сума: 230 }, logSuccess, logError);
 
// makeTransaction({ id: 72, сума: 75 }, logSuccess, logError);
 
// makeTransaction({ id: 73, сума: 100 }, logSuccess, logError);
 
// /*
 
// * Повинно працювати так
 
// */
 
// makeTransaction({ id: 70, сума: 150 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 71, сума: 230 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 72, сума: 75 })
 
// .then(logSuccess)
 
// .catch(logError);
 
 
// makeTransaction({ id: 73, сума: 100 })
 
// .then(logSuccess)
 
// .catch(logError);