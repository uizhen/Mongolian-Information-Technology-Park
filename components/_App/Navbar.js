import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../utils/recoil-atoms";
import Link from "../../utils/ActiveLink";
import TopHeader from "./TopHeader";

const Navbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        {/* TopHeader */}
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link href="/">
                    <a
                      onClick={() => setCollapsed(true)}
                      className="navbar-brand"
                    >
                      <img src="/img/logo.png" alt="logo" />
                    </a>
                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Нүүр <i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home One
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index2" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Two
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index3" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Three
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index4" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Four
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index5" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Five
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index6" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Six
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index7" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Seven
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index8" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Eight
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/index9" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Home Nine
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                          >
                            About
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Pages <i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/pricing" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Pricing
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/testimonials" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Testimonials
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/team" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Team
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/faq" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                FAQ
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Coming Soon
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/404" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                404 Error Page
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/privacy-policy"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Privacy Policy
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/terms-conditions"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Terms & Conditions
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Бидний тухай<i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/pricing" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Pricing
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/testimonials" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Testimonials
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/team" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Team
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/faq" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                FAQ
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Coming Soon
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/404" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                404 Error Page
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/privacy-policy"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Privacy Policy
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/terms-conditions"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Terms & Conditions
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Хууль Эрх Зүй<i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/pricing" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                МТҮП-ын бодлогын баримт бичиг
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/testimonials" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Удирдах байгууллагын тогтоолууд
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/team" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                байгууллагын дүрэм журам
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/faq" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Удирдах тушаал
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                Хууль тогтоомж{" "}
                                <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Монгол улсын хууль
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Хөгжлийн бодлого
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Хөгжлийн хөтөлбөрүүд
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Coming Soon
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/404" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                404 Error Page
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/privacy-policy"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Privacy Policy
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/terms-conditions"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Terms & Conditions
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Ил тод байдал<i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Coming Soon
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                Үйл ажилгааны ил тод байдал{" "}
                                <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Coming Soon
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <Link href="/coming-soon" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Coming Soon
                              </a>
                            </Link>
                          </li>
                        </ul>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                Үйл ажилгааны ил тод байдал{" "}
                                <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Үйл ажиллагааны төлөвлөгөө
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Үйл ажиллагааны тайлан
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Хяналт шалгалт
                                  </a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Өргөдөл гомдлын шийдвэрлэлт
                                  </a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Статистик
                                  </a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Тусгай зөвшөөрөл
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="/#">
                              <a
                                onClick={(e) => e.preventDefault()}
                                className="nav-link"
                              >
                                User <i className="bx bx-chevron-down"></i>
                              </a>
                            </Link>

                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="/sign-in" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/sign-up" activeClassName="active">
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Sign Up
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link
                                  href="/forgot-password"
                                  activeClassName="active"
                                >
                                  <a
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Forgot Password
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/#" activeClassName="active">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Services <i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/services-one" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Services Style One
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/services-two" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Services Style Two
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-three"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Services Style Three
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Service Details
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/#">
                          <a
                            onClick={(e) => e.preventDefault()}
                            className="nav-link"
                          >
                            Мэдээ<i className="bx bx-chevron-down"></i>
                          </a>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/blog-grid" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Blog Grid
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-left-sidebar"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Blog Left Sidebar
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-right-sidebar"
                              activeClassName="active"
                            >
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Blog Right Sidebar
                              </a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/blog-details" activeClassName="active">
                              <a
                                onClick={() => setCollapsed(true)}
                                className="nav-link"
                              >
                                Blog Details
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/contact" activeClassName="active">
                          <a
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                          >
                            Contact
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="others-option">
                    <div className="get-quote">
                      <Link href="https://www.facebook.com/ITPARK.mn">
                        <a className="default-btn">Холбогдох</a>
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
