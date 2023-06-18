// import image from "../assets/PackageImages/Rectangle_23.png";

function Packages({image,package_name,content}) {
    return (
        <div>
            <div className="rounded-[30px] shadow-2xl shadow-blue-950 w-60 min-h-[360px] bg-secondary group">
                <div className="group-hover:hidden ">
                    <img src={image} />
                    <div className="pt-3 mx-2 max-h-[4px]">
                        <h1 className="text-center text-white font-[800] text-[22px] tracking-[1.6px]">{package_name}</h1>
                        <span className="text-white font-[500] text-[13px]">{content}</span><br />
                        <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                        <span className="text-white font-[500] text-[13px]">Package Name Packge</span>
                    </div>
                </div>
                <div className="pt-3 mx-2 max-h-[4px] hidden group-hover:block">
                    <h1 className="text-center text-white font-[800] text-[22px] tracking-[1.6px]">Package Name</h1>
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                    <span className="text-white font-[500] text-[13px]">Package Name Packge</span><br />
                </div>
            </div>

        </div>
    )
}

export default Packages;

