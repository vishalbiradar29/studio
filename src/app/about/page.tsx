import Image from 'next/image';
import { PublicLayout } from '@/components/layout/public-layout';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gavel, Landmark, Scale, GraduationCap, Briefcase } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

const practiceAreas = [
  {
    icon: <Landmark className="h-8 w-8 text-accent" />,
    title: 'Civil Law',
    description: 'Expertise in property disputes, contracts, family law, torts, and corporate law. We provide comprehensive legal solutions from negotiation to litigation.',
  },
  {
    icon: <Gavel className="h-8 w-8 text-accent" />,
    title: 'Criminal Law',
    description: 'Offering robust defense strategies for a wide range of criminal charges, including bail applications, trials, and appeals. We are committed to protecting your rights at every stage.',
  },
  {
    icon: <Scale className="h-8 w-8 text-accent" />,
    title: 'Constitutional Law',
    description: 'Specializing in writ petitions, public interest litigation (PIL), and cases involving the violation of fundamental rights. We are dedicated to upholding constitutional principles.',
  },
];

const OfficeGallery = () => {
    const officeImages = PlaceHolderImages.filter(img => img.id.startsWith('office-photo'));
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
            {officeImages.map(image => (
                <Card key={image.id} className="overflow-hidden">
                    <CardContent className="p-0">
                         <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover aspect-video transition-transform duration-300 hover:scale-105"
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default function AboutPage() {
  const advocateImage = PlaceHolderImages.find((img) => img.id === 'about-advocate');

  return (
    <PublicLayout>
      <main className="flex-1">
        <div className="bg-primary/5">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-headline text-center font-bold text-primary">
              About Us
            </h1>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              A commitment to justice, integrity, and excellence.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1 flex justify-center">
              {advocateImage && (
                <Image
                  src={advocateImage.imageUrl}
                  alt={advocateImage.description}
                  data-ai-hint={advocateImage.imageHint}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg aspect-square object-cover"
                />
              )}
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-headline text-primary">Advocate Name</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With over 15 years of dedicated legal practice, Advocate Name has established a reputation for providing exceptional legal counsel and representation. Driven by a passion for justice and a client-first philosophy, our practice is built on a foundation of trust, meticulous preparation, and unwavering advocacy.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe in making the legal process as transparent and understandable as possible for our clients. Whether you are facing a complex civil dispute, a challenging criminal charge, or a matter of constitutional importance, we are here to guide you with expertise and compassion.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-10 w-10 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary">Educational Qualifications</h3>
                    <p className="text-sm text-muted-foreground">LL.B. from National Law University</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <Briefcase className="h-10 w-10 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary">Jurisdiction</h3>
                    <p className="text-sm text-muted-foreground">Jharkhand High Court & Subordinate Civil Courts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="detailed-practice-areas" className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline text-center font-bold text-primary">
              Detailed Areas of Practice
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {practiceAreas.map((area) => (
                <Card key={area.title} className="bg-background">
                  <CardHeader className="flex flex-row items-center gap-4">
                      {area.icon}
                      <CardTitle className="font-headline text-2xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="office-gallery" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-headline text-center font-bold text-primary">Our Office</h2>
                <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                    A professional and welcoming environment for all our clients.
                </p>
                <OfficeGallery />
            </div>
        </section>

      </main>
      <WhatsAppButton />
    </PublicLayout>
  );
}
