import React from 'react';

/*
  створити текстовий компонент, йому у якості пропса передати його текст
    * передати окремим пропсом текст підказки, який треба відобразити за
    допомогою атрибута елемента title
*/

class TextElement extends React.Component {
  render() {
    const { text, tooltip } = this.props;
    return <p title={tooltip}>{text}</p>;
  }
}

export default TextElement;
