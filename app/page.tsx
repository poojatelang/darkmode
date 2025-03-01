import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-gray-900 dark:text-white">
        <h1 className="text-3xl">Welcome to Next.js!</h1>
      </div>
    </>
  );
}
