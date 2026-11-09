import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const Testimonials = () => {
  const data = [
    {
      quote: `Nagi is so great with his work, our production was shut down within the first day itself. Highly recommended.`,
      name: "Elon musk",
      avatar: "/testimonials/elon.webp",
    },
    {
      quote: `We handed Nagi a messy dashboard on Monday. By Wednesday the team had stopped arguing about it and started shipping.`,
      name: "Priya Shah",
      avatar: "/testimonials/priya.webp",
    },
    {
      quote: `He treats motion like part of the interface, not a coat of paint. The product finally feels finished.`,
      name: "Jonah Hale",
      avatar: "/testimonials/jonah.webp",
    },
    {
      quote: `Clear writing, careful UI, and no drama. I would hire him again for the next launch.`,
      name: "Mina Okonkwo",
      avatar: "/testimonials/mina.webp",
    },
  ];
  return (
    <div className="py-10">
      <SectionHeading className="pb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="flex flex-col mx-4 gap-4 hover:shadow-md transition duration-300 w-full h-50 justify-between rounded-xl max-w-60 shadow-input p-4">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
