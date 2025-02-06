const Header = () => {
    return (
        <header className="flex justify-center items-center gap-[11px] bg-white w-full h-[80px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),_0px_1px_2px_0px_rgba(0,0,0,0.06)] ">
            <img src='images/chef-claude-icon.png' alt="logo" className="w-10" />
            <h1 className="text-xl font-normal">Chef Claude</h1>
        </header>
    );
}

export default Header;