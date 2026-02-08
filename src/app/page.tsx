import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Gavel, Landmark, Scale, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { PublicLayout } from '@/components/layout/public-layout';

const practiceAreas = [
  {
    icon: <Landmark className="h-10 w-10 text-accent" />,
    title: 'Civil Law',
    description: 'Expertise in property disputes, contracts, and family law matters.',
  },
  {
    icon: <Gavel className="h-10 w-10 text-accent" />,
    title: 'Criminal Law',
    description: 'Robust defense for a wide range of criminal charges and bail matters.',
  },
  {
    icon: <Scale className="h-10 w-10 text-accent" />,
    title: 'Constitutional Law',
    description: 'Handling writ petitions and cases involving fundamental rights.',
  },
];

const trustIndicators = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Cases Handled' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <PublicLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full text-white">
          <div className="absolute inset-0 bg-primary/80 z-10" />
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="relative z-20 flex h-full flex-col items-center justify-center text-center p-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold">
              Advocate Name
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
              Your Trusted Partner in Navigating the Complexities of Law
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Areas */}
        <section id="practice-areas" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline text-center font-bold text-primary">
              Our Practice Areas
            </h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Providing specialized legal services across key areas of law to protect your rights and interests.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {practiceAreas.map((area) => (
                <Card key={area.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                      {area.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl pt-4">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustIndicators.map((indicator) => (
                <div key={indicator.label}>
                  <p className="text-4xl md:text-5xl font-bold text-accent">{indicator.value}</p>
                  <p className="mt-2 text-lg text-gray-200">{indicator.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline text-center font-bold text-primary">Why Choose Us?</h2>
            <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Client-Centric Approach</h3>
                  <p className="mt-2 text-muted-foreground">We prioritize your needs, offering personalized strategies and transparent communication throughout your case.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Proven Track Record</h3>
                  <p className="mt-2 text-muted-foreground">With years of dedicated practice, we have a history of achieving favorable outcomes for our clients.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">In-Depth Expertise</h3>
                  <p className="mt-2 text-muted-foreground">Specialized knowledge in Civil, Criminal, and Constitutional law ensures your case is in capable hands.</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Local Jurisdiction Mastery</h3>
                  <p className="mt-2 text-muted-foreground">Extensive experience within the Jharkhand High Court and its subordinate courts provides a distinct advantage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <WhatsAppButton />
    </PublicLayout>
  );
}
