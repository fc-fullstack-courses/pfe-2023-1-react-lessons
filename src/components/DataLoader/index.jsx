import React, { Component } from 'react';

/*
  1. завантажити дані
  2. цей компонент сам НЕ буде відмальовувати дані, 
    натомість від буде ділится даними з якимось іншим компонентом
  3. налаштування будемо передавати пропсами
*/
class DataLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      isError: false,
    };
  }

  load = async () => {
    const { loadData } = this.props;

    this.setState({ isLoading: true });

    try {
      const data = await loadData();

      this.setState({
        data,
      });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.load();
  }

  render() {
    const { render } = this.props;

    const layout = render(this.state);

    return layout;
  }
}

export default DataLoader;
