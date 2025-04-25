import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
  }, []);

  return (
    <div>
      <h1>Tableau de bord</h1>
      {user ? (
        <div>
          <h2>Bienvenue, {user.email}</h2>
          <button onClick={() => supabase.auth.signOut()}>Se déconnecter</button>
        </div>
      ) : (
        <p>Veuillez vous connecter pour accéder au tableau de bord.</p>
      )}
    </div>
  );
}
