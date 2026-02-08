'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GalleryHorizontal,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Inbox,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';

const adminNavLinks = [
  { href: '/admin', label: 'Dashboard', icon: <LayoutDashboard /> },
  { href: '/admin/updates', label: 'Manage Updates', icon: <Newspaper /> },
  { href: '/admin/gallery', label: 'Manage Gallery', icon: <GalleryHorizontal /> },
  { href: '/admin/submissions', label: 'Submissions', icon: <Inbox /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {adminNavLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <Link href={link.href} className="w-full">
                    <SidebarMenuButton
                      isActive={pathname === link.href}
                      className="w-full justify-start"
                      tooltip={link.label}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <Link href="/admin/login" className="w-full">
              <SidebarMenuButton className="w-full justify-start">
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </Link>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
              <SidebarTrigger className="md:hidden"/>
              <h1 className="flex-1 text-lg font-semibold md:text-2xl font-headline">
                {adminNavLinks.find(link => link.href === pathname)?.label || 'Admin'}
              </h1>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
