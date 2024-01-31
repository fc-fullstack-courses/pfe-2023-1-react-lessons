import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { children } = this.props;

    const layout = children(this.state);

    return layout;
  }
}

DataLoader.propTypes = {
  loadData: PropTypes.func,
  children: PropTypes.func
}

export default DataLoader;
