import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className="fixed top-0 z-50" />
      {children}
      <Footer />
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <div className="fixed bottom-4 right-4">
            <DisableDraftMode />
          </div>
          <VisualEditing />
        </>
      )}
    </>
  );
}
