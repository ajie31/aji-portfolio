export const UpArrowIcon = ({ fill, position }) => (
  <>
    <path
      fill={fill}
      stroke={fill}
      d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
    />
    <path
      fill={fill}
      stroke={fill}
      d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    />
  </>
);

export const DnArrowIcon = ({ fill }) => (
  <>
    <path
      fill={fill}
      stroke={fill}
      d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
    <path
      fill={fill}
      stroke={fill}
      d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </>
);

export const DashIcon = ({ fill, position }) => (
  <path
    fill={fill}
    strokeWidth="1.4"
    stroke={fill}
    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
  />
);
