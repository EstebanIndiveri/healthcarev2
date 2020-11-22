import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Table from 'reactstrap/lib/Table';

const Div=styled.div`
height:100vh;

`;

const Dates = () => {
    return (
        <Fragment>
        <Div>
            <h1 className="text-center pt-4">Reserva tu turno:</h1>
        
            <Table responsive>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <th scope="row">1</th> */}
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          {/* <th scope="row">2</th> */}
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          {/* <th scope="row">3</th> */}
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
       </Div>
       </Fragment>
     );
}
 
export default Dates;