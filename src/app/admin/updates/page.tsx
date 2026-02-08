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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { caseUpdates, CaseUpdate } from '@/lib/placeholder-data';

export default function ManageUpdatesPage() {
  // In a real app, you would fetch and manage this state from Supabase.
  const updates = caseUpdates;

  const handleEdit = (id: string) => {
    // Logic for editing an update, likely opening a dialog
    console.log(`Edit update ${id}`);
  };

  const handleDelete = (id: string) => {
    // Logic for deleting an update with confirmation
    console.log(`Delete update ${id}`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle>Case Updates</CardTitle>
                <CardDescription>Add, edit, or delete case updates.</CardDescription>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Update
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {updates.map((update: CaseUpdate) => (
              <TableRow key={update.id}>
                <TableCell className="font-medium">{update.title}</TableCell>
                <TableCell>{new Date(update.date).toLocaleDateString('en-US')}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(update.id)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(update.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
