import React from 'react'
import Navbar from '../components/ui/Navbar'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import FeaturedGallery from '../components/sections/FeaturedGallery'
import FullGallery from '../components/sections/FullGallery'
import VideoShowcase from '../components/sections/VideoShowcase'
import SocialFeed from '../components/sections/SocialFeed'
import ContactSection from '../components/sections/ContactSection'

const LandingPage = () => {
    return (
          <div className="min-h-screen bg-zinc-950">
                <Navbar />
                <main>
                        <HeroSection />
                        <AboutSection />
                        <FeaturedGallery />
                        <VideoShowcase />
                        <FullGallery />
                        <SocialFeed />
                        <ContactSection />
                </main>main>
                <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Ethereal Visions Art. All rights reserved.</p>p>
                </footer>footer>
          </div>div>
        )
}
  
  export default LandingPage</div>
