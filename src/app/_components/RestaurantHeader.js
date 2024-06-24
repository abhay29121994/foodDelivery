"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    let data = localStorage.getItem("restaurant");
    if (!data && pathname == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathname == "/restaurant") {
      router.push("restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("restaurant");
    router.push("/restaurant");
  };
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img style={{ width: 70 }} src="/logo.png" />
        <span>
          <b>Food Delivery</b>
        </span>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        {details && details.name ? (
          <>
            <li>
              <Link href="/">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/">login/Signup</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
