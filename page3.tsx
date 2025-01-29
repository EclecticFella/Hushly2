import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "Account Optimization",
      description:
        "We'll optimize your OnlyFans profile to attract and retain subscribers, including bio writing, pricing strategy, and content organization.",
    },
    {
      title: "Content Strategy",
      description:
        "Develop a tailored content plan that resonates with your audience and keeps them engaged, including post frequency, content types, and themes.",
    },
    {
      title: "Growth Tactics",
      description:
        "Implement proven strategies to grow your subscriber base and increase your earnings, including cross-platform promotion and collaboration opportunities.",
    },
    {
      title: "Engagement Boost",
      description:
        "Learn techniques to increase subscriber interaction and retention, including personalized messaging and exclusive content offers.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Receive regular performance reports and insights to understand your growth and areas for improvement.",
    },
    {
      title: "24/7 Support",
      description:
        "Get round-the-clock assistance for any questions or issues you may encounter on your OnlyFans journey.",
    },
  ]

  return (
    <div className="min-h-screen bg-softPink py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          At Hushly, we offer a comprehensive suite of services designed to maximize your success on OnlyFans. Our
          expert team is dedicated to helping you reach your full potential and achieve your financial goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-roseGold/20">
              <h3 className="text-xl font-serif text-roseGold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-roseGold text-white hover:bg-roseGold/80 transition-colors">
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  )
}

