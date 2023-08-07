import './AppSection.css';
import {Button} from "@mui/material";

function AppSection() {
    return (
        <div className="app-section">

            <div className="search-app">
                <div className="search-input-app">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path d="M20.7784 22.6401L13.4602 15.3115C12.8068 15.835 12.0554 16.2494 11.206 16.5548C10.3565 16.8601 9.45265 17.0128 8.49432 17.0128C6.12027 17.0128 4.11125 16.1892 2.46727 14.542C0.823295 12.8948 0.000871212 10.883 0 8.5064C0 6.12897 0.822424 4.1171 2.46727 2.47078C4.11212 0.824467 6.12114 0.000872451 8.49432 0C10.8684 0 12.8774 0.823594 14.5214 2.47078C16.1653 4.11797 16.9878 6.12984 16.9886 8.5064C16.9886 9.4661 16.8362 10.3713 16.5312 11.2219C16.2263 12.0725 15.8125 12.825 15.2898 13.4794L22.6406 20.8407C22.8802 21.0806 23 21.3751 23 21.724C23 22.073 22.8693 22.3784 22.608 22.6401C22.3684 22.88 22.0634 23 21.6932 23C21.3229 23 21.018 22.88 20.7784 22.6401ZM8.49432 14.3954C10.1278 14.3954 11.5166 13.8227 12.6605 12.6772C13.8044 11.5316 14.3759 10.1414 14.375 8.5064C14.375 6.87055 13.803 5.47987 12.6591 4.33434C11.5152 3.18881 10.127 2.61648 8.49432 2.61735C6.8608 2.61735 5.47208 3.19012 4.32818 4.33565C3.18428 5.48118 2.61277 6.87143 2.61364 8.5064C2.61364 10.1422 3.18559 11.5329 4.32949 12.6785C5.47339 13.824 6.86167 14.3963 8.49432 14.3954Z" fill="#1A1A2E"/>
                    </svg>
                    <input placeholder="Search in the Nexus" className="input-box"/>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <Button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.25 26.9167C21.2503 27.6315 20.9803 28.32 20.4942 28.8441C20.0082 29.3683 19.342 29.6893 18.6292 29.7429L18.4167 29.75H15.5834C14.8685 29.7502 14.1801 29.4803 13.6559 28.9942C13.1318 28.5082 12.8107 27.842 12.7571 27.1292L12.75 26.9167H21.25ZM17 2.83334C19.5713 2.8333 22.042 3.83194 23.891 5.61862C25.7401 7.40529 26.8229 9.8403 26.911 12.41L26.9167 12.75V18.0823L29.4979 23.2447C29.6105 23.4699 29.6669 23.7191 29.6622 23.9709C29.6574 24.2227 29.5918 24.4696 29.4707 24.6905C29.3497 24.9114 29.177 25.0996 28.9673 25.2391C28.7576 25.3786 28.5173 25.4652 28.2668 25.4915L28.1039 25.5H5.8962C5.64426 25.5001 5.39607 25.4391 5.17288 25.3222C4.94969 25.2053 4.75816 25.0361 4.6147 24.829C4.47125 24.6219 4.38015 24.3831 4.3492 24.1331C4.31826 23.8831 4.34839 23.6293 4.43703 23.3934L4.5022 23.2447L7.08336 18.0823V12.75C7.08336 10.1199 8.12815 7.5976 9.98789 5.73787C11.8476 3.87813 14.37 2.83334 17 2.83334ZM17 5.66668C15.1747 5.66678 13.4199 6.37153 12.1015 7.63394C10.7831 8.89636 10.003 10.619 9.92378 12.4426L9.9167 12.75V18.0823C9.91671 18.4337 9.85138 18.782 9.72403 19.1094L9.61778 19.3503L7.96028 22.6667H26.0412L24.3837 19.3488C24.2265 19.0347 24.129 18.6942 24.0961 18.3444L24.0834 18.0823V12.75C24.0834 10.8714 23.3371 9.06972 22.0087 7.74134C20.6803 6.41295 18.8786 5.66668 17 5.66668Z" fill="#1A1A2E"/>
                    </svg>
                </Button>
                <div className="user-logo">
                </div>
            </div>
            <div className="app-1">
                <div className="star-bg">
                    <div className="app-1-content">
                        <p className="app-1-content-text">Take Our <span>E-Commerce</span> Readiness Assessment</p>
                        <p className="app-1-content-sub-text">Our E-commerce readiness assessment evaluates a business's ability to establish an online presence, identify areas for improvement and develop a plan for success.</p>
                        <div className="app-1-button"><span className="app-1-button-text">Start Now</span></div>
                    </div>
                    <div className="app-1-image"></div>
                </div>
            </div>
            <div className="sub-apps">
                <div className="app-2">
                    <p className="app-title">Check Your
                        Journal</p>
                    <div className="sub-app-content">
                        <p className="app-sub-title">Our Nexus User Journal page helps online sellers track their business activities, course progression and business state.</p>
                        <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g filter="url(#filter0_d_90_570)">
                                <circle cx="30" cy="30" r="20" fill="#F8F8F8"/>
                            </g>
                            <path d="M35.3667 26.9667L25.0125 37.35C24.7792 37.5833 24.5019 37.7 24.1807 37.7C23.8594 37.7 23.5826 37.5833 23.35 37.35C23.1167 37.1167 23 36.8394 23 36.5182C23 36.1969 23.1167 35.9201 23.35 35.6875L33.7333 25.3333H24.8667C24.5361 25.3333 24.2588 25.2213 24.0348 24.9973C23.8108 24.7733 23.6992 24.4964 23.7 24.1667C23.7 23.8361 23.812 23.5588 24.036 23.3348C24.26 23.1108 24.5369 22.9992 24.8667 23H36.5333C36.8639 23 37.1412 23.112 37.3652 23.336C37.5892 23.56 37.7008 23.8369 37.7 24.1667V35.8333C37.7 36.1639 37.588 36.4412 37.364 36.6652C37.14 36.8892 36.8631 37.0008 36.5333 37C36.2028 37 35.9255 36.888 35.7015 36.664C35.4775 36.44 35.3659 36.1631 35.3667 35.8333V26.9667Z" fill="#1A1A2E"/>
                            <defs>
                                <filter id="filter0_d_90_570" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_90_570"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="4"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_570"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_90_570" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="app-3">
                    <p className="app-title">Check Your
                        Journal</p>
                    <div className="sub-app-content">
                        <p className="app-sub-title">Our Nexus User Journal page helps online sellers track their business activities, course progression and business state.</p>
                        <svg style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <g filter="url(#filter0_d_90_570)">
                                <circle cx="30" cy="30" r="20" fill="#F8F8F8"/>
                            </g>
                            <path d="M35.3667 26.9667L25.0125 37.35C24.7792 37.5833 24.5019 37.7 24.1807 37.7C23.8594 37.7 23.5826 37.5833 23.35 37.35C23.1167 37.1167 23 36.8394 23 36.5182C23 36.1969 23.1167 35.9201 23.35 35.6875L33.7333 25.3333H24.8667C24.5361 25.3333 24.2588 25.2213 24.0348 24.9973C23.8108 24.7733 23.6992 24.4964 23.7 24.1667C23.7 23.8361 23.812 23.5588 24.036 23.3348C24.26 23.1108 24.5369 22.9992 24.8667 23H36.5333C36.8639 23 37.1412 23.112 37.3652 23.336C37.5892 23.56 37.7008 23.8369 37.7 24.1667V35.8333C37.7 36.1639 37.588 36.4412 37.364 36.6652C37.14 36.8892 36.8631 37.0008 36.5333 37C36.2028 37 35.9255 36.888 35.7015 36.664C35.4775 36.44 35.3659 36.1631 35.3667 35.8333V26.9667Z" fill="#1A1A2E"/>
                            <defs>
                                <filter id="filter0_d_90_570" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_90_570"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="4"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_570"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_90_570" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppSection;
