import SignOutButton from "@/components/client/SignOutButton";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession();

  console.log(session);
  return (
    <div>
      <h1>DashboardPage</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.expires}</p>
      <SignOutButton>Signout</SignOutButton>
    </div>
  );
};

export default DashboardPage;
