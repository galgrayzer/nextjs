import IsAuthComponenet from "@/utils/IsAuth";

export const metadata = {
  title: "Account",
};

export default function Account() {
  return (
    <>
      <IsAuthComponenet not={true} />
      <h1 className="absolute top-1/2 left-1/2 text-6xl font-bold -translate-x-1/2 -translate-y-1/2 text-slate-300">
        Account
      </h1>
    </>
  );
}
