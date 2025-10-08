import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function KnowMore() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full p-16 pt-0 justify-center items-center text-center">
      <p className="mt-4 text-xl font-bold text-center">
        At Amer Construction Ltd., we build excellence through innovative construction solutions, delivering high-quality results that exceed our clients expectations.
      </p>
      <p className="mt-4 text-lg font-bold text-center">
        With expertise in construction and development, our dedicated team ensures projects are completed on time, within budget, and to the highest standards.
      </p>
      <p className="mt-4 text-lg font-bold text-center">
        From concept to completion, we work closely with our clients to understand their needs and deliver tailored solutions that meet their unique requirements.
      </p>
      <Button
        className="mt-6 px-6 py-3 text-lg bg-red-400 hover:bg-red-500 cursor-pointer"
        onClick={() => router.push("/contact")}
      >
        Get in Touch
      </Button>
    </div>
  );
}
