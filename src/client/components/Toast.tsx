import React from "react";
import { toast } from "react-toastify";
import { GiDungeonGate, GiDragonBreath } from "react-icons/gi";

interface ToastProps {
  icon: any;
  message: string;
}

const ToastFormat = ({ icon, message }: ToastProps) => {
  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-6">{message}</span>
    </div>
  );
};

const success = (message: string) => {
  toast.success(<ToastFormat message={message} icon={<GiDungeonGate className="text-4xl" />} />, {
    position: "top-center",
    icon: false,
    className: "border-1-8 border-green-500",
    bodyClassName: "text-yellow-700",
    progressClassName: "bg-green-600",
    style: { background: "#148f20" },
  });
};

const error = (message: string) => {
  toast.error(<ToastFormat message={message} icon={<GiDragonBreath className="text-4xl" />} />, {
    position: "top-center",
    icon: false,
    className: "border-1-8 border-green-500",
    bodyClassName: "text-red-700",
    progressClassName: "bg-red-600",
    style: { background: "#742a2a" },
  });
};

const Toast = {
  success,
  error,
};
export default Toast;
