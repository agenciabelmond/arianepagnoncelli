import { Header } from "@/components/header"
import Hero from "@/components/hero"
import { About } from "@/components/about"
import { Specialties } from "@/components/specialties"
import { Differentials } from "@/components/differentials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Cta } from "@/components/cta"
import MapaDaSaudeSection  from "@/components/mapasaude"
import FAQItem  from "@/components/faq"
import WhatsAppButton from "@/components/whatsapp";
import DownloadSection from "@/components/pdf";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <About />
      <Specialties />
      <Differentials />
      <MapaDaSaudeSection />
      <DownloadSection />
      <Contact />
      <Cta />
      <FAQItem/>
      <Footer />
    <WhatsAppButton />
    </main>
  )
}
