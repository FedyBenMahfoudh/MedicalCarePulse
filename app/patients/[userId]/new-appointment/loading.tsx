import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="animate-spin" size={32} />
    </div>
  );
};

export default loading;
