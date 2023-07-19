import './LandingPage.css';
import { Button } from "@mui/material";


// components
function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="blur">
                <div className="navbar">
                    <div className="nexus-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="58" viewBox="0 0 59 58" fill="none">
                            <path d="M8.27615 14.5913L21.3326 35.3107L6.64355 49.8644H17.1362L24.6928 40.6435L34.7113 56.5414H41.6439L15.2093 14.5913H8.27615Z" fill="white"/>
                            <path d="M55.5785 1.4585L27.3057 29.4999L29.935 33.6174L55.5785 1.4585Z" fill="white"/>
                            <path d="M30.1179 11.5231C29.6394 11.7616 29.1646 11.9329 28.6856 12.2454C28.5755 12.3147 28.4654 12.3883 28.3381 12.4168C28.2114 12.4452 28.0642 12.4291 27.9745 12.3351C27.807 12.159 27.9214 11.8695 28.0481 11.6606C28.2737 11.2986 28.5191 10.9523 28.7882 10.6257C28.7957 10.6295 28.8037 10.6327 28.8118 10.637C29.0696 10.7514 29.3182 10.8943 29.5556 11.0618C29.7559 11.1988 29.9444 11.3513 30.1184 11.5231H30.1179Z" fill="white"/>
                            <path d="M30.983 12.6666C29.5673 13.485 28.1555 13.9023 26.7398 14.8244C26.474 14.9957 26.205 15.1676 25.9026 15.2411C25.596 15.3147 25.2447 15.2658 25.024 15.0408C24.6116 14.616 24.8892 13.9173 25.2039 13.4147C25.9021 12.2955 26.6657 11.2418 27.5309 10.2617C27.8784 10.3063 28.2183 10.3954 28.5427 10.5238C28.0835 10.9373 27.6936 11.4303 27.4068 11.9754C27.2479 12.2778 27.1292 12.6741 27.3413 12.9399C27.4767 13.1075 27.7172 13.1682 27.9342 13.1359C28.1469 13.1075 28.3467 13.0054 28.5352 12.8953C29.1452 12.542 29.714 12.1193 30.2311 11.6355C30.2376 11.6414 30.244 11.6483 30.2504 11.6548C30.2752 11.6795 30.2956 11.7037 30.3197 11.7284C30.5689 12.0066 30.7982 12.3213 30.9819 12.6644C30.9819 12.6644 30.983 12.666 30.9835 12.6671L30.983 12.6666Z" fill="white"/>
                            <path d="M31.5879 14.8189C29.0982 16.1315 26.6128 17.451 24.1188 18.7678C24.1123 18.7624 24.1048 18.7576 24.0978 18.7527C23.8035 18.5326 23.534 18.2791 23.2971 17.9928C23.0888 17.7474 22.9008 17.4735 22.745 17.1798C21.9567 15.6922 22.0421 13.9758 22.8267 12.6192C23.252 11.8878 23.8809 11.2584 24.6902 10.8298C25.1112 10.6091 25.5478 10.4539 25.9936 10.3685C26.1407 10.3401 26.283 10.3154 26.4307 10.303C26.6063 10.2869 26.782 10.2783 26.9533 10.2826H26.9597C25.6118 11.3615 24.4888 12.7175 23.6838 14.2449C23.2998 14.9763 23.0055 15.9285 23.5205 16.574C23.8513 16.9827 24.4313 17.1255 24.9507 17.0557C25.4732 16.9821 25.9479 16.7287 26.4055 16.4676C28.1117 15.4757 29.6905 14.2636 31.0868 12.8733C31.3999 13.4887 31.5847 14.1407 31.5874 14.7937C31.5874 14.8189 31.5879 14.8189 31.5874 14.8195L31.5879 14.8189Z" fill="white"/>
                            <path d="M31.5512 15.5703C31.3638 17.0343 30.4954 18.3817 29.0953 19.1239C28.4047 19.4918 27.6609 19.6674 26.9332 19.676C26.3978 19.6803 25.8629 19.5895 25.3613 19.4133C27.5981 18.4553 29.6941 17.1546 31.5512 15.5703Z" fill="white"/>
                        </svg>
                    </div>
                    <hr className="line"/>
                    <Button>
                    <div className="logo-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M23.3221 10.5646H18.5843C18.5005 10.5503 18.4155 10.5503 18.3317 10.5646H18.1273C18.0645 10.6096 18.0042 10.6601 17.9469 10.7156C17.88 10.7711 17.8157 10.8316 17.7545 10.8967C17.7144 10.9584 17.6782 11.0241 17.6463 11.0929C17.5912 11.188 17.5429 11.2891 17.502 11.3948L15.578 18.0517L10.5636 0.994488C10.4793 0.70308 10.3256 0.451305 10.1234 0.273377C9.92117 0.0954496 9.68019 0 9.43323 0C9.18627 0 8.9453 0.0954496 8.74306 0.273377C8.54083 0.451305 8.38714 0.70308 8.30288 0.994488L5.52511 10.5646H1.67711C1.35819 10.5646 1.05233 10.7237 0.826813 11.0067C0.601301 11.2898 0.474609 11.6738 0.474609 12.0741C0.474609 12.4745 0.601301 12.8584 0.826813 13.1415C1.05233 13.4246 1.35819 13.5836 1.67711 13.5836H6.84786C6.91621 13.5423 6.98073 13.4917 7.04026 13.4326C7.10722 13.3771 7.17147 13.3167 7.23266 13.2515L7.34088 13.0553C7.3982 12.9621 7.44663 12.8607 7.48518 12.7534L9.43323 5.91541L14.4356 23.1537C14.5197 23.4455 14.6732 23.6976 14.8755 23.8759C15.0778 24.0542 15.3189 24.1499 15.566 24.15C15.8131 24.1499 16.0542 24.0542 16.2565 23.8759C16.4587 23.6976 16.6123 23.4455 16.6963 23.1537L19.4621 13.5836H23.3221C23.641 13.5836 23.9469 13.4246 24.1724 13.1415C24.3979 12.8584 24.5246 12.4745 24.5246 12.0741C24.5246 11.6738 24.3979 11.2898 24.1724 11.0067C23.9469 10.7237 23.641 10.5646 23.3221 10.5646Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    </Button>
                    <Button>
                    <div className="logo-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M15.2775 18.6093L13.7248 20.1801V13.4255C13.7248 13.105 13.598 12.7977 13.3723 12.5711C13.1465 12.3445 12.8404 12.2172 12.5212 12.2172C12.2019 12.2172 11.8958 12.3445 11.6701 12.5711C11.4443 12.7977 11.3175 13.105 11.3175 13.4255V20.1801L9.76483 18.6093C9.6526 18.4966 9.51937 18.4072 9.37274 18.3463C9.22611 18.2853 9.06896 18.2539 8.91024 18.2539C8.75153 18.2539 8.59438 18.2853 8.44775 18.3463C8.30112 18.4072 8.16789 18.4966 8.05566 18.6093C7.94343 18.7219 7.85441 18.8557 7.79368 19.0029C7.73294 19.1501 7.70168 19.3078 7.70168 19.4672C7.70168 19.6265 7.73294 19.7843 7.79368 19.9315C7.85441 20.0787 7.94343 20.2124 8.05566 20.3251L11.6666 23.9501C11.7811 24.0601 11.916 24.1463 12.0638 24.2038C12.2079 24.2678 12.3636 24.3008 12.5212 24.3008C12.6787 24.3008 12.8345 24.2678 12.9785 24.2038C13.1263 24.1463 13.2613 24.0601 13.3758 23.9501L16.9867 20.3251C17.2133 20.0976 17.3407 19.789 17.3407 19.4672C17.3407 19.1454 17.2133 18.8368 16.9867 18.6093C16.76 18.3817 16.4526 18.2539 16.1321 18.2539C15.8116 18.2539 15.5042 18.3817 15.2775 18.6093ZM20.2485 5.23301C19.5131 3.53652 18.2439 2.1289 16.6353 1.22585C15.0267 0.3228 13.1676 -0.0258574 11.3428 0.233302C9.51793 0.492462 7.82808 1.34514 6.53216 2.66068C5.23623 3.97622 4.40573 5.68205 4.1679 7.51676C3.02033 7.79265 2.01365 8.48202 1.33903 9.45395C0.66441 10.4259 0.368833 11.6127 0.50843 12.789C0.648028 13.9653 1.21308 15.0491 2.09628 15.8348C2.97947 16.6204 4.11931 17.053 5.29932 17.0505C5.61855 17.0505 5.9247 16.9232 6.15043 16.6966C6.37615 16.47 6.50296 16.1626 6.50296 15.8422C6.50296 15.5217 6.37615 15.2144 6.15043 14.9878C5.9247 14.7612 5.61855 14.6338 5.29932 14.6338C4.66087 14.6338 4.04857 14.3792 3.59712 13.926C3.14567 13.4728 2.89204 12.8581 2.89204 12.2172C2.89204 11.5762 3.14567 10.9615 3.59712 10.5083C4.04857 10.0551 4.66087 9.80051 5.29932 9.80051C5.61855 9.80051 5.9247 9.6732 6.15043 9.4466C6.37615 9.21999 6.50296 8.91265 6.50296 8.59218C6.50604 7.16306 7.01365 5.7813 7.93562 4.69238C8.85759 3.60347 10.1342 2.87791 11.5387 2.64461C12.9432 2.41131 14.3846 2.68537 15.6068 3.41811C16.829 4.15084 17.7529 5.2948 18.2144 6.64676C18.2832 6.8544 18.4069 7.03939 18.5722 7.18197C18.7376 7.32456 18.9384 7.41939 19.1532 7.45635C19.9549 7.60844 20.6817 8.02861 21.2151 8.64841C21.7485 9.2682 22.0571 10.0511 22.0906 10.8695C22.1241 11.6878 21.8805 12.4935 21.3996 13.1551C20.9186 13.8168 20.2287 14.2954 19.4421 14.513C19.2888 14.5527 19.1447 14.6223 19.0182 14.7178C18.8917 14.8134 18.7851 14.933 18.7047 15.0699C18.6242 15.2068 18.5714 15.3583 18.5492 15.5156C18.527 15.673 18.536 15.8333 18.5755 15.9872C18.615 16.1411 18.6843 16.2857 18.7795 16.4127C18.8747 16.5397 18.9939 16.6467 19.1302 16.7275C19.2666 16.8083 19.4174 16.8613 19.5742 16.8836C19.731 16.9058 19.8906 16.8968 20.0439 16.8572C21.3106 16.5212 22.4335 15.7793 23.242 14.7444C24.0505 13.7094 24.5005 12.4378 24.5237 11.1228C24.5468 9.80768 24.1418 8.52094 23.3703 7.45794C22.5987 6.39494 21.5026 5.61375 20.2485 5.23301Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    </Button>
                    <Button>
                    <div className="logo-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M20.9171 0.300781H4.08211C3.12534 0.300781 2.20776 0.682437 1.53122 1.36179C0.854684 2.04114 0.474609 2.96253 0.474609 3.92328V20.8283C0.474609 21.789 0.854684 22.7104 1.53122 23.3898C2.20776 24.0691 3.12534 24.4508 4.08211 24.4508H20.9171C21.1149 24.448 21.3121 24.4278 21.5063 24.3904L21.8671 24.3059H22.0114L22.4563 24.1368L22.6126 24.0523C22.7329 23.9799 22.8652 23.9195 22.9854 23.835C23.146 23.7163 23.2986 23.5873 23.4424 23.4486L23.5265 23.3399C23.6446 23.2197 23.7531 23.0906 23.8512 22.9535L23.9594 22.7965C24.0434 22.6621 24.1158 22.5207 24.1759 22.3739C24.2089 22.3159 24.237 22.2554 24.2601 22.1928C24.3202 22.0479 24.3563 21.8909 24.4044 21.7339V21.5528C24.4725 21.3168 24.5129 21.0737 24.5246 20.8283V3.92328C24.5246 2.96253 24.1445 2.04114 23.468 1.36179C22.7915 0.682437 21.8739 0.300781 20.9171 0.300781ZM4.08211 22.0358C3.76319 22.0358 3.45733 21.9086 3.23181 21.6821C3.0063 21.4557 2.87961 21.1485 2.87961 20.8283V15.624L6.83583 11.6392C6.94762 11.526 7.08062 11.4362 7.22716 11.3749C7.37369 11.3136 7.53087 11.282 7.68961 11.282C7.84835 11.282 8.00553 11.3136 8.15206 11.3749C8.2986 11.4362 8.4316 11.526 8.54338 11.6392L18.8849 22.0358H4.08211ZM22.1196 20.8283C22.1185 20.9772 22.0899 21.1245 22.0354 21.263C22.008 21.3218 21.9758 21.3784 21.9392 21.432C21.9071 21.4831 21.8709 21.5316 21.831 21.5769L15.3976 15.1168L16.4558 14.0542C16.5676 13.941 16.7006 13.8512 16.8472 13.7899C16.9937 13.7286 17.1509 13.697 17.3096 13.697C17.4684 13.697 17.6255 13.7286 17.7721 13.7899C17.9186 13.8512 18.0516 13.941 18.1634 14.0542L22.1196 18.039V20.8283ZM22.1196 14.6217L19.8589 12.3758C19.1707 11.7201 18.2583 11.3546 17.3096 11.3546C16.361 11.3546 15.4485 11.7201 14.7603 12.3758L13.7021 13.4384L10.2389 9.96078C9.55074 9.3051 8.63826 8.93957 7.68961 8.93957C6.74096 8.93957 5.82847 9.3051 5.14031 9.96078L2.87961 12.2067V3.92328C2.87961 3.60303 3.0063 3.2959 3.23181 3.06945C3.45733 2.843 3.76319 2.71578 4.08211 2.71578H20.9171C21.236 2.71578 21.5419 2.843 21.7674 3.06945C21.9929 3.2959 22.1196 3.60303 22.1196 3.92328V14.6217Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    </Button>
                    <Button>
                    <div className="logo-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M20.9171 2.86593H18.5121V1.65843C18.5121 1.33818 18.3854 1.03105 18.1599 0.804596C17.9344 0.578146 17.6285 0.450928 17.3096 0.450928C16.9907 0.450928 16.6848 0.578146 16.4593 0.804596C16.2338 1.03105 16.1071 1.33818 16.1071 1.65843V2.86593H8.89211V1.65843C8.89211 1.33818 8.76542 1.03105 8.5399 0.804596C8.31439 0.578146 8.00853 0.450928 7.68961 0.450928C7.37069 0.450928 7.06483 0.578146 6.83931 0.804596C6.6138 1.03105 6.48711 1.33818 6.48711 1.65843V2.86593H4.08211C3.12534 2.86593 2.20776 3.24758 1.53122 3.92693C0.854684 4.60628 0.474609 5.52768 0.474609 6.48843V20.9784C0.474609 21.9392 0.854684 22.8606 1.53122 23.5399C2.20776 24.2193 3.12534 24.6009 4.08211 24.6009H20.9171C21.8739 24.6009 22.7915 24.2193 23.468 23.5399C24.1445 22.8606 24.5246 21.9392 24.5246 20.9784V6.48843C24.5246 5.52768 24.1445 4.60628 23.468 3.92693C22.7915 3.24758 21.8739 2.86593 20.9171 2.86593ZM22.1196 20.9784C22.1196 21.2987 21.9929 21.6058 21.7674 21.8323C21.5419 22.0587 21.236 22.1859 20.9171 22.1859H4.08211C3.76319 22.1859 3.45733 22.0587 3.23181 21.8323C3.0063 21.6058 2.87961 21.2987 2.87961 20.9784V12.5259H22.1196V20.9784ZM22.1196 10.1109H2.87961V6.48843C2.87961 6.16818 3.0063 5.86105 3.23181 5.6346C3.45733 5.40815 3.76319 5.28093 4.08211 5.28093H6.48711V6.48843C6.48711 6.80868 6.6138 7.11581 6.83931 7.34226C7.06483 7.56871 7.37069 7.69593 7.68961 7.69593C8.00853 7.69593 8.31439 7.56871 8.5399 7.34226C8.76542 7.11581 8.89211 6.80868 8.89211 6.48843V5.28093H16.1071V6.48843C16.1071 6.80868 16.2338 7.11581 16.4593 7.34226C16.6848 7.56871 16.9907 7.69593 17.3096 7.69593C17.6285 7.69593 17.9344 7.56871 18.1599 7.34226C18.3854 7.11581 18.5121 6.80868 18.5121 6.48843V5.28093H20.9171C21.236 5.28093 21.5419 5.40815 21.7674 5.6346C21.9929 5.86105 22.1196 6.16818 22.1196 6.48843V10.1109Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    </Button>
                    <Button>
                    <div className="logo-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="27" viewBox="0 0 21 27" fill="none">
                            <path d="M6.37967 9.29347L6.37734 9.29464L6.37384 9.297L6.37967 9.29347ZM17.9927 9.07367C17.9116 8.99478 17.8215 8.92574 17.7244 8.86798C17.5869 8.78643 17.4343 8.73416 17.2759 8.71439C17.1176 8.69463 16.9569 8.70779 16.8039 8.75307C16.6508 8.79834 16.5085 8.87477 16.3859 8.97763C16.2633 9.08048 16.163 9.20758 16.0911 9.35106C15.6892 10.1491 15.135 10.8593 14.46 11.4409C14.5635 10.855 14.6158 10.2611 14.6164 9.66607C14.6186 7.85613 14.1447 6.07792 13.243 4.51249C12.3413 2.94706 11.0439 1.65031 9.48302 0.754273C9.31101 0.655809 9.11697 0.60303 8.91915 0.600897C8.72133 0.598765 8.52621 0.647348 8.35215 0.742081C8.17809 0.836813 8.0308 0.974583 7.92413 1.14244C7.81745 1.3103 7.7549 1.50272 7.74234 1.70164C7.67703 2.81602 7.38784 3.90545 6.8923 4.90392C6.39677 5.90239 5.7052 6.78913 4.8595 7.5104L4.59116 7.7302C3.70637 8.32994 2.92323 9.06932 2.27182 9.91995C1.25947 11.2048 0.558196 12.7096 0.223626 14.315C-0.110944 15.9204 -0.0696106 17.5823 0.344349 19.1689C0.758309 20.7554 1.53351 22.2229 2.60846 23.4551C3.68341 24.6872 5.02854 25.6501 6.53717 26.2673C6.71429 26.3399 6.90642 26.3675 7.09665 26.3478C7.28687 26.328 7.46936 26.2615 7.62805 26.1539C7.78674 26.0464 7.91676 25.9013 8.00668 25.7312C8.09659 25.5612 8.14364 25.3715 8.14368 25.1788C8.14271 25.0543 8.12304 24.9307 8.08535 24.8121C7.82432 23.8237 7.74914 22.7947 7.86368 21.7784C8.9679 23.876 10.7402 25.5386 12.8955 26.4988C13.1585 26.6172 13.4558 26.6332 13.7297 26.5435C15.4324 25.9897 16.9663 25.0065 18.1857 23.6873C19.4051 22.3681 20.2694 20.7567 20.6966 19.0062C21.1237 17.2557 21.0995 15.4242 20.6263 13.6858C20.1531 11.9474 19.2465 10.3597 17.9927 9.07367ZM13.4369 24.1551C12.4199 23.6359 11.5227 22.9069 10.8037 22.0155C10.0847 21.1241 9.56002 20.0902 9.26369 18.981C9.17309 18.6075 9.10298 18.2292 9.05369 17.8479C9.02049 17.6051 8.91278 17.3789 8.74564 17.2008C8.5785 17.0227 8.36028 16.9017 8.12151 16.8547C8.0481 16.8404 7.97346 16.8333 7.89868 16.8336C7.69369 16.8334 7.49227 16.8876 7.3147 16.9908C7.13712 17.0939 6.98967 17.2424 6.88717 17.4213C5.91936 19.1036 5.43277 21.023 5.48133 22.9668C4.62985 22.3 3.9182 21.4695 3.38764 20.5236C2.85708 19.5776 2.51817 18.535 2.39055 17.4561C2.26293 16.3772 2.34914 15.2836 2.64418 14.2385C2.93922 13.1934 3.43723 12.2178 4.10933 11.368C4.61965 10.7002 5.23527 10.1213 5.93167 9.65431C5.96214 9.63462 5.99137 9.61303 6.01917 9.58967C6.01917 9.58967 6.3645 9.3017 6.37617 9.29582C8.03891 7.87953 9.22164 5.9759 9.75952 3.85025C11.0305 5.03429 11.8779 6.60801 12.1701 8.32702C12.4623 10.046 12.1829 11.8141 11.3754 13.3568C11.2685 13.5627 11.2246 13.7959 11.2492 14.0269C11.2738 14.2579 11.3659 14.4764 11.5137 14.6548C11.6615 14.8331 11.8585 14.9634 12.0797 15.029C12.301 15.0946 12.5365 15.0927 12.7567 15.0235C14.5437 14.4589 16.1162 13.3562 17.2624 11.864C17.9515 12.8893 18.4021 14.058 18.5806 15.283C18.759 16.5081 18.6607 17.7579 18.293 18.9394C17.9253 20.1209 17.2976 21.2035 16.4568 22.1066C15.616 23.0096 14.5837 23.7099 13.4369 24.1551Z" fill="#F8F8F8"/>
                        </svg>
                    </div>
                    </Button>

                    <div className="logo-6">
                        <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M22.5596 13.6228C22.3634 13.4025 22.2552 13.1192 22.2552 12.826C22.2552 12.5327 22.3634 12.2495 22.5596 12.0291L24.1263 10.2906C24.299 10.1006 24.4062 9.86161 24.4325 9.60783C24.4589 9.35405 24.4031 9.09855 24.2732 8.87799L21.8252 4.70061C21.6966 4.48029 21.5007 4.30566 21.2655 4.2016C21.0304 4.09754 20.7679 4.06936 20.5155 4.12109L18.2144 4.57987C17.9216 4.63955 17.6168 4.59145 17.3575 4.44465C17.0982 4.29785 16.9023 4.06251 16.8069 3.78303L16.0602 1.57361C15.9781 1.3338 15.8217 1.12552 15.613 0.978199C15.4044 0.830877 15.154 0.751965 14.8974 0.752618H10.0015C9.73456 0.738877 9.47043 0.811689 9.24941 0.959935C9.02839 1.10818 8.86265 1.32371 8.77748 1.57361L8.09205 3.78303C7.99658 4.06251 7.8007 4.29785 7.54139 4.44465C7.28208 4.59145 6.97726 4.63955 6.68446 4.57987L4.32216 4.12109C4.08293 4.08774 3.83905 4.12498 3.62124 4.2281C3.40343 4.33123 3.22143 4.49564 3.09817 4.70061L0.650192 8.87799C0.516973 9.09609 0.457073 9.35016 0.479057 9.60387C0.50104 9.85757 0.603781 10.0979 0.772591 10.2906L2.32706 12.0291C2.52329 12.2495 2.63151 12.5327 2.63151 12.826C2.63151 13.1192 2.52329 13.4025 2.32706 13.6228L0.772591 15.3614C0.603781 15.554 0.50104 15.7944 0.479057 16.0481C0.457073 16.3018 0.516973 16.5559 0.650192 16.774L3.09817 20.9513C3.22681 21.1717 3.42267 21.3463 3.65784 21.4504C3.89301 21.5544 4.15548 21.5826 4.40784 21.5309L6.70894 21.0721C7.00174 21.0124 7.30656 21.0605 7.56587 21.2073C7.82518 21.3541 8.02106 21.5894 8.11653 21.8689L8.86316 24.0783C8.94833 24.3282 9.11407 24.5438 9.33509 24.692C9.55611 24.8403 9.82024 24.9131 10.0872 24.8993H14.9831C15.2397 24.9 15.49 24.8211 15.6987 24.6738C15.9073 24.5264 16.0638 24.3181 16.1459 24.0783L16.8925 21.8689C16.988 21.5894 17.1839 21.3541 17.4432 21.2073C17.7025 21.0605 18.0073 21.0124 18.3001 21.0721L20.6012 21.5309C20.8536 21.5826 21.116 21.5544 21.3512 21.4504C21.5864 21.3463 21.7823 21.1717 21.9109 20.9513L24.3589 16.774C24.4888 16.5534 24.5446 16.2979 24.5182 16.0441C24.4918 15.7903 24.3846 15.5513 24.212 15.3614L22.5596 13.6228ZM20.7359 15.2406L21.715 16.3273L20.1483 19.0075L18.704 18.7178C17.8225 18.54 16.9055 18.6877 16.127 19.1329C15.3486 19.578 14.763 20.2895 14.4813 21.1324L14.0162 22.4847H10.8827L10.4421 21.1083C10.1604 20.2654 9.57477 19.5538 8.79634 19.1087C8.01791 18.6636 7.10089 18.5159 6.21934 18.6936L4.77504 18.9834L3.18385 16.3152L4.16304 15.2286C4.76519 14.5645 5.09809 13.7048 5.09809 12.8139C5.09809 11.923 4.76519 11.0633 4.16304 10.3992L3.18385 9.31263L4.75056 6.65649L6.19486 6.94625C7.07641 7.124 7.99343 6.97629 8.77186 6.53117C9.55029 6.08604 10.1359 5.37449 10.4176 4.53158L10.8827 3.16729H14.0162L14.4813 4.54365C14.763 5.38656 15.3486 6.09812 16.127 6.54324C16.9055 6.98836 17.8225 7.13607 18.704 6.95832L20.1483 6.66856L21.715 9.34885L20.7359 10.4355C20.1405 11.098 19.8117 11.9527 19.8117 12.8381C19.8117 13.7234 20.1405 14.5781 20.7359 15.2406ZM12.4495 7.99663C11.4811 7.99663 10.5345 8.27987 9.7294 8.81052C8.92426 9.34118 8.29674 10.0954 7.92617 10.9779C7.55561 11.8603 7.45865 12.8313 7.64757 13.7681C7.83648 14.7049 8.30277 15.5654 8.98748 16.2408C9.6722 16.9162 10.5446 17.3762 11.4943 17.5625C12.444 17.7489 13.4284 17.6532 14.3231 17.2877C15.2177 16.9222 15.9823 16.3032 16.5203 15.509C17.0583 14.7148 17.3454 13.7811 17.3454 12.826C17.3454 11.5452 16.8296 10.3168 15.9114 9.41111C14.9932 8.50544 13.7479 7.99663 12.4495 7.99663ZM12.4495 15.2406C11.9653 15.2406 11.492 15.099 11.0894 14.8337C10.6869 14.5684 10.3731 14.1913 10.1878 13.75C10.0025 13.3088 9.95405 12.8233 10.0485 12.3549C10.143 11.8865 10.3761 11.4562 10.7185 11.1185C11.0608 10.7808 11.497 10.5509 11.9719 10.4577C12.4467 10.3645 12.9389 10.4123 13.3863 10.5951C13.8336 10.7779 14.2159 11.0874 14.4849 11.4845C14.7539 11.8815 14.8974 12.3484 14.8974 12.826C14.8974 13.4664 14.6395 14.0806 14.1804 14.5334C13.7213 14.9862 13.0987 15.2406 12.4495 15.2406Z" fill="#F8F8F8"/>
                        </svg>
                        </Button>
                    </div>

                </div>
                <div className="content">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="243" height="83" viewBox="0 0 243 83" fill="none">
                            <g filter="url(#filter0_d_57_1957)">
                                <path d="M23.4693 52.1909H23.3163L15.1994 20.0688H4.73079V73.733H12.1667V34.5566H12.3168L22.3295 73.733H30.9023V20.0688H23.4693V52.1909Z" fill="white"/>
                                <path d="M59.0879 73.733H81.8459V66.0663H67.4328V49.5838H78.8854V41.9171H67.4328V27.7356H81.8459V20.0688H59.0879V73.733Z" fill="white"/>
                                <path d="M179.131 61.6191C179.131 65.451 177.538 66.8333 174.883 66.8333C172.229 66.8333 170.636 65.4539 170.636 61.6191V20.0688H162.291V61.0067C162.291 69.592 166.538 74.5 174.73 74.5C182.922 74.5 187.17 69.5949 187.17 61.0067V20.0688H179.128V61.6191H179.131Z" fill="white"/>
                                <path d="M229.315 43.6814C223.853 38.8522 222.11 36.0147 222.11 32.104C222.11 28.4238 223.628 26.9686 226.283 26.9686C228.937 26.9686 230.455 28.4238 230.455 32.2586V35.0173H238.344V32.7952C238.344 24.2098 234.325 19.3019 226.208 19.3019C218.091 19.3019 213.768 24.2069 213.768 32.6406C213.768 38.7734 216.045 43.1448 223.022 49.3535C228.484 54.1827 230.152 57.0202 230.152 61.4674C230.152 65.4539 228.484 66.8333 225.83 66.8333C223.175 66.8333 221.507 65.4539 221.507 61.6191V57.9388H213.618V61.0067C213.618 69.592 217.716 74.5 225.908 74.5C234.1 74.5 238.5 69.5949 238.5 60.855C238.494 54.1827 236.293 49.8901 229.315 43.6814Z" fill="white"/>
                                <path d="M100.417 20.0688L117.179 46.9505L98.3222 65.8359H111.792L121.496 53.8707L134.356 74.5H143.258L109.319 20.0688H100.417Z" fill="white"/>
                                <path d="M161.145 3.02937L124.849 39.4121L128.225 44.7546L161.145 3.02937Z" fill="white"/>
                                <path d="M9.97256 7.09396C9.97256 7.85848 9.7598 8.47168 9.33429 8.93358C8.84574 9.45919 8.12867 9.72199 7.18309 9.72199C6.41874 9.72199 5.81988 9.53086 5.38648 9.1486C5.00037 8.81412 4.70488 8.28852 4.5 7.57178L5.4574 7.08202C5.4574 7.58373 5.63864 8.00182 6.00111 8.3363C6.36359 8.67078 6.78122 8.83802 7.25401 8.83802C7.7662 8.83802 8.17201 8.67476 8.47145 8.34825C8.77876 8.01377 8.93242 7.6116 8.93242 7.14174C8.93242 6.56039 8.566 6.0985 7.83318 5.75606C7.13975 5.4614 6.45026 5.16674 5.76472 4.87208C5.02401 4.42611 4.65366 3.79698 4.65366 2.98468C4.65366 2.31573 4.87429 1.75827 5.31556 1.3123C5.80412 0.818549 6.48178 0.571674 7.34857 0.571674C7.90804 0.571674 8.42023 0.726966 8.88514 1.03755C9.35005 1.34814 9.66918 1.76225 9.84254 2.27989L8.90878 2.72188C8.8221 2.34758 8.61328 2.04894 8.28233 1.82596C7.95138 1.59501 7.58496 1.47954 7.18309 1.47954C6.76546 1.47954 6.4148 1.6189 6.13113 1.89763C5.85533 2.1684 5.71744 2.475 5.71744 2.81744C5.71744 3.42269 6.08385 3.88458 6.81668 4.20313C7.49434 4.48186 8.17595 4.76059 8.8615 5.03932C9.6022 5.49325 9.97256 6.17813 9.97256 7.09396Z" fill="white"/>
                                <path d="M18.6671 9.57864H17.6388V5.17072H12.7927V9.57864H11.7644V0.738912H12.7927V4.23897H17.6152V0.738912H18.6671V9.57864Z" fill="white"/>
                                <path d="M30.1696 5.09905C30.1696 6.4051 29.7126 7.52002 28.7985 8.44381C27.8923 9.35964 26.7931 9.81755 25.5008 9.81755C24.1927 9.81755 23.0738 9.37955 22.144 8.50354C21.1905 7.60364 20.7138 6.50863 20.7138 5.2185C20.7138 3.91245 21.1669 2.80152 22.0731 1.88569C22.9871 0.961896 24.0903 0.5 25.3826 0.5C26.6907 0.5 27.8135 0.945969 28.7512 1.83791C29.6968 2.72188 30.1696 3.80893 30.1696 5.09905ZM29.0822 5.07516C29.0822 4.06377 28.7197 3.20767 27.9948 2.50686C27.2698 1.80605 26.3991 1.45565 25.3826 1.45565C24.3819 1.45565 23.5348 1.82198 22.8413 2.55464C22.1479 3.2873 21.8012 4.16729 21.8012 5.19461C21.8012 6.20601 22.1597 7.06211 22.8768 7.76291C23.6017 8.45576 24.4764 8.80218 25.5008 8.80218C26.5015 8.80218 27.3486 8.43585 28.042 7.70319C28.7355 6.97052 29.0822 6.09451 29.0822 5.07516Z" fill="white"/>
                                <path d="M37.3229 3.22359C37.3229 3.8368 37.1022 4.39028 36.661 4.88403C36.2197 5.36982 35.7312 5.61271 35.1953 5.61271H33.3514V9.57864H32.2758V0.738912H35.1244C35.7233 0.738912 36.2394 0.985787 36.6728 1.47954C37.1062 1.97329 37.3229 2.55464 37.3229 3.22359ZM36.2118 3.15192C36.2118 2.78559 36.066 2.44713 35.7745 2.13654C35.4829 1.82596 35.148 1.67067 34.7698 1.67067H33.3514V4.70484H35.1126C35.3805 4.70484 35.6287 4.53362 35.8572 4.19118C36.0936 3.84078 36.2118 3.49436 36.2118 3.15192Z" fill="white"/>
                                <path d="M45.781 9.57864H44.7527V5.17072H39.9066V9.57864H38.8783V0.738912H39.9066V4.23897H44.7291V0.738912H45.781V9.57864Z" fill="white"/>
                                <path d="M57.2835 5.09905C57.2835 6.4051 56.8265 7.52002 55.9124 8.44381C55.0063 9.35964 53.907 9.81755 52.6147 9.81755C51.3067 9.81755 50.1877 9.37955 49.2579 8.50354C48.3044 7.60364 47.8277 6.50863 47.8277 5.2185C47.8277 3.91245 48.2808 2.80152 49.187 1.88569C50.101 0.961896 51.2042 0.5 52.4965 0.5C53.8046 0.5 54.9275 0.945969 55.8652 1.83791C56.8107 2.72188 57.2835 3.80893 57.2835 5.09905ZM56.1961 5.07516C56.1961 4.06377 55.8336 3.20767 55.1087 2.50686C54.3838 1.80605 53.513 1.45565 52.4965 1.45565C51.4958 1.45565 50.6487 1.82198 49.9553 2.55464C49.2618 3.2873 48.9151 4.16729 48.9151 5.19461C48.9151 6.20601 49.2737 7.06211 49.9907 7.76291C50.7157 8.45576 51.5903 8.80218 52.6147 8.80218C53.6155 8.80218 54.4625 8.43585 55.156 7.70319C55.8494 6.97052 56.1961 6.09451 56.1961 5.07516Z" fill="white"/>
                                <path d="M69.9094 0.738912L66.7062 9.85339H66.3871L64.1886 2.87717L62.0256 9.85339H61.7183L58.3614 0.738912H59.5434L61.8365 7.7868L64.0704 0.643347H64.3304L66.588 7.7868L68.7865 0.738912H69.9094Z" fill="white"/>
                                <path d="M75.9831 9.57864H71.2315V0.738912H75.9831V1.69456H72.3071V4.31064H75.9831V5.2185H72.2835V8.623H75.9831V9.57864Z" fill="white"/>
                                <path d="M82.29 9.57864H77.9758V0.738912H79.0632V8.623H82.29V9.57864Z" fill="white"/>
                                <path d="M88.2115 9.57864H83.8972V0.738912H84.9847V8.623H88.2115V9.57864Z" fill="white"/>
                                <path d="M121.963 20.7425C122.246 21.0341 122.699 21.0983 123.091 21.002C123.481 20.9058 123.827 20.6841 124.168 20.4625C125.986 19.2669 127.798 18.7244 129.616 17.6629C129.616 17.6629 129.616 17.66 129.613 17.66C129.376 17.2138 129.082 16.8056 128.761 16.4469C128.73 16.4148 128.704 16.3827 128.672 16.3506C128.626 16.304 128.577 16.2544 128.531 16.2078C128.3 15.9745 128.049 15.7674 127.78 15.5808C127.477 15.362 127.157 15.1783 126.825 15.0296C126.721 14.9771 126.62 14.9334 126.516 14.8984C126.089 14.7234 125.639 14.6038 125.18 14.5455C124.07 15.817 123.088 17.1847 122.191 18.637C121.79 19.2844 121.432 20.1913 121.963 20.7425ZM124.993 16.7881C125.365 16.0736 125.873 15.4262 126.473 14.8838C126.577 14.9217 126.678 14.9625 126.782 15.015C126.43 15.4437 126.11 15.9016 125.815 16.3769C125.654 16.6481 125.507 17.0243 125.72 17.2518C125.835 17.3742 126.023 17.3947 126.188 17.3567C126.349 17.3188 126.491 17.2255 126.635 17.1351C127.255 16.7268 127.867 16.5052 128.487 16.1903C128.533 16.2369 128.582 16.2865 128.629 16.3332C127.962 16.9631 127.229 17.5142 126.441 17.9779C126.199 18.1208 125.942 18.2549 125.671 18.2899C125.394 18.3337 125.082 18.252 124.909 18.0362C124.635 17.695 124.788 17.1818 124.993 16.7881Z" fill="white"/>
                                <path d="M130.346 20.3284C130.314 19.4827 130.106 18.637 129.702 17.8379C127.91 19.6431 125.882 21.2149 123.692 22.5009C123.103 22.8392 122.494 23.1688 121.825 23.265C121.158 23.3554 120.414 23.1688 119.989 22.638C119.329 21.8011 119.707 20.5646 120.2 19.6168C121.233 17.6338 122.676 15.8753 124.404 14.4755C124.401 14.4755 124.398 14.4755 124.396 14.4755C124.176 14.4697 123.948 14.4814 123.723 14.5018C123.536 14.5163 123.351 14.5484 123.161 14.5863C122.589 14.6972 122.027 14.8984 121.487 15.1842C120.448 15.7412 119.64 16.5577 119.095 17.5055C118.088 19.2669 117.978 21.4919 118.991 23.4225C119.19 23.8045 119.433 24.1603 119.698 24.4781C120.001 24.8485 120.347 25.178 120.725 25.4638C120.734 25.4697 120.743 25.4755 120.751 25.4842C123.951 23.7753 127.143 22.0635 130.34 20.3604C130.346 20.3517 130.346 20.34 130.346 20.3284Z" fill="white"/>
                                <path d="M124.37 26.6653C125.305 26.6536 126.26 26.4262 127.146 25.9508C128.943 24.9885 130.057 23.2387 130.299 21.3403C127.916 23.3962 125.227 25.0818 122.353 26.327C122.996 26.5516 123.683 26.6711 124.37 26.6653Z" fill="white"/>
                                <path d="M125.18 14.5397C125.183 14.5397 125.183 14.5397 125.18 14.5397C124.927 14.4959 124.67 14.4726 124.407 14.4726C124.407 14.4726 124.407 14.4726 124.404 14.4755C124.664 14.4755 124.918 14.4959 125.172 14.5397C125.178 14.5397 125.178 14.5397 125.18 14.5397Z" fill="white"/>
                                <path d="M129.702 17.8321C129.702 17.835 129.705 17.835 129.705 17.8379C129.708 17.835 129.711 17.8321 129.714 17.8321C129.699 17.7883 129.676 17.7533 129.656 17.7096C129.644 17.695 129.636 17.6717 129.624 17.6571C129.621 17.66 129.618 17.66 129.616 17.6629C129.624 17.6775 129.636 17.6979 129.644 17.7125C129.665 17.7534 129.685 17.7883 129.702 17.8321Z" fill="white"/>
                                <path d="M121.891 26.1462C121.493 25.9712 121.112 25.7496 120.76 25.4871C120.751 25.493 120.743 25.4959 120.734 25.5017C121.095 25.7729 121.484 26.0004 121.894 26.1812C122.03 26.2454 122.171 26.2979 122.312 26.3445C122.327 26.3387 122.341 26.3299 122.356 26.3241C122.341 26.3183 122.327 26.3154 122.312 26.3095C122.168 26.2629 122.027 26.2104 121.891 26.1462Z" fill="white"/>
                                <path d="M130.305 21.2995C130.302 21.3111 130.302 21.3257 130.299 21.3374C130.302 21.3345 130.302 21.3345 130.305 21.3315C130.348 21.0137 130.357 20.69 130.348 20.3604C130.354 20.6812 130.346 20.9933 130.305 21.2995Z" fill="white"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_57_1957" x="0.5" y="0.5" width="242" height="82" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_1957"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_1957" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <p className="intro">Welcome To The Nexus!</p>
                    <p className="sub-intro">Let’s see where you are in your e-commerce journey!</p>
                    <Button color="secondary">
                    <div className="landing-button">
                        <span className="text">Start Now</span>
                    </div>
                    </Button>
                </div>
            </div>
            <div className="filler">

            </div>
        </div>
    );
}

export default LandingPage;
