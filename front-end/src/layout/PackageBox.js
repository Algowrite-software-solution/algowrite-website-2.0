import Packages from "../components/Package";

function PackageBox() {
    return (
        <div>
            <div className="bg-primary min-h-[510px] md:pt-3 pb-7">
                <h3 className="text-center text-[36px] text-white font-[900] leading-10">Packages</h3>
                <p className="text-center text-white font-[700]">Tag line of services</p>

                <div className="flex flex-wrap items-center justify-center gap-10 mt-8 md:justify-center">
                    <Packages/>
                    <Packages/>
                    <Packages/>
                    <Packages/>
                </div>
            </div>
        </div>
    )
}

export default PackageBox;