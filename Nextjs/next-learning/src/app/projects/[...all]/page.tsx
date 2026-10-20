import React, { Suspense } from "react";
type AllRouteDetails = {
  params: Promise<{ all: string[] }>;
};

const AllRoutePage = async ({ params }: AllRouteDetails) => {
  const { all } = await params;
  return (
    <div>
      <h2>All routes</h2>
      {all.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
};

const AllRoute = ({ params }: AllRouteDetails) => {
  return (
    <Suspense fallback={<p>Loading data...</p>}>
      <AllRoutePage params={params} />
    </Suspense>
  );
};
export default AllRoute;
