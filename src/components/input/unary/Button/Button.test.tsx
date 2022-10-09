/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import  { Button }  from './Button';
import React from "react";


test('checkButtonRender', ()=> {
    const {queryByTitle} = render(<Button onClick={function (): Promise<any> {
        throw new Error('Function not implemented.');
    } } />);
    const btn = queryByTitle("default");
    expect(btn).toBeTruthy();
});
