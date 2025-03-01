import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen text-gray-900 dark:text-white">
        <h1 className="text-3xl">This is the About Page</h1>
      </div>
    </>
  );
}
