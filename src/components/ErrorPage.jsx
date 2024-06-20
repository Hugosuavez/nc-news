

export const ErrorPage = ({error}) => {
    
return <p>{error.response.data.msg}</p>
}