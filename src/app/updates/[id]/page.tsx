import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PublicLayout } from '@/components/layout/public-layout';
import { caseUpdates } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function UpdateDetailPage({ params }: { params: { id: string } }) {
  const update = caseUpdates.find((update) => update.id === params.id);

  if (!update) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === update.imageId);

  return (
    <PublicLayout>
      <main className="flex-1">
        <div className="bg-primary/5">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-5xl font-headline text-center font-bold text-primary">
              {update.title}
            </h1>
            <div className="flex items-center justify-center mt-4 text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <article className="max-w-4xl mx-auto">
                {image && (
                    <div className="aspect-video overflow-hidden rounded-lg mb-8 shadow-lg">
                        <Image
                            src={image.imageUrl}
                            alt={update.title}
                            data-ai-hint={image.imageHint}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                    <p>{update.content}</p>
                </div>
            </article>
        </div>

      </main>
      <WhatsAppButton />
    </PublicLayout>
  );
}

export async function generateStaticParams() {
  return caseUpdates.map((update) => ({
    id: update.id,
  }));
}
