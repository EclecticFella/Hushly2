import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg" },
    { name: "John Smith", role: "Head of Strategy", image: "/placeholder.svg" },
    { name: "Alice Johnson", role: "Content Director", image: "/placeholder.svg" },
  ]

  return (
    <div className="min-h-screen bg-softPink py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12">About Hushly</h1>
        <div className="bg-white p-8 rounded-lg shadow-md border border-roseGold/20 mb-16">
          <p className="text-xl text-gray-600 mb-6">
            Hushly is a premier OnlyFans management agency dedicated to empowering content creators to reach their full
            potential. Our team of experts combines industry knowledge, innovative strategies, and personalized support
            to help our clients achieve unprecedented success in the digital content space.
          </p>
          <p className="text-xl text-gray-600 mb-6">
            Founded in 2021, Hushly has quickly become a leader in the OnlyFans management industry. We've helped
            hundreds of creators increase their earnings, grow their audience, and build sustainable careers on the
            platform.
          </p>
          <p className="text-xl text-gray-600">
            Our mission is to provide creators with the tools, knowledge, and support they need to thrive in the
            competitive world of online content creation. We believe in empowering individuals to take control of their
            financial future while expressing their creativity and authenticity.
          </p>
        </div>
        <h2 className="text-3xl font-serif text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-roseGold/20 text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-serif text-roseGold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-serif text-gray-900 mb-6">
            Ready to take your OnlyFans career to the next level?
          </h3>
          <Button size="lg" className="bg-roseGold text-white hover:bg-roseGold/80 transition-colors">
            Work With Us
          </Button>
        </div>
      </div>
    </div>
  )
}

