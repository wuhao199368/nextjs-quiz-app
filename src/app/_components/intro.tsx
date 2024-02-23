import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h3 className="text-3xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        LoRA：Partially Fine-Tune
      </h3>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Fine-tune Tutorial
      </h4> */}
    </section>
  );
}
