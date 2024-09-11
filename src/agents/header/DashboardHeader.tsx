import { useState } from "react";
import { Avatar, Dropdown, Layout, theme } from "antd";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../../login/login-context/AuthContext";

const { Header } = Layout;

const DashboardHeader = () => {
  const auth = useAuth()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // State to control mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define dropdown menu items
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button onClick={() => auth.logout()} rel="noopener noreferrer">
          Log out
        </button>
      ),
    },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        padding: 0,
        background: colorBgContainer,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto px-4 flex items-center h-16">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden mr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="gap-6 md:flex-1 md:justify-start hidden  md:flex">
          <Link to="/agent" className="font-semibold text-[1rem] hover:text-blue-500">
            Properties
          </Link>
          <Link to="agent-appointments" className="font-semibold text-[1rem] hover:text-blue-500">
            Appointments
          </Link>
          <Link to="agent-transactions" className="font-semibold text-[1rem] hover:text-blue-500">
            Transactions
          </Link>
          <Link to="property-create" className="font-semibold text-[1rem] hover:text-blue-500">
            Create
          </Link>
        </nav>

        {/* Company Logo */}
        <Link to="/agent" className="flex-1 flex justify-center">
          <img
            src="/images/logo_of_REMS.avif"
            alt="REMS Logo"
            className="w-24 h-16 object-contain lg:mr-[25rem]"
          />
        </Link>

        {/* User Avatar with Dropdown */}
        <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
          <Avatar
            size={32}
            icon={<UserOutlined />}
            className="cursor-pointer ml-4"
          />
        </Dropdown>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              to="/agent"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Properties
            </Link>
            <Link
              to="agent-appointments"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Appointments
            </Link>
            <Link
              to="agent-transactions"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Transactions
            </Link>
            <Link
              to="property-create"
              className="font-semibold text-lg"
              onClick={toggleMobileMenu}
            >
              Create
            </Link>
          </nav>
        </div>
      )}
    </Header>
  );
};

export default DashboardHeader;