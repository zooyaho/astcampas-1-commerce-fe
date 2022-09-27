import { Icon, IconProps } from '@chakra-ui/react';

export const MoonIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);
export const SunIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={5} />
    <line x1={12} y1={1} x2={12} y2={3} />
    <line x1={12} y1={21} x2={12} y2={23} />
    <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
    <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
    <line x1={1} y1={12} x2={3} y2={12} />
    <line x1={21} y1={12} x2={23} y2={12} />
    <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
    <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
  </Icon>
);

export const UserProfileIcon = (props: IconProps) => (
  <Icon
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_0_1)">
      <path
        d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
        fill="#CBCED6"
      />
      <path
        d="M11.957 61.279C12.4572 58.1032 13.6676 55.0811 15.4979 52.4379C17.3281 49.7948 19.7312 47.5986 22.528 46.013C22.7008 45.9198 22.8967 45.8781 23.0925 45.8926C23.2883 45.9071 23.4758 45.9774 23.633 46.095C27.127 48.5361 31.3012 49.8146 35.563 49.749C39.8607 49.8155 44.0684 48.515 47.579 46.035C47.7026 45.9415 47.8466 45.8785 47.9992 45.8512C48.1518 45.8239 48.3086 45.8331 48.457 45.878C48.5598 45.9143 48.6583 45.9616 48.751 46.019C53.551 49.019 58.063 54.164 59.412 60.01C52.891 66.3926 44.1258 69.9614 35.001 69.949C26.5201 69.9621 18.326 66.8791 11.957 61.279H11.957Z"
        fill="white"
      />
      <path
        d="M19.646 30.634C19.6513 26.3873 21.3404 22.316 24.3429 19.3127C27.3454 16.3095 31.4163 14.6194 35.663 14.613C39.91 14.6194 43.9812 16.3093 46.9842 19.3125C49.9872 22.3156 51.677 26.387 51.683 30.634C51.6775 34.8807 49.9877 38.9518 46.9845 41.9543C43.9813 44.9568 39.9097 46.6455 35.663 46.65C31.4166 46.6455 27.3454 44.9567 24.3426 41.9541C21.3398 38.9515 19.6508 34.8804 19.646 30.634V30.634Z"
        fill="white"
      />
    </g>
    <path
      d="M60 70C65.5228 70 70 65.5228 70 60C70 54.4772 65.5228 50 60 50C54.4772 50 50 54.4772 50 60C50 65.5228 54.4772 70 60 70Z"
      fill="#FF710B"
    />
    <path
      d="M59.666 55.166V64.166"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M64.166 59.666H55.166"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* <defs>
      <clipPath id="clip0_0_1">
        <rect width="70" height="70" fill="white" />
      </clipPath>
    </defs> */}
  </Icon>
);
export const CircleCheckIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M6.3894 11.7523L10.7304 15.9652L16.9984 8.61621"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export const CheckLineIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.84302 11.3302L10.532 17.2472L17.465 7.51025"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const HandsClappingIcon = (props: IconProps) => (
  <Icon
    width="216px"
    height="216px"
    viewBox="0 0 216 216"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5136_23661)">
      <path
        d="M43.7062 102.853C42.709 101.125 41.3811 99.6096 39.7983 98.3943C38.2155 97.179 36.4088 96.2873 34.4814 95.7702C32.554 95.2531 30.5437 95.1207 28.5651 95.3805C26.5865 95.6404 24.6785 96.2874 22.95 97.2846C21.2215 98.2818 19.7063 99.6098 18.491 101.193C17.2756 102.775 16.384 104.582 15.8669 106.509C15.3498 108.437 15.2173 110.447 15.4772 112.426C15.737 114.404 16.384 116.312 17.3812 118.041L48.6 172.125C56.7385 185.913 69.9912 195.931 85.4764 200C100.962 204.07 117.427 201.861 131.293 193.856C145.158 185.85 155.303 172.694 159.521 157.248C163.738 141.803 161.688 125.317 153.816 111.375L139.472 86.4846C137.334 83.2608 134.047 80.974 130.281 80.091C126.515 79.208 122.554 79.7952 119.206 81.7329C115.858 83.6705 113.376 86.8126 112.266 90.5179C111.155 94.2233 111.501 98.2127 113.231 101.672"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M90.2813 122.765L58.2188 67.2467C57.2215 65.5182 55.8936 64.003 54.3108 62.7877C52.728 61.5724 50.9214 60.6807 48.994 60.1636C47.0666 59.6465 45.0562 59.5141 43.0776 59.7739C41.099 60.0337 39.191 60.6807 37.4625 61.678C35.734 62.6752 34.2188 64.0031 33.0035 65.5859C31.7882 67.1687 30.8965 68.9754 30.3794 70.9028C29.8623 72.8302 29.7299 74.8405 29.9897 76.8191C30.2495 78.7977 30.8965 80.7057 31.8938 82.4342L63.9563 137.953"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M126.731 125.128L91.2937 63.7033C89.2798 60.2124 85.9615 57.6645 82.069 56.6202C78.1764 55.5758 74.0284 56.1206 70.5375 58.1346C67.0466 60.1485 64.4987 63.4668 63.4544 67.3593C62.41 71.2519 62.9548 75.3999 64.9687 78.8908"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M83.5313 57.1218L74.8406 42.0187C72.8266 38.5278 69.5084 35.9799 65.6158 34.9356C61.7233 33.8912 57.5753 34.436 54.0844 36.45C50.5935 38.464 48.0456 41.7822 47.0012 45.6748C45.9569 49.5673 46.5016 53.7153 48.5156 57.2062L50.5406 60.6656"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M158.625 161.578C168.923 152.253 175.719 139.684 177.883 125.962C180.048 112.239 177.45 98.1885 170.522 86.1467L156.178 61.3405C155.181 59.6119 153.853 58.0968 152.27 56.8814C150.687 55.6661 148.881 54.7744 146.953 54.2573C145.026 53.7402 143.016 53.6078 141.037 53.8676C139.058 54.1275 137.15 54.7745 135.422 55.7717C133.693 56.7689 132.178 58.0969 130.963 59.6797C129.748 61.2624 128.856 63.0691 128.339 64.9965C127.822 66.9239 127.689 68.9343 127.949 70.9129C128.209 72.8914 128.856 74.7994 129.853 76.528"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M131.794 79.903L107.916 38.5593C105.902 35.0683 102.583 32.5205 98.6908 31.4761C94.7983 30.4318 90.6503 30.9765 87.1594 32.9905C83.6685 35.0045 81.1206 38.3228 80.0762 42.2153C79.0319 46.1079 79.5766 50.2558 81.5906 53.7468"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M149.175 9.53418L145.716 22.5279"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M174.741 21.4312L166.978 32.4843"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M194.569 41.2593L183.516 49.0218"
        stroke="#FFE8D7"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5136_23661">
        <rect width="216" height="216" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
