import React from 'react';
import { ThemeContext, UserContext } from '../contexts';

// function HeaderWithUser(props) {
//   return (
//     <UserContext.Consumer>
//       {(user) => <Header user={user} {...props} />}
//     </UserContext.Consumer>
//   );
// }

// Компонент Вищого Порядку (High Order Component HOC)
/*
  функція, яка приймає компонентА і повертає інший компонентБ,
  який відмальовує компонентА
*/

export function withUser(Component) {
  class NewComponent extends React.Component {
    render() {
      return (
        <UserContext.Consumer>
          {(user) => <Component user={user} {...this.props} />}
        </UserContext.Consumer>
      );
    }
  }

  return NewComponent;
}

// function HeaderWithUserAndTheme(props) {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => (
//         <HeaderWithUser theme={theme} setTheme={setTheme} {...props} />
//       )}
//     </ThemeContext.Consumer>
//   );
// }

export function withTheme(Component) {
  function ComponentWithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => (
          <Component theme={theme} setTheme={setTheme} {...props} />
        )}
      </ThemeContext.Consumer>
    );
  }

  return ComponentWithTheme;
}
