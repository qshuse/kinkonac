// Root layout - delegates rendering to [locale]/layout.tsx
// This file exists only to satisfy Next.js requirement for a root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
