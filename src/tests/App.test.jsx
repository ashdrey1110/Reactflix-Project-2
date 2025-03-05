import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Two + Two = 4!!!', () => {
    expect(2 + 2).toBe(4);
  });

test('Two - Two = 0!!!', () => {
expect(2 - 2).toBe(0);
});

