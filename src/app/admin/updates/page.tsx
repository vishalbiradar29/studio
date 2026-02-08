
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MoreHorizontal, PlusCircle } from 'lucide-react';

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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { caseUpdates, CaseUpdate } from '@/lib/placeholder-data';

const updateSchema = z.object({
    title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
    content: z.string().min(20, { message: 'Content must be at least 20 characters.' }),
    date: z.string(), // This will be formatted from the date object
});

export default function ManageUpdatesPage() {
  // In a real app, this state would be managed via API calls to a database
  const [updates, setUpdates] = useState<CaseUpdate[]>(caseUpdates);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUpdate, setEditingUpdate] = useState<CaseUpdate | null>(null);

  const form = useForm<z.infer<typeof updateSchema>>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
    },
  });

  const handleAddNew = () => {
    setEditingUpdate(null);
    form.reset({
        title: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
    });
    setIsDialogOpen(true);
  }

  const handleEdit = (update: CaseUpdate) => {
    setEditingUpdate(update);
    form.reset({
        title: update.title,
        content: update.content,
        date: new Date(update.date).toISOString().split('T')[0],
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setUpdates(updates.filter(u => u.id !== id));
    toast({
      variant: 'destructive',
      title: 'Update Deleted',
      description: 'The case update has been successfully deleted.',
    });
  };

  function onSubmit(values: z.infer<typeof updateSchema>) {
    if (editingUpdate) {
      // Logic to edit an update
      setUpdates(updates.map(u => u.id === editingUpdate.id ? { ...editingUpdate, ...values, date: new Date(values.date).toISOString() } : u));
      toast({ title: 'Update Saved', description: 'The case update has been successfully saved.' });
    } else {
      // Logic to add a new update
      const newUpdate: CaseUpdate = { 
        id: `update-${Date.now()}`, 
        imageId: `update-image-${(updates.length % 3) + 1}`, // cycle through images
        ...values,
        date: new Date(values.date).toISOString() 
    };
      setUpdates([newUpdate, ...updates]);
      toast({ title: 'Update Added', description: 'The new case update has been successfully added.' });
    }
    setIsDialogOpen(false);
    setEditingUpdate(null);
  }

  return (
    <>
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Case Updates</CardTitle>
                        <CardDescription>Add, edit, or delete case updates.</CardDescription>
                    </div>
                    <Button onClick={handleAddNew}>
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
                        <TableCell>{new Date(update.date).toLocaleDateString('en-IN')}</TableCell>
                        <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEdit(update)}>Edit</DropdownMenuItem>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <DropdownMenuItem className="text-destructive" onSelect={(e) => e.preventDefault()}>
                                        Delete
                                    </DropdownMenuItem>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete the update titled "{update.title}".
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction
                                            className="bg-destructive hover:bg-destructive/90"
                                            onClick={() => handleDelete(update.id)}
                                        >
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>{editingUpdate ? 'Edit' : 'Add'} Case Update</DialogTitle>
                <DialogDescription>
                   {editingUpdate ? 'Make changes to your existing update.' : 'Fill in the details for the new update.'}
                </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Landmark Ruling..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Achieved a significant victory..." className="min-h-[120px]" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">{editingUpdate ? 'Save Changes' : 'Add Update'}</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    </>
  );
}
