import FormElectronicSignature from '@/components/forms/formElectronicSignature';
import Footer from '@/components/internetbanking/footer';
import Header from '@/components/internetbanking/header';

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="w-full bg-f8f8f8 pt-5 pb-[60px]">
        <FormElectronicSignature />
      </main>
      <Footer />
    </div>
  );
}
