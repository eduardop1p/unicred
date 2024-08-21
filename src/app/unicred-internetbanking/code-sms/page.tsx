import FormCodeSMS from '@/components/forms/formCodeSMS';
import Footer from '@/components/internetbanking/footer';
import Header from '@/components/internetbanking/header';

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="w-full bg-f8f8f8 pt-5 pb-[60px] min-h-screen px-5">
        <FormCodeSMS />
      </main>
      <Footer />
    </div>
  );
}
