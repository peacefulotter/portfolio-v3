import { FC } from "react";
import { workSans } from "~/fonts";

interface IWrapper { 
    id: string;
    children?: React.ReactNode;
}

const Wrapper: FC<IWrapper> = ( { children, id } ) => {
    return (
        <div className={`flex flex-col justify-center items-center w-full min-h-[100vh] ${workSans.variable} font-WorkSans`} id={id}>
            { children }
        </div>
    )
}

export default Wrapper;