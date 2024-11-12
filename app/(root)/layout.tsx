// import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";


const tempLoggedInUser: User = {
  $id: "temp-id",
  email: "tempuser@example.com",
  userId: "user-123",
  dwollaCustomerUrl: "https://example.dwolla.url",
  dwollaCustomerId: "dwolla-123",
  firstName: "Temp",
  lastName: "User",
  name: "Temp User",
  address1: "123 Temp Street",
  city: "Temp City",
  state: "Temp State",
  postalCode: "12345",
  dateOfBirth: "2000-01-01",
  ssn: "123-45-6789",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const loggedIn = await tempLoggedInUser;

  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* <MobileNav user={loggedIn} /> */}
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}