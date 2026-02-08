import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, GalleryHorizontal, Inbox, ArrowRight } from 'lucide-react';
import { caseUpdates, contactSubmissions } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AdminDashboardPage() {
    const totalUpdates = caseUpdates.length;
    const totalPhotos = PlaceHolderImages.filter(p => p.id.startsWith('office-photo')).length;
    const totalSubmissions = contactSubmissions.length;
    
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Updates</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUpdates}</div>
            <p className="text-xs text-muted-foreground">
              Total case updates posted
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gallery Photos</CardTitle>
            <GalleryHorizontal className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPhotos}</div>
            <p className="text-xs text-muted-foreground">
              Photos in the office gallery
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
            <Inbox className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSubmissions}</div>
            <p className="text-xs text-muted-foreground">
              New messages from contact form
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Manage your website content from here.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-4">
          <Link href="/admin/updates">
            <Button className="w-full justify-between">
              Manage Updates <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/admin/gallery">
            <Button className="w-full justify-between">
              Manage Gallery <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/admin/submissions">
            <Button className="w-full justify-between">
              View Submissions <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
