import Image from 'next/image';
import { PublicLayout } from '@/components/layout/public-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { caseUpdates, CaseUpdate } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

const UpdateCard = ({ update }: { update: CaseUpdate }) => {
    const image = PlaceHolderImages.find(img => img.id === update.imageId);

    return (
        <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            {image && (
                 <div className="aspect-video overflow-hidden">
                    <Image
                        src={image.imageUrl}
                        alt={update.title}
                        data-ai-hint={image.imageHint}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                    />
                 </div>
            )}
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{update.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground">{update.content}</p>
            </CardContent>
            <CardFooter>
                 <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </CardFooter>
        </Card>
    )
}

export default function UpdatesPage() {
  return (
    <PublicLayout>
      <main className="flex-1">
        <div className="bg-primary/5">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-headline text-center font-bold text-primary">
              Updates & Case Information
            </h1>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Insights into our recent work and notable legal developments (in compliance with BCI guidelines).
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseUpdates.map(update => (
                    <UpdateCard key={update.id} update={update} />
                ))}
            </div>
        </div>
      </main>
      <WhatsAppButton />
    </PublicLayout>
  );
}
