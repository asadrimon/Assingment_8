import logo from "../../../public/knowledge.png";

const Header = () => {

    return (

        <div className="container mx-auto">
            <div className="flex justify-between items-center h-20 px-5">
                <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
                <img
                    alt=""
                    className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-[#6047EC]"
                    src="https://source.unsplash.com/40x40/?portraithttps://images.unsplash.com/profile-1590995584854-8f3fd95d401cimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff?1"
                />
            </div>
            <hr />
        </div>
    );
};

export default Header;
