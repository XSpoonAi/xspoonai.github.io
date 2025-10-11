import type { FC, ComponentProps } from "react";

export const Card3Cube: FC<ComponentProps<"svg">> = ({ ...props }) => {
  return (
    <svg
      width="47"
      height="46"
      viewBox="0 0 47 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.3511 19.9362V0.291016H17.9213L12.3525 6.0656V19.9458H6.42358L0.851562 25.7204V45.761H20.3649L23.8502 41.9767V45.7514H43.3635L46.8521 41.9638V19.9362H35.3511ZM19.0466 44.5039H2.10872V26.1159H19.0466V44.5039ZM13.6064 24.8491V6.46107H30.5444V24.8491H13.6064ZM42.0453 44.4942H25.1074V26.1062H42.0453V44.4942Z"
        fill="#58FF98"
      />
    </svg>
  );
};
