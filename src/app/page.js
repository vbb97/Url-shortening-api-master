import Header from './components/Header/Header';
import Main from './components/Main';
import Shortening from './components/Shortening';
import Statistics from './components/Statistics/Statistics';
import Background from './components/Background';
export default function Home() {
  return (
    <main className="relative overflow-x-clip z-10">
      <Header />
      <Main />
      <Shortening />
      <Statistics />
      <Background />
    </main>
  );
}
