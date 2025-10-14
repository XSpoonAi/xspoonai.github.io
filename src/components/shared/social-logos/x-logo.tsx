import type { FC, ComponentProps } from 'react';

export const XLogo: FC<ComponentProps<'svg'>> = ({ ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.64592 6.77503L15.4885 0.00012207H14.104L9.03089 5.88268L4.97902 0.00012207H0.305664L6.43289 8.89559L0.305664 16.0001H1.69024L7.04757 9.78794L11.3266 16.0001H16L9.64559 6.77503H9.64592ZM7.74955 8.97396L7.12874 8.08817L2.18913 1.03987H4.31576L8.30208 6.72808L8.9229 7.61386L14.1046 15.0077H11.978L7.74955 8.9743V8.97396Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};
