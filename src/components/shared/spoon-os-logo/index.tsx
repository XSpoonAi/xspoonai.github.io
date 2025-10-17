import type { FC, ComponentProps } from 'react';

export const SpoonOSLogo: FC<ComponentProps<'svg'>> = ({ ...props }) => {
  return (
    <svg
      width="244"
      height="88"
      viewBox="0 0 244 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M83.5387 87.9287C37.8155 87.9287 0.629272 50.6377 0.629272 4.7854H17.6813C17.6813 41.187 47.2173 70.8064 83.5166 70.8064C119.816 70.8064 149.352 41.187 149.352 4.7854H166.404C166.404 50.6377 129.218 87.9287 83.4944 87.9287H83.5387Z"
        fill="#A8EFFF"
      />
      <path
        d="M243.371 4.80786V21.9302H173.411C174.564 16.4377 175.163 10.7451 175.163 4.91904"
        fill="#A8EFFF"
      />
      <path d="M70.4783 0.0712891H53.4263V24.3094H70.4783V0.0712891Z" fill="#A8EFFF" />
      <path d="M99.8589 0.0712891H82.8069V24.3094H99.8589V0.0712891Z" fill="#A8EFFF" />
    </svg>
  );
};
