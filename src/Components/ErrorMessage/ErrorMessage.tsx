
interface Props{
  message: string | undefined;
}

export const ErrorMessage: React.FC<Props> = (props) => {
  
  const { message } = props;
  return (
    <div className="w-full h-full flex items-center justify-center bg-red-500 rounded-xl">{message}</div>
  );
};