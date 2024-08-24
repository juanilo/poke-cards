import Link from "next/link";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import Guy from "@/svgs/guy.svg";

interface TopProps {
  user?: UserProfile;
  isLoading?: boolean;
}

const Top = ({ user, isLoading }: TopProps) => {
  return (
    <div className="w-full h-11 flex items-center">
      {isLoading ? (
        <div>Loading user info...</div>
      ) : (
        user && (
          <div className="flex items-center justify-between w-full flex-row">
            <div className="font-bold flex items-center cursor-default">
              <Guy /> {user.name}
            </div>
            <div>
              <Link href="/api/auth/logout">
                <button className="bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold p-2 mt-4">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Top;