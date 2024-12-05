import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { navigation } from "./navigation";
import AuthModal from "../../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { deepPurple } from "@mui/material/colors";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nava() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, cart } = useSelector((store) => store);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();

  useEffect(() => {
    if (jwt) {
     // dispatch(getUser(jwt));
     // dispatch(getCart(jwt));
    }
  }, [jwt]);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
    
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => {
    handleCloseUserMenu();
   // dispatch(logout());
  };
  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    auth.user?.role === "ROLE_ADMIN"
      ? navigate("/admin")
      : navigate("/account/order");
  };

  return (
    <div className="bg-white pb-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-[#ff9b05]-600 text-[#ff9b05]-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="/"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-[#f28006] px-4 text-sm font-medium text-black sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="data:image/png;base64,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"
                    alt="Shopwithzosh"
                    className="h-8 w-8 mr-2"
                  />
                </Link>
              </div>

             {/* Flyout menus */}

<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
  <div className="flex h-full space-x-8">
    {navigation.categories.map((category) => (
      <Popover key={category.name} className="flex">
        {({ open, close }) => (
          <>
            <div className="relative flex">
              <Popover.Button
                className={classNames(
                  open
                    ? "border-#ff9b05-600 text-#ff9b05-600"
                    : "border-transparent text-gray-700 hover:text-gray-800",
                  "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                )}
              >
                {category.name}
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                <div
                  className="absolute inset-0 top-1/2 bg-white shadow"
                  aria-hidden="true"
                />

                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                      <div className="col-start-2 grid grid-cols-2 gap-x-8">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-base sm:text-sm"
                          >
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute inset-0 z-10"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${section.name}-heading`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            {/* Debugging log */}
                            {console.log('Section Items:', section.items)}
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                            <ul
                              role="list"
                              aria-labelledby={`${section.name}-heading`}
                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flex">
                                  <p
                                    onClick={() =>
                                      handleCategoryClick(
                                        category,
                                        section,
                                        item,
                                        close
                                      )
                                    }
                                    className="cursor-pointer hover:text-gray-800 break-words text-xs sm:text-sm md:text-base"
                                  >
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    ))}


 


                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-orange-700 animate-blink hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      {/* <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                      >
                        Dashboard
                      </Button> */}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleMyOrderClick}>
                          {auth.user?.role === "ROLE_ADMIN"
                            ? "Admin Dashboard"
                            : "My Orders"}
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Signin
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex items-center lg:ml-6">
                
                  <p onClick={()=>navigate("/products/search")} className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button
                    onClick={() => navigate("/cart")}
                    className="group -m-2 flex items-center p-2"
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      {cart.cart?.totalItem}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}