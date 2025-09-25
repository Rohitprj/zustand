import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center align-center">
      <Link href={"./login"}>
        <button className="cursor-pointer">Go to login</button>
      </Link>
    </div>
  );
};

export default page;
