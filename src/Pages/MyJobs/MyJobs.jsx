import React, { Suspense } from "react";
import PostedJobList from "../../Component/PostedJobList";
import { myPostJobsPromise } from "../../api/JobApi";
import useAuth from "../../Hooks/useAuth";

const MyJobs = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <PostedJobList
          myPostJobsPromise={myPostJobsPromise(user.email)}></PostedJobList>
      </Suspense>
    </div>
  );
};

export default MyJobs;
