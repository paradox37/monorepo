import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import AppWrapper from 'src/AppWrapper';


const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
        <ChakraProvider>
            <AppWrapper />
        </ChakraProvider>
    </React.StrictMode>,
  );
}
