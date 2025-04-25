import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <h1 className="text-3xl font-bold text-indigo-700">
        Bienvenue sur Beytipay
      </h1>
      <Link href="/dashboard">
        <a className="mt-4 text-indigo-500">Accéder au tableau de bord</a>
      </Link>
    </div>
  );
}
