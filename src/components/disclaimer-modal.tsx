'use client';

import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { BCI_DISCLAIMER } from '@/lib/constants';

const DISCLAIMER_KEY = 'disclaimer_accepted';

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const accepted = sessionStorage.getItem(DISCLAIMER_KEY);
      if (!accepted) {
        setIsOpen(true);
      }
    } catch (error) {
      // sessionStorage is not available (e.g. in SSR or private browsing), show modal
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      sessionStorage.setItem(DISCLAIMER_KEY, 'true');
    } catch (error) {
      // sessionStorage is not available, just close the modal for now
    }
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Disclaimer</AlertDialogTitle>
          <AlertDialogDescription className="max-h-[60vh] overflow-y-auto pr-4">
            {BCI_DISCLAIMER}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleAccept}>Acknowledge & Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
