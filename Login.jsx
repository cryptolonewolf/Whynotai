import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Login() {
  const login = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <div className='p-20 text-center'>
      <h1 className='text-4xl font-bold mb-6 text-blue-700'>Login</h1>
      <button onClick={login} className='px-6 py-3 bg-blue-600 text-white rounded-xl shadow-neo'>
        Login with Google
      </button>
    </div>
  );
}
