import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import Applications from "../../Component/Applications";

const myApplicationPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`).then(
    (res) => res.json()
  );
};

const MyApplication = () => {
  const { user } = useAuth();

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Applications
          myApplicationPromise={myApplicationPromise(
            user?.email
          )}></Applications>
      </Suspense>
    </div>
  );
};

export default MyApplication;
