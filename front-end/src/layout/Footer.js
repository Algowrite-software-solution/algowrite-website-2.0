import logo from "../assets/brand/logo_white_full 1.png"
function Footer() {
     return (
          <div className="bg-primary  flex flex-col   gap-y-7 p-3">
               <div className="flex md:flex-row gap-y-4 flex-col md:justify-between">
                    <div className="text-white text-center  md:text-start md:order-1">
                         <span>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy.</span>
                    </div>
                    <div className="text-white md:flex md:gap-x-14 sm:gap-x-10 space-y-5 md:space-y-0 md:order-2 md:pe-3">
                         <div className="flex flex-col items-center md:items-end gap-y-2 ">
                              <div className="border-b-2">
                                   <span className="text-3xl">Our Service</span>
                              </div>
                              <div className="flex flex-col items-center md:items-end">
                                   <span>About Us</span>
                                   <span>Help Center</span>
                                   <span>Login</span>
                              </div>

                         </div>
                         <div className="flex flex-col items-center gap-y-2 md:items-end">
                              <div className="border-b-2">
                                   <span className="text-3xl">Follow Us</span>
                              </div>
                              <div className="flex flex-col items-center ">
                                   <span>Facebook</span>
                                   <span>Instagram</span>
                                   <span>Twitter</span>
                              </div>

                         </div>
                    </div>
               </div>
               <div className="flex md:flex-row flex-col gap-y-3 items-center md:items-end md:justify-between md:pe-5" >
                    <div className="order-2 md:order-3 flex-col items-center">
                         <div className="flex items-center flex-col md:items-start">
                              <img src={logo} />
                         </div>
                         <span className="text-white text-center">Copywrite<b>@{new Date().getFullYear()} Algowrite,</b> All rights reserved</span>
                    </div>
                    <div className="text-white space-x-5 md:order-4 md:flex ">
                         <a className="underline" href="#">Terms of Use</a>
                         <a className="underline" href="#">Contact Us</a>
                    </div>
               </div>
          </div>
     );
}

export default Footer;