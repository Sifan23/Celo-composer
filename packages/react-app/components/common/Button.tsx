type Props = {
  text: string;
  onClick: () => void;
  loading: boolean;
};

function Button({ text, onClick, loading }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-4 text-gray-900 bg-gradient-to-r from-teal-200 to-line-200"
    >
      {loading === true ? "Loading..." : text}
    </button>
  );
}

export default Button;
