import Link from 'next/link';
import { Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  isFooter?: boolean;
};

export function Logo({ isFooter = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Scale
        className={cn(
          'h-8 w-8',
          isFooter ? 'text-accent' : 'text-primary'
        )}
      />
      <span
        className={cn(
          'font-bold font-headline text-xl',
          isFooter ? 'text-white' : 'text-primary'
        )}
      >
        LexCompage
      </span>
    </Link>
  );
}
