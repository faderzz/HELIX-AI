import { useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Navbar from "~/components/navbar";

export default function Home(props) {
  return (
    <main className="flex min-h-screen bg-black">
      <div className="container  gap-12 px-4 py-16">
        <div className="gap-2">
          <Navbar />
        </div>
      </div>
      
    </main>
  );
}

