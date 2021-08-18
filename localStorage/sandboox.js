//storing data to local storage

// localStorage.setItem('name','Joseph');
// localStorage.setItem('age','50');

// //retrieving data
//  let name=localStorage.getItem('name');
//  let age=localStorage.getItem('age');
//  console.log(name,age);

//strigifying and paarsing data
const todos=[{text:'play mariokart', author:'mario'},
             { text:'feeling sleepy', author:'joseph'}];

            //console.log(JSON.stringify(todos));
            localStorage.setItem('todos',JSON.stringify(todos));//store elements in the local storage

    const stored =localStorage.getItem('todos');
    console.log(stored);
              