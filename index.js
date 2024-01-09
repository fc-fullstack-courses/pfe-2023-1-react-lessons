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

const reactPar = React.createElement('p', {className : 'text'}, 'Hello from React!');

// console.log(reactPar);

root.render(reactPar);


/*
  відмалювати параграф зі стилями та текстом у діві
*/
// const root = document.getElementById('root');

// const par = document.createElement('p');
// par.classList.add('text');
// par.textContent = 'some text';

// root.append(par);