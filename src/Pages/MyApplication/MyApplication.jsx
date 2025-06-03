import React, { Suspense } from "react";
import useAuth from "../../Hooks/useAuth";
import Applications from "../../Component/Applications";
import { myApplicationPromise } from "../../api/ApplicationApi";

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
