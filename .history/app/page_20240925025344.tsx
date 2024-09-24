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


// Home component managing the sidebar state
export default function Home() {
    const [expanded, setExpanded] = useState(false); // Sidebar state

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}> {/* Provide state to children */}
            <div>
                <Header /> {/* Header can now access sidebar state */}

                <div className=" flex">

                    <div className="absolute">
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



                    <div className="flex flex-grow justify-center items-center h-screen flex-col we">
                        <NomailPaleSvg/>
                        <h1>No message selected</h1>
                    </div>
                </div>



            </div>
        </SidebarContext.Provider>
    );
}
