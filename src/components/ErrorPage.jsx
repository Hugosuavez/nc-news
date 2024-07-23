export const ErrorPage = ({ error }) => {
  return <p className="error-message">{error.response.data.msg}</p>;
};
