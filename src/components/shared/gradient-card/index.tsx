import type { FC, ComponentProps, SVGProps } from "react";

export const GradientCard: FC<
  ComponentProps<"div"> & {
    Icon: FC<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
  }
> = ({ Icon, title, description, ...props }) => {
  return (
    <div
      {...props}
      className="h-[326px] rounded-[10px] flex-1 flex flex-col pt-[30px] pl-[30px] pr-[35px]"
      style={{
        background: `linear-gradient(180deg, rgba(70,70,70,0.5) 0%, rgba(70,70,70,0.498343) 8.07%, rgba(70,70,70,0.493465) 15.54%, rgba(70,70,70,0.485504) 22.5%, rgba(70,70,70,0.474599) 29.04%, rgba(70,70,70,0.460889) 35.26%, rgba(70,70,70,0.444512) 41.25%, rgba(70,70,70,0.425607) 47.1%, rgba(70,70,70,0.404313) 52.9%, rgba(70,70,70,0.380768) 58.75%, rgba(70,70,70,0.355111) 64.74%, rgba(70,70,70,0.327481) 70.96%, rgba(70,70,70,0.298016) 77.5%, rgba(70,70,70,0.266855) 84.46%, rgba(70,70,70,0.234137) 91.93%, rgba(70,70,70,0.2) 100%)`,
      }}
    >
      <Icon />
      {/* TODO: font family */}
      <h3 className="whitespace-pre-line text-[#D9D9D9] font-bold text-3xl mb-[22px] mt-[10px]">
        {title}
      </h3>
      <p className="text-[#D9D9D9] font-medium">{description}</p>
    </div>
  );
};
