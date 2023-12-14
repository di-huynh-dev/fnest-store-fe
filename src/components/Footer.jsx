import React from 'react';
import { PiSwapFill } from 'react-icons/pi';
import { BsCashCoin, BsPersonVcard, BsInstagram } from 'react-icons/bs';
import { TbSettingsCheck } from 'react-icons/tb';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { AiOutlineScan, AiFillFacebook } from 'react-icons/ai';
import { SiAboutdotme, SiTiktok } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
const Footer = () => {
    return (
        <footer className="footer footer-center py-10 bg-[#303036] text-primary-content">
            <div className="text-white align-element">
                <img src={Logo} alt="" className="w-1/6" />
                <p>
                    Khám phá sự đẳng cấp và sự sang trọng tận cùng với những tinh hoa nghệ thuật nội thất tại trang web
                    của chúng tôi. Chúng tôi không chỉ cung cấp sản phẩm nội thất, mà còn là nguồn cảm hứng để biến
                    không gian sống của bạn thành kiệt tác
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-3 text-white align-element">
                <div className="h-full p-4 rounded w-full">
                    <h2 className="text-xl font-semibold text-left">Đa dạng thanh toán</h2>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <PiSwapFill className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md ">Chuyển khoản</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <BsCashCoin className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Tiền mặt</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <BsPersonVcard className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">VN Pay</span>
                        </div>
                    </div>
                </div>

                <div className="h-full p-4  rounded w-full">
                    <h2 className="text-xl font-semibold text-left">Thông tin hữu ích</h2>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <TbSettingsCheck className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Chính sách bảo hành</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <PiSwapFill className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Chính sách đổi trả</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <LiaShippingFastSolid className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Chính sách vận chuyển</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <BsCashCoin className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Chính sách thanh toán</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <AiOutlineScan className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Chính sách kiểm hàng</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <SiAboutdotme className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Về chúng tôi</span>
                        </div>
                    </div>
                </div>
                <div className="h-full p-4  rounded w-full">
                    <h2 className="text-xl font-semibold text-left">Mạng xã hội</h2>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <AiFillFacebook className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Facebook</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <SiTiktok className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Tiktok</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-col space-y-2">
                        <div className="flex items-center space-x-3">
                            <BsInstagram className="w-4 h-4 i-semi-sync text-primary" />
                            <span className="text-md">Instagram</span>
                        </div>
                    </div>
                </div>
                <div className="h-full p-4 rounded w-full">
                    <h2 className="text-xl font-semibold text-left">Phản hồi, góp ý, khiếu nại</h2>
                    <p className="text-left py-2">
                        Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất Lượng của chúng tôi sẵn
                        sàng lắng nghe quý khách.
                    </p>
                    <div className="mt-4">
                        <NavLink to="/contact">
                            <button className="btn btn-ghost bg-primary text-white">Gửi phản hồi ngay</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="border-[0.5px] w-full text-white"></div>
            <aside>
                <p className="text-white">Copyright © {new Date().getFullYear()} Nội Thất Fnest</p>
                <p className="text-white">All rights reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;
