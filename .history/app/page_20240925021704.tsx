'use client'
import Header from "@/components/shared/client/Header/header";
import Sidebar, { SidebarItem, SidebarContext } from '../components/shared/client/SideBarMenu/sideBarMenu';
import { useState } from "react";
import NomailPaleSvg from '../components/shared/svg/nomailPaleSvg'
import PencilSvg from '../components/shared/svg/pencilSvg'

// Home component managing the sidebar state
export default function Home() {
    const [expanded, setExpanded] = useState(false); // Sidebar state

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}> {/* Provide state to children */}
            <div>
                <Header /> {/* Header can now access sidebar state */}

                <div className=" flex">

                    <div>
                        <Sidebar>
                            <SidebarItem
                                icon={<PencilSvg/>}
                                text="Your Profile"
                            />
                            <SidebarItem
                                icon={<img src="/shopping-bag.png" alt="Basket" width={35} height={35} />}
                                text="Your Basket"
                            />
                            <SidebarItem
                                icon={<img src="/fulfillment.png" alt="Orders" width={35} height={35} />}
                                text="Your Orders"
                            />
                            <SidebarItem
                                icon={<img src="/ShoppingCheck3.png" alt="Checkout" width={35} height={35} />}
                                text="Checkout"
                            />
                            <SidebarItem
                                icon={<img src="/exit.png" alt="Logout" width={35} height={35} />}
                                text="Logout"
                            />
                        </Sidebar>
                    </div>



                    <div className="flex justify-items-center">
                        <NomailPaleSvg/>
                    </div>
                </div>



            </div>
        </SidebarContext.Provider>
    );
}
