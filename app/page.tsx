import { EditorialHome } from "@/components/EditorialHome";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <EditorialHome />
      </main>
      <SiteFooter />
    </>
  );
}
