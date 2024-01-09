/*
  React - інтерфейс для взаємодії з реактом. 
  Містить інструменти для створення спеціальних реакт-елементів.

  React.createElement - функція для створення реакт-елементу.

  реакт-елемент - специфічний вид об'єкту на основі якого реакт малює звичайний ДОМівський елемент

  ReactDOM - інтерфейс для роботи з віртуальним DOM реакту. При зміні данних у реакт -елементах
  відбувається процедура узгодження (согласование / reconsilliation) стану віртуального DOMу 
  з реальним.

  ReactDOM.createRoot - створення реактівського кореневого елементу, у якому відображаються усі
  інші елементи
*/
const htmlContainer = document.getElementById('root');

const root = ReactDOM.createRoot(htmlContainer);

const reactPar = React.createElement(
  'p',
  { className: 'text' },
  'Hello from React!'
);

// console.log(reactPar);

// root.render(reactPar);

/*
  за допомогою реакту відмалювати у якомусь контейнері
  заголовочок з текстом і класом

*/

// JSX - JS eXtended - розширення мови JS, створенно для того щоб зручніше робити реакт компоненти

const user = {
  id: 1,
  name: 'Test User',
};

// const oldElem = React.createElement(
//   'h1',
//   { className: 'text', id: 'asdsd', title: user.name },
//   `Hello ${user.name}`
// );

const elem = (
  <h1 className="text" id="asdsd" title={user.name}>
    Hello {user.name}
  </h1>
);
const elem2 = <input />;

// const elem3 = React.createElement('div', null, 
//   React.createElement('p', null, '1'),
//   React.createElement('p', null, '2'),
//   React.createElement('p', null, '3'),
// );

const elem3 = (
  <div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
);

root.render(elem);

/*
  відмалювати параграф зі стилями та текстом у діві
*/
// const root = document.getElementById('root');

// const par = document.createElement('p');
// par.classList.add('text');
// par.textContent = 'some text';

// root.append(par);
