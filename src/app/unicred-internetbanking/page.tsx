import Footer from '@/components/internetbanking/footer';
import Header from '@/components/internetbanking/header';

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <main className="h-full w-full bg-[url('/assets/imgs/9a42828dfc33f4e58003.png')] bg-center bg-no-repeat bg-fixed bg-contain bg-267d5c"></main>
      <Footer />
    </div>
  );
}
