import React, { Component } from 'react';

function Book({ bookObject }) {
  return (
    <tr>
      <td>{bookObject.id}</td>
      <td>{bookObject.title}</td>
      <td>{bookObject.category}</td>
    </tr>
  );
}

export default Book;
