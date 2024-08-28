"use client";
import { Game, TopBar } from "@/components/index";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import CardsIcon from "@/svgs/cards.svg";
import { authenticateUser } from "@/hooks/useCards";
import { useEffect, useState } from "react";

const checkWindow = () => (typeof window === "undefined" ? false : true);

const PokeCardsHomePage = () => {
  const { user, error, isLoading: isLoadingUser } = useUser();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (checkWindow()) {
      setAuthorized(sessionStorage.getItem("token") ? true : false);
    }
    if (user?.name ) {
      authenticateUser(user.name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main className="flex flex-col items-center mx-auto max-w-[75%]">
      <TopBar user={user} isLoading={isLoadingUser} />
      {user && authorized && <Game />}
      {!user && (
        <div className="flex flex-col items-center justify-center w-[75%] h-[90vh]">
          <h1 className="text-center text-3xl font-bold flex items-center justify-center">
            Welcome to <CardsIcon />{" "}
            <span className="text-4xl">Poke Cards</span>
          </h1>
          <p className="p-12 pb-5">Please Login to Play</p>
          <Link href="/api/auth/login">
            <button className="bg-blue-700 hover:bg-blue-300 rounded-lg text-white text-2xl font-bold px-4 py-2">
              Login
            </button>
          </Link>
        </div>
      )}
      {error && <p>Error Login in... retry later. </p>}
    </main>
  );
};

export default PokeCardsHomePage;
