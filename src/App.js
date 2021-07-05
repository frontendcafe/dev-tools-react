import React, { useEffect, useState } from './React';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({ firstName: 'Jhon', lastName: 'Doe' });
  }, [setUser]);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
