import React from 'react';
import Button from '@/components/Button';

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>{`Test`}</Button>
    </div>
  );
};

export default App;
