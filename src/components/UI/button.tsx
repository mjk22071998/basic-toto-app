import { clsx } from "clsx"
import { ReactNode } from "react"

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick: () => void;
  actionButton: boolean;
}

const Button = ({type, text, onClick, actionButton}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        actionButton && 'bg-orange-700 rounded-full p-2 text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors flex items-center justify-center',
        'bg-orange-700 text-white px-4 py-2 rounded-r-md hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors flex items-center justify-center'
      )}
    >{text}</button>
  )
}

export default Button