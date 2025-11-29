import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Cloud, MessageCircle, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Market Prices',
    description: 'Get real-time market prices for your crops.',
    icon: <BarChart className="h-12 w-12 text-green-600" />,
    link: '/market',
  },
  {
    title: 'Weather Forecasts',
    description: 'Plan your farming activities with accurate weather forecasts.',
    icon: <Cloud className="h-12 w-12 text-blue-500" />,
    link: '/weather',
  },
  {
    title: 'Community Forum',
    description: 'Connect with other farmers and share knowledge.',
    icon: <MessageCircle className="h-12 w-12 text-purple-500" />,
    link: '/forum',
  },
  {
    title: 'Knowledge Base',
    description: 'Access a library of agricultural advice and best practices.',
    icon: <BookOpen className="h-12 w-12 text-yellow-500" />,
    link: '/knowledge',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/df7fe273-3123-476e-801d-eb6b66b0de8e/ardilink-hero-f3kpm9t-1764395018577.webp')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Empowering Ethiopian Farmers with Data</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your one-stop platform for market prices, weather forecasts, and community support.</p>
            <Button size="lg" className="mt-8 bg-green-600 hover:bg-green-700" asChild>
                <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">ArdiLink provides the tools and information to help you make informed decisions and grow your farm.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Link to={feature.link} key={feature.title} className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-700/50">
                    <CardHeader className="flex-row items-center gap-4 pb-2">
                        {feature.icon}
                        <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}