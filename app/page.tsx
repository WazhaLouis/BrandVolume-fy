import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

export default function BrandVolumePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-amber-900 text-white text-center py-16 px-8">
        <h1 className="text-5xl font-bold mb-4">Brand Volume</h1>
        <p className="text-xl tracking-wide opacity-90">"Elevating Brands in the Digital Era"</p>
      </header>

      {/* About Us */}
      <section className="max-w-4xl mx-auto py-12 px-8">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4 text-amber-900">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Brand Volume is a Botswana-based creative technology agency helping businesses thrive in the digital age. We
          specialize in delivering end-to-end solutions tailored for growth through digital marketing, web & mobile app
          development, growth operations, and social media management.
        </p>
      </section>

      {/* Core Services */}
      <section className="max-w-4xl mx-auto py-12 px-8">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 text-amber-900">Core Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <Badge className="bg-orange-500 text-white mb-3">Digital Marketing</Badge>
              <p className="text-gray-700">SEO, email campaigns, Google/Facebook ads</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <Badge className="bg-orange-500 text-white mb-3">Web & Mobile Development</Badge>
              <p className="text-gray-700">Custom websites, e-commerce, and app prototyping</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <Badge className="bg-orange-500 text-white mb-3">Growth Operations</Badge>
              <p className="text-gray-700">Funnel optimization, A/B testing, analytics</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <Badge className="bg-orange-500 text-white mb-3">Social Media Management</Badge>
              <p className="text-gray-700">Strategy, content creation, and performance reporting</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="max-w-4xl mx-auto py-12 px-8">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 text-amber-900">Project Highlights</h2>

        <div className="space-y-8">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">Farm Fresh BW – Mobile App</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A farmer-to-consumer marketplace helping local producers list and sell vegetables. Features include
                seller profiles, product descriptions, rating system, and intuitive login/search UI.
              </p>
              <Image
                src="/images/farm-fresh-app.png"
                alt="Farm Fresh App"
                width={600}
                height={400}
                className="w-full rounded-lg border border-gray-200"
              />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">Doctor Finder – Mobile App</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Connects users to healthcare specialists across various disciplines. Features include category
                filtering, doctor profiles, ratings, and appointment booking.
              </p>
              <Image
                src="/images/doctor-finder-app.png"
                alt="Doctor Finder App"
                width={600}
                height={400}
                className="w-full rounded-lg border border-gray-200"
              />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">Forward Construct – Website</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A clean, responsive construction company website showcasing services, modern UI/UX, and hero CTA
                sections.
              </p>
              <Image
                src="/images/forward-construct-website.png"
                alt="Forward Construct Website"
                width={600}
                height={400}
                className="w-full rounded-lg border border-gray-200"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="max-w-4xl mx-auto py-12 px-8">
        <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4 text-amber-900 text-left">
              Brand Identity
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Logo concept: BV initials in a modern, abstract mark using shades of orange-brown, white, and black to
              reflect innovation and professionalism.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/brand-volume-logo.png"
                alt="Brand Volume Logo"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Footer */}
      <footer className="bg-orange-500 text-white text-center py-12 px-8 border-t-4 border-amber-900">
        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+267 77381278</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>wazhalouis@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Botswana</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