export const HeaderCartIcon = (props: IconProps) => (
  <Icon
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.9848 15.9721H5.86467C5.77799 15.9678 5.695 15.9363 5.6278 15.8824C5.5606 15.8284 5.51272 15.7547 5.49113 15.6721L2.64126 6.77214C2.61961 6.70398 2.61268 6.63213 2.62092 6.56118C2.62916 6.49024 2.65238 6.42176 2.6891 6.36014C2.72168 6.30305 2.76887 6.25531 2.82599 6.22164C2.88311 6.18797 2.94819 6.16952 3.0148 6.16814H17.998C18.1111 6.17685 18.2161 6.22894 18.2904 6.31315C18.3647 6.39737 18.4023 6.50693 18.3949 6.61814C18.4023 6.72935 18.3647 6.83891 18.2904 6.92313C18.2161 7.00734 18.1111 7.05944 17.998 7.06814H3.57968L6.14355 15.0681H17.6794L20.4479 4.06814C20.4654 3.97904 20.5132 3.89843 20.5835 3.83956C20.6538 3.78068 20.7423 3.74703 20.8346 3.74414H22.6769C22.7901 3.75259 22.8953 3.80461 22.9696 3.88889C23.0439 3.97316 23.0814 4.08287 23.0738 4.19414C23.0814 4.30541 23.0439 4.41512 22.9696 4.49939C22.8953 4.58367 22.7901 4.63569 22.6769 4.64414H21.1349L18.3634 15.6441C18.3463 15.7325 18.2995 15.8126 18.2304 15.8715C18.1614 15.9305 18.0741 15.9649 17.9827 15.9691"
      fill="#1A1A1A"
    />
    <path
      d="M17.9848 15.9721H5.86467C5.77799 15.9678 5.695 15.9363 5.6278 15.8824C5.5606 15.8284 5.51272 15.7547 5.49113 15.6721L2.64126 6.77214C2.61961 6.70398 2.61268 6.63213 2.62092 6.56118C2.62916 6.49024 2.65238 6.42176 2.6891 6.36014C2.72168 6.30305 2.76887 6.25531 2.82599 6.22164C2.88311 6.18797 2.94819 6.16952 3.0148 6.16814H17.998C18.1111 6.17685 18.2161 6.22894 18.2904 6.31315C18.3647 6.39737 18.4023 6.50693 18.3949 6.61814C18.4023 6.72935 18.3647 6.83891 18.2904 6.92313C18.2161 7.00734 18.1111 7.05944 17.998 7.06814H3.57968L6.14355 15.0681H17.6794L20.4479 4.06814C20.4654 3.97904 20.5132 3.89843 20.5835 3.83956C20.6538 3.78068 20.7423 3.74703 20.8346 3.74414H22.6769C22.7901 3.75259 22.8953 3.80461 22.9696 3.88889C23.0439 3.97316 23.0814 4.08287 23.0738 4.19414C23.0814 4.30541 23.0439 4.41512 22.9696 4.49939C22.8953 4.58367 22.7901 4.63569 22.6769 4.64414H21.1349L18.3634 15.6441C18.3463 15.7325 18.2995 15.8126 18.2304 15.8715C18.1614 15.9305 18.0741 15.9649 17.9827 15.9691"
      stroke="#1A1A1A"
      strokeWidth="0.7"
    />
    <path
      d="M7.43204 21.4819C7.01402 21.4891 6.60329 21.3738 6.25218 21.1508C5.90106 20.9278 5.62545 20.6072 5.46046 20.2297C5.29547 19.8523 5.24857 19.4352 5.32572 19.0314C5.40287 18.6277 5.60059 18.2557 5.89369 17.9628C6.18679 17.6698 6.562 17.4693 6.97153 17.3866C7.38106 17.3039 7.80638 17.3429 8.19329 17.4985C8.58021 17.6541 8.91122 17.9194 9.14415 18.2605C9.37708 18.6016 9.50139 19.0032 9.50126 19.4139C9.50559 19.9576 9.29012 20.4808 8.90215 20.8686C8.51418 21.2563 7.98544 21.4769 7.43204 21.4819ZM7.43204 18.2449C7.19614 18.241 6.96437 18.306 6.76623 18.4319C6.5681 18.5578 6.41256 18.7387 6.31943 18.9517C6.22629 19.1647 6.19977 19.4001 6.24323 19.6279C6.28669 19.8558 6.39818 20.0657 6.56349 20.2311C6.72881 20.3965 6.94048 20.5099 7.17155 20.5567C7.40263 20.6035 7.64266 20.5817 7.86109 20.4941C8.07952 20.4065 8.26647 20.2569 8.39815 20.0646C8.52982 19.8722 8.60026 19.6457 8.60049 19.4139C8.60294 19.1068 8.4813 18.8112 8.26225 18.5921C8.04321 18.3729 7.74465 18.2481 7.43204 18.2449Z"
      fill="#1A1A1A"
      stroke="#1A1A1A"
      strokeWidth="0.7"
    />
    <path
      d="M16.5822 21.4819C16.1642 21.4893 15.7533 21.3742 15.4021 21.1513C15.0508 20.9284 14.7751 20.6078 14.6099 20.2304C14.4448 19.853 14.3977 19.4358 14.4748 19.0321C14.5518 18.6283 14.7494 18.2562 15.0425 17.9631C15.3356 17.6701 15.7108 17.4694 16.1203 17.3867C16.5299 17.3039 16.9552 17.3428 17.3422 17.4984C17.7292 17.654 18.0603 17.9193 18.2932 18.2604C18.5262 18.6015 18.6506 19.0031 18.6504 19.4139C18.6545 19.9574 18.4391 20.4802 18.0514 20.8679C17.6637 21.2556 17.1354 21.4764 16.5822 21.4819ZM16.5822 18.2449C16.3463 18.2407 16.1144 18.3057 15.9162 18.4314C15.7179 18.5571 15.5622 18.738 15.4689 18.951C15.3756 19.1639 15.3489 19.3994 15.3923 19.6273C15.4356 19.8552 15.547 20.0652 15.7123 20.2307C15.8776 20.3962 16.0892 20.5097 16.3203 20.5566C16.5514 20.6035 16.7915 20.5817 17.01 20.4941C17.2285 20.4065 17.4155 20.257 17.5472 20.0647C17.679 19.8723 17.7494 19.6458 17.7497 19.4139C17.7518 19.107 17.6303 18.8118 17.4115 18.5927C17.1927 18.3736 16.8946 18.2486 16.5822 18.2449Z"
      fill="#1A1A1A"
      stroke="#1A1A1A"
      strokeWidth="0.7"
    />
  </Icon>
);
export const LogoutIcon = (props: IconProps) => (
  <Icon
    width="24px"
    height="25px"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5136_23794)">
      <path
        d="M16.3136 8.5625L20.2501 12.5L16.3136 16.4375"
        stroke="#1A1A1A"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 12.5H20.2472"
        stroke="#1A1A1A"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 20.75H4.5C4.30109 20.75 4.11032 20.671 3.96967 20.5303C3.82902 20.3897 3.75 20.1989 3.75 20V5C3.75 4.80109 3.82902 4.61032 3.96967 4.46967C4.11032 4.32902 4.30109 4.25 4.5 4.25H9.75"
        stroke="#1A1A1A"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5136_23794">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </Icon>
);
export const PlusIcon_p = (props: IconProps) => (
  <Icon
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 1V19" stroke="#FF710B" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M19 10L1 10"
      stroke="#FF710B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Icon>
);
export const CheckIcon_P = (props: IconProps) => (
  <Icon
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.84302 11.3302L10.532 17.2472L17.465 7.51025"
      stroke="#FF710B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export const VerticalLineIcon = (props: IconProps) => (
  <Icon
    width="2px"
    height="489"
    viewBox="0 0 2 489"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 0L0.999979 489" stroke="#CBCED6" strokeWidth="2" />
  </Icon>
);
export const CurveIcon = (props: IconProps) => (
  <Icon
    width="375px"
    height="39px"
    viewBox="0 0 375 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M376 4.17195C322.562 25.5821 163.296 69.7897 -1.00001 1"
      stroke="#FF710B"
      strokeWidth="2"
    />
  </Icon>
);
export const InstagramIcon = (props: IconProps) => (
  <Icon
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.922 4.79044C14.3 4.79044 14.582 4.79943 15.522 4.84243C16.0869 4.84923 16.6463 4.95307 17.176 5.14943C17.56 5.29763 17.9088 5.52456 18.1998 5.81562C18.4909 6.10668 18.7178 6.45542 18.866 6.83943C19.0624 7.36909 19.1662 7.92858 19.173 8.49343C19.216 9.43243 19.225 9.71443 19.225 12.0934C19.225 14.4724 19.216 14.7534 19.173 15.6934C19.1662 16.2583 19.0624 16.8178 18.866 17.3474C18.7178 17.7314 18.4909 18.0802 18.1998 18.3712C17.9088 18.6623 17.56 18.8892 17.176 19.0374C16.6463 19.2338 16.0869 19.3376 15.522 19.3444C14.583 19.3874 14.301 19.3964 11.922 19.3964C9.54301 19.3964 9.26201 19.3874 8.32201 19.3444C7.75715 19.3376 7.19768 19.2338 6.66801 19.0374C6.284 18.8892 5.93525 18.6623 5.6442 18.3712C5.35314 18.0802 5.12622 17.7314 4.97801 17.3474C4.78166 16.8178 4.6778 16.2583 4.67101 15.6934C4.62801 14.7544 4.619 14.4724 4.619 12.0934C4.619 9.71443 4.62801 9.43343 4.67101 8.49343C4.67778 7.92858 4.78164 7.36909 4.97801 6.83943C5.12622 6.45542 5.35314 6.10668 5.6442 5.81562C5.93525 5.52456 6.284 5.29763 6.66801 5.14943C7.19768 4.95307 7.75715 4.84923 8.32201 4.84243C9.26101 4.79943 9.54301 4.79044 11.922 4.79044ZM11.922 3.19043C9.50301 3.19043 9.2 3.20043 8.25 3.24443C7.51111 3.25925 6.7801 3.39923 6.08801 3.65843C5.49634 3.8873 4.95898 4.23723 4.51039 4.68582C4.0618 5.13441 3.71187 5.67176 3.483 6.26344C3.2238 6.95552 3.08382 7.68654 3.069 8.42543C3.026 9.37543 3.01501 9.67844 3.01501 12.0974C3.01501 14.5164 3.025 14.8194 3.069 15.7694C3.08382 16.5083 3.2238 17.2393 3.483 17.9314C3.71187 18.5231 4.0618 19.0605 4.51039 19.509C4.95898 19.9576 5.49634 20.3076 6.08801 20.5364C6.7801 20.7956 7.51111 20.9356 8.25 20.9504C9.2 20.9934 9.50301 21.0044 11.922 21.0044C14.341 21.0044 14.644 20.9944 15.594 20.9504C16.3329 20.9356 17.0639 20.7956 17.756 20.5364C18.3477 20.3076 18.885 19.9576 19.3336 19.509C19.7822 19.0605 20.1321 18.5231 20.361 17.9314C20.6202 17.2393 20.7602 16.5083 20.775 15.7694C20.818 14.8194 20.829 14.5164 20.829 12.0974C20.829 9.67844 20.819 9.37543 20.775 8.42543C20.7602 7.68654 20.6202 6.95552 20.361 6.26344C20.1321 5.67176 19.7822 5.13441 19.3336 4.68582C18.885 4.23723 18.3477 3.8873 17.756 3.65843C17.0639 3.39923 16.3329 3.25925 15.594 3.24443C14.644 3.20143 14.341 3.19043 11.922 3.19043Z"
      fill="white"
    />
    <path
      d="M11.922 7.51855C11.0174 7.51855 10.133 7.78682 9.38086 8.28941C8.62867 8.79201 8.04239 9.50636 7.6962 10.3421C7.35 11.1779 7.25942 12.0976 7.43591 12.9849C7.6124 13.8722 8.04803 14.6872 8.68771 15.3269C9.3274 15.9665 10.1424 16.4022 11.0297 16.5787C11.917 16.7551 12.8366 16.6646 13.6724 16.3184C14.5082 15.9722 15.2226 15.3859 15.7252 14.6337C16.2278 13.8815 16.496 12.9972 16.496 12.0925C16.496 10.8794 16.0141 9.71604 15.1563 8.85825C14.2986 8.00045 13.1351 7.51855 11.922 7.51855ZM11.922 15.0616C11.3348 15.0616 10.7608 14.8874 10.2726 14.5612C9.7843 14.235 9.40376 13.7712 9.17905 13.2287C8.95433 12.6862 8.89551 12.0893 9.01007 11.5133C9.12463 10.9374 9.40741 10.4084 9.82263 9.99315C10.2379 9.57793 10.7669 9.29516 11.3428 9.1806C11.9187 9.06604 12.5157 9.12483 13.0582 9.34955C13.6007 9.57427 14.0644 9.9548 14.3907 10.4431C14.7169 10.9313 14.891 11.5053 14.891 12.0925C14.891 12.88 14.5782 13.6351 14.0214 14.1919C13.4646 14.7487 12.7095 15.0616 11.922 15.0616Z"
      fill="white"
    />
    <path
      d="M16.677 8.40753C17.2674 8.40753 17.746 7.92892 17.746 7.33853C17.746 6.74814 17.2674 6.26953 16.677 6.26953C16.0866 6.26953 15.608 6.74814 15.608 7.33853C15.608 7.92892 16.0866 8.40753 16.677 8.40753Z"
      fill="white"
    />
  </Icon>
);
export const RatingStarIcon = (props: IconProps) => (
  <Icon
    width="8px"
    height="8px"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.11399 6.65601L6.04418 7.71998C6.08536 7.74267 6.13177 7.75283 6.17818 7.74932C6.22458 7.74581 6.26912 7.72875 6.30677 7.7001C6.34441 7.67144 6.37365 7.63233 6.39119 7.58717C6.40873 7.54201 6.41386 7.4926 6.40601 7.44454L6.03929 5.1917C6.03244 5.14997 6.03537 5.10712 6.04783 5.06683C6.06028 5.02655 6.08189 4.99005 6.1108 4.96046L7.67243 3.36483C7.70648 3.3309 7.7307 3.28759 7.74229 3.23986C7.75388 3.19214 7.75237 3.14196 7.73794 3.0951C7.7235 3.04824 7.69673 3.0066 7.6607 2.975C7.62467 2.94339 7.58085 2.92309 7.53429 2.91644L5.37613 2.58783C5.33615 2.58173 5.29818 2.56555 5.2655 2.54066C5.23281 2.51578 5.20639 2.48295 5.18849 2.44499L4.2234 0.395214C4.20276 0.351609 4.17091 0.314908 4.13144 0.289253C4.09197 0.263597 4.04645 0.25 4 0.25C3.95356 0.25 3.90803 0.263597 3.86856 0.289253C3.82909 0.314908 3.79724 0.351609 3.7766 0.395214L2.81151 2.44499C2.79362 2.48295 2.76719 2.51578 2.7345 2.54066C2.70182 2.56555 2.66385 2.58173 2.62387 2.58783L0.465707 2.91644C0.41915 2.92309 0.375331 2.94339 0.339302 2.975C0.303272 3.0066 0.276498 3.04824 0.262062 3.0951C0.247625 3.14196 0.246116 3.19214 0.257706 3.23986C0.269297 3.28759 0.293516 3.3309 0.327574 3.36483L1.8892 4.96046C1.91811 4.99005 1.93972 5.02655 1.95217 5.06683C1.96463 5.10712 1.96756 5.14997 1.96071 5.1917L1.59399 7.44454C1.58614 7.4926 1.59127 7.54201 1.60881 7.58717C1.62635 7.63233 1.65559 7.67144 1.69323 7.7001C1.73088 7.72875 1.77542 7.74581 1.82182 7.74932C1.86823 7.75283 1.91464 7.74267 1.95583 7.71998L3.88601 6.65601C3.92128 6.63701 3.96035 6.62711 4 6.62711C4.03965 6.62711 4.07873 6.63701 4.11399 6.65601Z"
      fill="#FF710B"
    />
  </Icon>
);
export const ChatbotIcon = (props: IconProps) => (
  <Icon
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_5136_23306)">
      <path
        d="M35 60C48.8071 60 60 48.8071 60 35C60 21.1929 48.8071 10 35 10C21.1929 10 10 21.1929 10 35C10 48.8071 21.1929 60 35 60Z"
        fill="url(#paint0_linear_5136_23306)"
      />
      <path
        d="M35 59.5C48.531 59.5 59.5 48.531 59.5 35C59.5 21.469 48.531 10.5 35 10.5C21.469 10.5 10.5 21.469 10.5 35C10.5 48.531 21.469 59.5 35 59.5Z"
        stroke="#FF710B"
      />
    </g>
    <path
      d="M33.9 49.1999C33.2986 49.1997 32.7 49.1194 32.12 48.9609C29.6007 48.1929 27.3279 46.7754 25.53 44.8509C23.0691 42.5366 21.4658 39.4562 20.982 36.1129C20.8617 35.0426 21.0193 33.9593 21.4397 32.9677C21.8601 31.9761 22.5291 31.1096 23.382 30.4519L23.539 30.3289C23.8893 30.0705 24.3198 29.9443 24.7543 29.9727C25.1887 30.001 25.5991 30.1821 25.913 30.4839L27.647 32.2279C27.9824 32.5686 28.1717 33.0266 28.1747 33.5047C28.1777 33.9827 27.9941 34.4431 27.663 34.7879L26.849 35.8519C26.6493 36.1153 26.5224 36.4265 26.481 36.7543C26.4396 37.0822 26.4851 37.4152 26.613 37.7199C27.419 39.6299 29.213 42.9319 32.164 43.5949C32.434 43.6532 32.7136 43.6512 32.9827 43.589C33.2519 43.5268 33.5039 43.4059 33.721 43.2349L35.036 42.2159C35.3775 41.8821 35.8371 41.6966 36.3147 41.7C36.7922 41.7034 37.2492 41.8953 37.586 42.2339L39.319 43.9779C39.6211 44.2975 39.8007 44.7136 39.8259 45.1527C39.8512 45.5918 39.7205 46.0258 39.457 46.3779L39.347 46.5199C38.7018 47.3505 37.8761 48.0235 36.9324 48.4878C35.9887 48.9521 34.9517 49.1956 33.9 49.1999Z"
      fill="white"
    />
    <path
      d="M31.419 39.357C31.3709 39.357 31.3232 39.3475 31.2787 39.329C31.2342 39.3106 31.1939 39.2835 31.1599 39.2494C31.1259 39.2154 31.0989 39.1749 31.0806 39.1304C31.0623 39.0858 31.0529 39.0381 31.053 38.99V33.353C30.4682 32.7392 30.0102 32.0161 29.7052 31.225C29.4003 30.434 29.2544 29.5905 29.276 28.743C29.2771 26.9564 29.9867 25.2431 31.2493 23.979C32.5119 22.7149 34.2244 22.0032 36.011 22H41.441C43.2354 22.0206 44.9483 22.7519 46.2043 24.0335C47.4603 25.3152 48.1567 27.0426 48.141 28.837C48.1567 30.6314 47.4603 32.3588 46.2043 33.6405C44.9483 34.9221 43.2354 35.6534 41.441 35.674H36.141L31.65 39.274C31.5849 39.3266 31.5037 39.3552 31.42 39.355"
      fill="white"
    />
    <path
      d="M37 28C37 27.4477 36.5523 27 36 27C35.4477 27 35 27.4477 35 28V30C35 30.5523 35.4477 31 36 31C36.5523 31 37 30.5523 37 30V28Z"
      fill="#FF710B"
    />
    <path
      d="M42 28C42 27.4477 41.5523 27 41 27C40.4477 27 40 27.4477 40 28V30C40 30.5523 40.4477 31 41 31C41.5523 31 42 30.5523 42 30V28Z"
      fill="#FF710B"
    />
    <defs>
      <filter
        id="filter0_d_5136_23306"
        x="0"
        y="0"
        width="70"
        height="70"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5136_23306"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5136_23306"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_5136_23306"
        x1="10"
        y1="35"
        x2="60"
        y2="35"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE8D7" />
        <stop offset="1" stopColor="#FF710B" />
      </linearGradient>
    </defs>
  </Icon>
);
export const UpwardArrowIcon = (props: IconProps) => (
  <Icon
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25Z"
      stroke="#1A1A1A"
    />
    <path
      d="M25 49.5C38.531 49.5 49.5 38.531 49.5 25C49.5 11.469 38.531 0.5 25 0.5C11.469 0.5 0.5 11.469 0.5 25C0.5 38.531 11.469 49.5 25 49.5Z"
      stroke="#1A1A1A"
    />
    <path
      d="M25.539 20.949V32.5H24.461V20.948V19.7407L23.6074 20.5945L18.455 25.7479L17.7071 25L25 17.7071L32.2929 25L31.545 25.7479L26.3926 20.5954L25.539 19.7419V20.949Z"
      fill="#1A1A1A"
      stroke="#1A1A1A"
    />
  </Icon>
);
