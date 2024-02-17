import logo from "../../assets/snap.svg";
import menu from "../../assets/menu.svg";
import arrowdown from "../../assets/arrow-down.svg";
// import arrowup from "../../assets/arrow-up.svg";
import todo from "../../assets/todo.svg";
import calendar from "../../assets/calendar.svg";
import plan from "../../assets/planning.svg";
import reminder from "../../assets/reminders.svg";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="flex justify-between m-[3%] font-epilogue text-[14px] font-[00] text-[#686868]">
      <div className="flex gap-[5rem]">
        <div>
          <img src={logo} alt="" />
        </div>
        {/* charka */}
        <div className="ml-[8rem] mt-[-0.5rem] mb-10 md:hidden">
          <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
            <img src={menu} alt="" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <div className="text-[16px] font-[500] mt-20 space-y-5">
                  <div className="space-y-5">
                    <div>
                      <Accordion allowMultiple>
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Features</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel lineHeight={10} marginLeft={4}>
                            <div className="font-epilogue">
                              <div className="flex gap-4 items-center">
                                <div>
                                  <img src={todo} alt="" />
                                </div>
                                <div>Todo List</div>
                              </div>
                              <div className="flex gap-4 items-center">
                                <div>
                                  <img src={calendar} alt="" />
                                </div>
                                <div>Calendar</div>
                              </div>
                              <div className="flex gap-4 items-center">
                                <div>
                                  <img src={plan} alt="" />
                                </div>
                                <div>Reminders</div>
                              </div>
                              <div className="flex gap-4 items-center">
                                <div>
                                  <img src={reminder} alt="" />
                                </div>
                                <div>Planning</div>
                              </div>
                            </div>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box>Company</Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel lineHeight={10} marginLeft={4}>
                            <div className="font-epilogue">
                              <div>History</div>
                              <div>Our Team</div>
                              <div>Blog</div>
                            </div>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div className="">Careers</div>
                    <div className="">About</div>
                  </div>
                  <div className="space-y-5 text-center">
                    <div className="ml-auto ">Login</div>
                    <div
                      className=" w-[196px] m-auto h-[42px] py-[6px] mt-[-10px] text-center rounded-[14px] border-[#686868] border-[1.5px]
                ">
                      Register
                    </div>
                  </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="flex max-sm:hidden">
          <div className="flex gap-10">
            <div className="flex">
              <div className="">
                <Menu>
                  <MenuButton>
                    <div className="flex gap-2 cursor-pointer hover:text-[#151515]">
                      <p>Features</p>
                      <div className="m-auto">
                        <img
                          className="w-3 h-2 items-center"
                          src={arrowdown}
                          alt=""
                        />
                      </div>
                      {/* <div className="m-auto">
                        <img
                          className="w-3 h-2 items-center"
                          src={arrowup}
                          alt=""
                        />
                      </div> */}
                    </div>
                  </MenuButton>
                  <MenuList
                    px={4}
                    borderRadius={10}
                    minWidth="10rem"
                    marginLeft={-20}>
                    <div className="font-[600]">
                      <MenuItem>
                        <div className="flex gap-4 items-center">
                          <div>
                            <img src={todo} alt="" />
                          </div>
                          <div>Todo List</div>
                        </div>
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <div className="flex gap-4 items-center">
                          <div>
                            <img src={calendar} alt="" />
                          </div>
                          <div>Calendar</div>
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div className="flex gap-4 items-center">
                          <div>
                            <img src={reminder} alt="" />
                          </div>
                          <div>Reminders</div>
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div className="flex gap-4 items-center">
                          <div>
                            <img src={plan} alt="" />
                          </div>
                          <div>Planning</div>
                        </div>
                      </MenuItem>
                    </div>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <div>
              <Menu>
                <MenuButton>
                  <div className="flex gap-2 cursor-pointer hover:text-[#151515]">
                    <p>Company</p>
                    <div className="m-auto">
                      <img
                        className="w-3 h-2 items-center"
                        src={arrowdown}
                        alt=""
                      />
                    </div>
                  </div>
                </MenuButton>
                <MenuList
                  px={2}
                  borderRadius={10}
                  minWidth="7rem"
                  marginLeft={-8}>
                  <div className="font-[600]">
                    <MenuItem>History</MenuItem>
                    <MenuItem>Our Team</MenuItem>
                    <MenuItem>Blog</MenuItem>
                  </div>
                </MenuList>
              </Menu>
            </div>
            <div className="cursor-pointer hover:text-[#151515]">Careers</div>
            <div className="cursor-pointer hover:text-[#151515]">About</div>
          </div>
          <div className="flex gap-10 absolute right-[3%]">
            <div className="ml-auto cursor-pointer hover:text-[#151515]">
              Login
            </div>
            <div
              className="cursor-pointer w-[104px] h-[42px] py-[8.9px] mt-[-10px] text-center rounded-[14px] border-[#686868] border-[1.5px]
               hover:text-[#151515] hover:border-[#151515] ">
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
