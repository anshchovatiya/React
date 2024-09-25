import { Fragment, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "../main/css/Header.module.css";
import { NavLink } from "react-router-dom";
import { FaQuestion, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CurrencySelector, LanguageButton } from "./LanguageButton";

export default function MenubarIcon() {
  let [isOpen, setIsOpen] = useState(false);

  function handleNavLinkClick() {
    setIsOpen(false);
  }

  return (
    <div className={styles.menuIcon}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <div><CgMenuLeft /></div>
        </SheetTrigger>
        <SheetContent side="left" className="block pt-[8vh]" title="fdhf">
           <SheetTitle></SheetTitle> 
           <SheetDescription></SheetDescription>
            <div className="relative">
              <div className="max-h-[75vh] overflow-y-auto overflow-x-hidden HeaderMenuSheet pr-2">
                <Accordion type="single" collapsible className="border-none">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex items-center py-3">
                      <div className="text-black">Home</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="leading-[28px]">
                        {[
                          { name: "Home Fashion", link: "/home" },
                          { name: "Home Gift Card", link: "/home" },
                          { name: "Home Headphone", link: "/home" },
                          { name: "Home Multi Brand", link: "/home" },
                          { name: "Home Skincare", link: "/home" },
                          { name: "Home Furniture", link: "/home" },
                          { name: "Home Skateboard", link: "/home" },
                          { name: "Home Stroller", link: "/home" },
                          { name: "Home Decor", link: "/home" },
                          { name: "Home Electronic", link: "/home" },
                          { name: "Home Setup Gear", link: "/home" },
                          { name: "Home Dog Accessories", link: "/home" },
                          { name: "Home Kitchen Wear", link: "/home" },
                        ].map((current) => {
                          return (
                            <Fragment key={current.name}>
                              <NavLink
                                onClick={handleNavLinkClick}
                                className="block hover:text-[crimson] cursor-pointer"
                                to={current.link}
                              >
                                {current.name}
                              </NavLink>
                            </Fragment>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="flex items-center py-3">
                      <div className="text-black">Shop</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-2 border-l ">
                        {[
                          {
                            name: "Shop layout",
                            list: [
                              {
                                linkName: "Default",
                                link: "/shop",
                              },
                              {
                                linkName: "Left sidebar",
                                link: "/shop",
                              },
                              {
                                linkName: "Right sidebar",
                                link: "/shop",
                              },
                              {
                                linkName: "Full-width",
                                link: "/shop",
                              },
                              {
                                linkName: "Sub collection",
                                link: "/shop",
                              },
                              {
                                linkName: "Collection list",
                                link: "/shop",
                              },
                            ],
                          },
                          {
                            name: "Features",
                            list: [
                              {
                                linkName: "Pagination links",
                                link: "/shop",
                              },
                              {
                                linkName: "Pagination loadmore",
                                link: "/shop",
                              },
                              {
                                linkName: "Pagination infinite scrolling",
                                link: "/shop",
                              },
                              {
                                linkName: "Filter sidebar",
                                link: "/shop",
                              },
                              {
                                linkName: "Filter hidden",
                                link: "/shop",
                              },
                            ],
                          },
                          {
                            name: "Product styles",
                            list: [
                              {
                                linkName: "product style list",
                                link: "/shop",
                              },
                              {
                                linkName: "Product style 01",
                                link: "/shop",
                              },
                              {
                                linkName: "Product style 02",
                                link: "/shop",
                              },
                              {
                                linkName: "Product style 03",
                                link: "/shop",
                              },
                            ],
                          },
                        ].map((current, index) => {
                          return (
                            <Fragment key={index + current.name}>
                              <Accordion
                                type="single"
                                collapsible
                                className="mt-2"
                              >
                                <AccordionItem
                                  value={`item-${index + 1}`}
                                  className="border-0"
                                >
                                  <AccordionTrigger className="flex py-1">
                                    <div className="text-black">
                                      {current.name}
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="mt-3 pl-4">
                                    {current.list.map((current) => {
                                      return (
                                        <Fragment key={current.linkName}>
                                          <NavLink
                                            onClick={handleNavLinkClick}
                                            className="block hover:text-[crimson] cursor-pointer leading-[25px]"
                                            to={current.link}
                                          >
                                            {current.linkName}
                                          </NavLink>
                                        </Fragment>
                                      );
                                    })}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </Fragment>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="flex items-center py-3">
                      <div className="text-black">Products</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-2 border-l ">
                        {[
                          {
                            name: "Product layout",
                            list: [
                              {
                                linkName: "Product Default",
                                link: "/product",
                              },
                              {
                                linkName: "Product grid",
                                link: "/product",
                              },
                              {
                                linkName: "Product stacked",
                                link: "/product",
                              },
                              {
                                linkName: "Product right thumbnails",
                                link: "/product",
                              },
                              {
                                linkName: "Product description list",
                                link: "/product",
                              },
                              {
                                linkName: "Product drawer sidebar",
                                link: "/product",
                              },
                            ],
                          },
                          {
                            name: "Product details",
                            list: [
                              {
                                linkName: "Product inner Zoom",
                                link: "/product",
                              },
                              {
                                linkName: "Product zoom magnifier",
                                link: "/product",
                              },
                              {
                                linkName: "Product video",
                                link: "/product",
                              },
                              {
                                linkName: "Product 3D, AR models",
                                link: "/product",
                              },
                              {
                                linkName: "Advanced product types",
                                link: "/product",
                              },
                            ],
                          },
                          {
                            name: "Product swatch",
                            list: [
                              {
                                linkName: "Product color swatch",
                                link: "/product",
                              },
                              {
                                linkName: "Product rectangle",
                                link: "/product",
                              },
                              {
                                linkName: "Product swatch image",
                                link: "/product",
                              },
                              {
                                linkName: "Product swatch dropdown",
                                link: "/product",
                              },
                            ],
                          },
                          {
                            name: "Product features",
                            list: [
                              {
                                linkName: "Frequently bought together",
                                link: "/product",
                              },
                              {
                                linkName: "Product upsell features",
                                link: "/product",
                              },
                              {
                                linkName: "Product pre-orders",
                                link: "/product",
                              },
                              {
                                linkName: "Back in stock notification",
                                link: "/product",
                              },
                              {
                                linkName: "Quick order list",
                                link: "/product",
                              },
                            ],
                          },
                        ].map((current, index) => {
                          return (
                            <Fragment key={current.name + index}>
                              <Accordion
                                type="single"
                                collapsible
                                className="mt-2"
                              >
                                <AccordionItem
                                  value={`item-${index + 1}`}
                                  className="border-0"
                                >
                                  <AccordionTrigger className="flex py-1">
                                    <div className="text-black">
                                      {current.name}
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="mt-3 pl-4">
                                    {current.list.map((current) => {
                                      return (
                                        <Fragment key={current.linkName}>
                                          <NavLink
                                            onClick={handleNavLinkClick}
                                            className="block hover:text-[crimson] cursor-pointer leading-[25px]"
                                            to={current.link}
                                          >
                                            {current.linkName}
                                          </NavLink>
                                        </Fragment>
                                      );
                                    })}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </Fragment>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="flex items-center py-3">
                      <div className="text-black">Pages</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="leading-[28px]">
                        {[
                          { name: "About us", link: "/about" },
                          { name: "Brands", link: "/home" },
                          { name: "Contact", link: "/contact" },
                          { name: "FAQ", link: "/faq" },
                          { name: "View cart", link: "/cart" },
                          { name: "Check out", link: "/checkout" },
                          { name: "My account", link: "/account" },
                          { name: "Invoice", link: "/home" },
                          { name: "Timeline", link: "/home" },
                          { name: "Payment Confirmation", link: "/home" },
                        ].map((current, index) => {
                          return (
                            <Fragment key={current.name + index}>
                              <NavLink
                                onClick={handleNavLinkClick}
                                className="block hover:text-[crimson] cursor-pointer"
                                to={current.link}
                              >
                                {current.name}
                              </NavLink>
                            </Fragment>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="flex items-center py-3">
                      <div className="text-black">Blog</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="leading-[28px]">
                        {[
                          { name: "Blog grid", link: "/blog" },
                          { name: "Left Sidebar", link: "/home" },
                          { name: "Right sidebar", link: "/blog" },
                          { name: "Blog list", link: "/blog" },
                          { name: "Single Post", link: "/blog" },
                        ].map((current, index) => {
                          return (
                            <Fragment key={current.name + index}>
                              <NavLink
                                onClick={handleNavLinkClick}
                                className="block hover:text-[crimson] cursor-pointer"
                                to={current.link}
                              >
                                {current.name}
                              </NavLink>
                            </Fragment>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="py-3 font-medium text-black">Buy now</div>
                <div className="flex gap-3 mt-3">
                  <button className="flex gap-2 items-center border py-2 px-3 rounded bg-[rgb(242,242,242)] text-black hover:bg-black hover:text-white font-medium duration-500 text-xs md:text-sm">
                    <FaRegHeart />
                    <span>Wishlist</span>
                  </button>
                  <button className="flex gap-2 items-center border py-2 px-3 rounded bg-[rgb(242,242,242)] text-black hover:bg-black hover:text-white font-medium duration-500 text-xs md:text-sm">
                    <IoSearch />
                    <span>Search</span>
                  </button>
                </div>
                <div className="mt-5 text-xs  md:text-sm">
                  <div className="flex gap-0.5 border-b border-black w-fit items-center font-medium  text-black hover:text-[crimson] hover:border-[crimson] cursor-pointer">
                    <p>Need Help</p>
                    <FaQuestion className="text-xs" />
                  </div>
                  <div className=" mt-3">
                    <div>
                      Address:{" "}
                      <b>
                        1234 Fashion Street, Suite 567, <br />
                        New York, NY 10001
                      </b>
                    </div>
                    <div className="mt-1">
                      Email : <b>info@fashionshop.com</b>
                    </div>
                    <div className="mt-1">
                      Phone: <b>(212) 555-1234</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          <SheetFooter>
            <div className="absolute bottom-8 bg-white w-[88%] pt-2">
              <button className="flex gap-2 items-center border py-2 px-3 rounded bg-[rgb(242,242,242)] text-black hover:bg-black hover:text-white font-medium duration-500 text-xs md:text-sm mb-3">
                 <FiUser /> 
                <span>Login</span>
              </button>
              <div className="min-500:flex *:mt-2 -ml-3 w-full border-t">
                <CurrencySelector />
                <LanguageButton />
              </div>
            </div>
            </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
