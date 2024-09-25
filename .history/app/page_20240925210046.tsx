'use client'
import Header from "@/components/shared/client/Header/header";
import Sidebar, { SidebarItem, SidebarContext } from '../components/shared/client/SideBarMenu/sideBarMenu';
import { useState } from "react";
import NomailPaleSvg from '../components/shared/svg/nomailPaleSvg'
import NewMail from '../components/shared/svg/newMail'
import InboxSvg from '../components/shared/svg/InboxSvg'
import CalendarSvg from '../components/shared/svg/calendarSvg'
import FavoritesSvg from '../components/shared/svg/FavoritesSvg'
import ArchiveSvg from '../components/shared/svg/ArchiveSvg'
import GroupSvg from '../components/shared/svg/groupSvg'
import TodoSvg from '../components/shared/svg/TodoSvg'
import MainFrameMessage from "@/components/shared/client/MainFrameMessage";


// Home component managing the sidebar state
export default function Home() {
    const [expanded, setExpanded] = useState(false); // Sidebar state

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}> {/* Provide state to children */}
            <div>
                <Header />

                <div className=" flex">

                    <div >
                        <Sidebar>
                            <SidebarItem
                                icon={<NewMail/>}
                                text="New Mail"
                            />
                            <SidebarItem
                                icon={<InboxSvg />}
                                text="Inbox"
                            />
                            <SidebarItem
                                icon={<CalendarSvg />}
                                text="Calendar"
                            />
                            <SidebarItem
                                icon={<FavoritesSvg />}
                                text="Favorites"
                            />
                            <SidebarItem
                                icon={<ArchiveSvg />}
                                text="Archive"
                            />
                            <SidebarItem
                                icon={<GroupSvg />}
                                text="Groups"
                            />
                            <SidebarItem
                                icon={<TodoSvg />}
                                text="To do"
                            />
                        </Sidebar>
                    </div>

                    <div>
                        <MainFrameMessage/>
                    </div>

                

                    <div className="flex flex-grow justify-center items-center h-screen flex-col font-semibold text-textGray gap-7 text-2xl">
                        <NomailPaleSvg/>
                        <h1>No message selected</h1>
                    </div>

                </div>



            </div>
        </SidebarContext.Provider>
    );
}
