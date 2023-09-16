import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SideNav = () => {
  const session = useSession();
  const user = session.data?.user;

  const handleSignOut = async () => {
    try {
      const response = await signOut();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await signIn();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user && (
          <li>
            <Link href={`/profile/${user.id}`}>Profile</Link>
          </li>
        )}
        {!user ? (
          <li>
            <button onClick={() => void handleSignIn()}>Log In</button>
          </li>
        ) : (
          <li>
            <button onClick={() => void handleSignOut()}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
