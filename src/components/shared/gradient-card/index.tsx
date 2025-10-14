import type { FC, ComponentProps, SVGProps } from 'react';

export const GradientCard: FC<
  ComponentProps<'div'> & {
    Icon: FC<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
  }
> = ({ Icon, title, description, ...props }) => {
  return (
    <div
      {...props}
      className="relative flex h-[326px] flex-1 flex-col overflow-hidden rounded-[10px] pl-[30px] pr-[35px] pt-[30px]"
      style={{
        background: `linear-gradient(180deg, rgba(70,70,70,0.5) 0%, rgba(70,70,70,0.498343) 8.07%, rgba(70,70,70,0.493465) 15.54%, rgba(70,70,70,0.485504) 22.5%, rgba(70,70,70,0.474599) 29.04%, rgba(70,70,70,0.460889) 35.26%, rgba(70,70,70,0.444512) 41.25%, rgba(70,70,70,0.425607) 47.1%, rgba(70,70,70,0.404313) 52.9%, rgba(70,70,70,0.380768) 58.75%, rgba(70,70,70,0.355111) 64.74%, rgba(70,70,70,0.327481) 70.96%, rgba(70,70,70,0.298016) 77.5%, rgba(70,70,70,0.266855) 84.46%, rgba(70,70,70,0.234137) 91.93%, rgba(70,70,70,0.2) 100%)`,
        backdropFilter: 'blur(14.7px)',
        boxShadow: '0px 7px 20px 0px #58FF9833 inset, 0px 0px 10px 0px #00000040 inset',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[10px]"
        style={{
          padding: '1px',
          background: 'linear-gradient(180deg, #58FF98 0%, #15562E 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 1,
        }}
      ></div>

      <Icon className="relative z-10 h-12 w-12" />
      <h3 className="relative z-10 mb-[22px] mt-[10px] whitespace-pre-line text-3xl font-bold text-[#D9D9D9]">
        {title}
      </h3>
      <p className="relative z-10 font-medium text-[#D9D9D9]">{description}</p>
    </div>
  );
};
