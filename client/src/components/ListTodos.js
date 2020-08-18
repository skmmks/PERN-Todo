import React, { Fragment, useEffect, useState } from 'react';

const ListTodos = () => {
  const getTodos = async () => {
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  });
  return (
    <Fragment>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>  */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
