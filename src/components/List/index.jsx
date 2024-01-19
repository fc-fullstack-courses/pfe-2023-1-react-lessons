import React from 'react';

const List = (props) => {
  console.log(props);
  const { children, listName = 'List name' } = props;
  return (
    <div>
      <h2>{listName}</h2>
      <ul>{children}</ul>
    </div>
  );
};

export default List;
