'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { contactSubmissions, ContactSubmission } from '@/lib/placeholder-data';
import { formatDistanceToNow } from 'date-fns';

export default function ViewSubmissionsPage() {
  // In a real app, you would fetch and manage this state from Supabase.
  const submissions = contactSubmissions;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form Submissions</CardTitle>
        <CardDescription>Messages received from your website's contact form.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="hidden md:block">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead className="text-right">Received</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {submissions.map((sub: ContactSubmission) => (
                    <TableRow key={sub.id}>
                        <TableCell className="font-medium">{sub.name}</TableCell>
                        <TableCell>{sub.phone}</TableCell>
                        <TableCell className="max-w-xs truncate">{sub.issue}</TableCell>
                        <TableCell className="text-right">
                            {formatDistanceToNow(sub.submittedAt, { addSuffix: true })}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
                {submissions.map((sub: ContactSubmission) => (
                    <AccordionItem value={sub.id} key={sub.id}>
                        <AccordionTrigger>
                            <div className="flex flex-col text-left">
                                <span className="font-semibold">{sub.name}</span>
                                <span className="text-sm text-muted-foreground">{formatDistanceToNow(sub.submittedAt, { addSuffix: true })}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-2 px-2">
                             <p><span className="font-semibold">Phone:</span> {sub.phone}</p>
                             <p className="whitespace-pre-wrap"><span className="font-semibold">Issue:</span> {sub.issue}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}
