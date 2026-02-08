'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlusCircle, Trash2 } from 'lucide-react';

export default function ManageGalleryPage() {
    // In a real app, this data would come from Supabase Storage
    const officeImages = PlaceHolderImages.filter(img => img.id.startsWith('office-photo'));

    const handleDelete = (id: string) => {
        // Logic to delete image from Supabase Storage
        console.log(`Delete image ${id}`);
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Office Gallery</CardTitle>
                        <CardDescription>Manage the photos displayed on your 'About' page.</CardDescription>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Upload Photo
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                {officeImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {officeImages.map(image => (
                            <div key={image.id} className="relative group overflow-hidden rounded-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover aspect-video"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button 
                                        variant="destructive" 
                                        size="icon"
                                        onClick={() => handleDelete(image.id)}
                                        aria-label="Delete image"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <p className="text-muted-foreground">No photos in the gallery yet.</p>
                        <Button className="mt-4">
                            <PlusCircle className="mr-2 h-4 w-4" /> Upload First Photo
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
