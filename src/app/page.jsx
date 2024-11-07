import HomePage from "@/components/custom/HomePage/HomePage";
import NavBar from "@/components/custom/navbars/mainNav/NavBar";
import FooterNav from "@/components/custom/navbars/footerNav/FooterNav";

export default function Home() {
  return(
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow mt-16">
        <HomePage />
      </main>
      <div className="mt-20 rounded-t-3xl">
        <FooterNav />
      </div>  
    </div>
  ) 
}
