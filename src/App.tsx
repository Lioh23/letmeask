import { createContext, useState } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { GoogleAuthProvider, signInWithPopup, auth } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => void;
}

/** quando eu crio esse tesContext, eu preciso informar valores pra sere macessados gobalmente
 * eu informo que o valor inicial dele é um objeto e eu passo um estado alterável dentro do value da minha variável global
 * dessa forma eu posso alterar globalmente o estado de uma variável a partir do context.
 */

export const AuthContext = createContext({} as AuthContextType);

function App() {

  const [user, setUser] = useState<User>();


  function signInWithGoogle() {
    
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider).then(result => {
      if(result.user) {
        const { displayName, photoURL, uid } = result.user;

        if(!displayName || !photoURL) {
          throw new Error("Missing information from Google Account."); 
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }

    });
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />      
      </AuthContext.Provider>
    </BrowserRouter>
    );
  }

export default App;
