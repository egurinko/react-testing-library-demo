import React from 'react';

const NotFound: React.FC<NoProps> = () => (
  <div>
    <h1>Not Found</h1>
    <h1>404</h1>
  </div>
);

const memoed = React.memo(NotFound);
export { memoed as NotFound };
