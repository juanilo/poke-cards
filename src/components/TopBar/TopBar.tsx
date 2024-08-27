import Link from "next/link";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface TopProps {
  user?: UserProfile;
  isLoading?: boolean;
}

const Top = ({ user, isLoading }: TopProps) => {
  const unauthorize = () => {
    sessionStorage.removeItem("token");
  };
  return (
    <div className="w-full h-11 flex items-center">
      {isLoading ? (
        <div>Loading user info...</div>
      ) : (
        user && (
          <div className="flex items-center justify-between w-full flex-row mt-6">
            <div className="font-bold flex items-center cursor-default">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="60px"
                height="60px"
                src={user.picture!}
                alt={user.nickname!}
                className="rounded-full border-4 border-red-900 mr-4"
              />
              {user.name}
            </div>
            <div>
              <Link href="/api/auth/logout">
                <button
                  className="bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold p-2 mt-4"
                  onClick={unauthorize}
                >
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
