import React from 'react';
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { TableScreen } from '../components/data/TableScreen';
import { FormScreen } from '../components/form/FormScreen';

export const SecondaryRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="list" element={ <TableScreen /> } />
          <Route path="create" element={ <FormScreen /> } />
          <Route path="*" element={ <Navigate to="list" /> } />
        </Routes>
      </div>
    </div>
  )
}