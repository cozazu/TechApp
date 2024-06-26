"use client";
import { useLoginContext } from "../loginContext";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavBarRight: React.FC = (): React.ReactElement => {
  const router = useRouter();
  const { setToken, token, setCount } = useLoginContext();
  const handleClick = () => {
    setToken(null);
    localStorage.removeItem("count");
    localStorage.removeItem("cart");
    setCount(0);
    router.push("/");
  };

  return (
    <nav>
      <ul className="md:flex content-around gap-3 hidden text-slate-50">
        {token && (
          <>
            <Link href="/infoUser">Info user</Link>
            <Link href="/orders">history</Link>{" "}
            <button onClick={handleClick}>Log Out</button>
          </>
        )}
        {!token && (
          <>
            <Link href="/login">Log In</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </ul>
    </nav>
  );
};