import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import TripForm from "@/components/TripForm";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-[400px]">
            <Map />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Plan Your Trip</h2>
            <TripForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;