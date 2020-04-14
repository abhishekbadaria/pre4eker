import React from "react";
import Customer from "./Customer";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'Data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {customer} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<Customer customer={customer} />)
  expect(asFragment(<Customer />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole('button'));
  expect(asFragment(<Customer />)).toMatchSnapshot();
  
  fireEvent.click(screen.getByRole('button'));
  expect(asFragment(<Customer />)).toMatchSnapshot();
})